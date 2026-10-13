const db = require("../../models");
const AdmissionPolicy = db.admissionPolicies;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const AuthUser = db.AuthUser;
const Role = db.Role;

// Add a New Admission Policy Section
exports.addAdmissionPolicySection = async (req, res) => {
    try {
        const { section_name, heading, content, additional_data, sub_heading } = req.body;

        const createdByAuthUserId = req.user.user_id;
        const createdByAuthUserRoleId = req.user.userRoleId;

        if (!createdByAuthUserId || !createdByAuthUserRoleId) {
            return res.status(StatusCode.BAD_REQUEST.code).send({
                ...RESPONSE.Failure,
                Message: "Missing required parameters: createdByAuthUserId and createdByAuthUserRoleId.",
            });
        }

        const creator = await AuthUser.findOne({
            where: { user_id: createdByAuthUserId, role_id: createdByAuthUserRoleId, delete_status: 0 },
        });

        if (!creator) {
            return res.status(StatusCode.UNAUTHORIZED.code).send({
                ...RESPONSE.Failure,
                Message: `Invalid creator: User ID ${createdByAuthUserId} not found.`,
            });
        }

        const roleExists = await Role.findOne({ where: { role_id: createdByAuthUserRoleId, delete_status: 0 } });
        if (!roleExists) {
            return res.status(StatusCode.BAD_REQUEST.code).send({
                ...RESPONSE.Failure,
                Message: `Invalid role ID: ${createdByAuthUserRoleId} does not exist in roles.`,
            });
        }

        if (!section_name || !heading || !content) {
            return res.status(StatusCode.BAD_REQUEST.code).send({
                ...RESPONSE.Failure,
                Message: "Section name, heading, and content are required.",
            });
        }

        const existingSection = await AdmissionPolicy.findOne({
            where: { section_name, delete_status: 0 }
        });

        if (existingSection) {
            return res.status(StatusCode.CONFLICT.code).send({
                ...RESPONSE.Failure,
                Message: `Section with name "${section_name}" already exists.`,
            });
        }

        const newSection = await AdmissionPolicy.create({
            section_name,
            heading,
            sub_heading,
            content,
            additional_data: JSON.stringify(additional_data) || JSON.stringify([]),
        });

        RESPONSE.Success.Message = "Admission Policy section added successfully.";
        RESPONSE.Success.data = [{ admission_policy_id: newSection.admission_policy_id }];
        return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error adding Admission Policy section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to add Admission Policy section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Get All Admission Policy Sections
exports.getAllAdmissionPolicySections = async (req, res) => {
    try {
        const sections = await AdmissionPolicy.findAll({
            where: { delete_status: 0 },
        });

        const parsedSections = sections.map((section) => {
            const additionalData = JSON.parse(section.additional_data);
            return {
                ...section.toJSON(),
                additional_data: additionalData,
            };
        });

        RESPONSE.Success.Message = "Admission Policy sections retrieved successfully.";
        RESPONSE.Success.data = parsedSections;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching Admission Policy sections:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch Admission Policy sections.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Get by Section Name
exports.getAllAdmissionPolicySectionsBySectionName = async (req, res) => {
    const { section_name } = req.body;

    try {
        const sections = await AdmissionPolicy.findAll({
            where: { delete_status: 0, section_name },
        });

        const parsedSections = sections.map((section) => {
            const additionalData = JSON.parse(section.additional_data);
            return {
                ...section.toJSON(),
                additional_data: additionalData,
            };
        });

        RESPONSE.Success.Message = "Admission Policy sections retrieved successfully.";
        RESPONSE.Success.data = parsedSections;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching Admission Policy by section name:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch Admission Policy section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Get by ID
exports.getAdmissionPolicySectionById = async (req, res) => {
    try {
        const { admission_policy_id } = req.params;

        const section = await AdmissionPolicy.findOne({
            where: { admission_policy_id: admission_policy_id, delete_status: 0 },
        });

        if (!section) {
            RESPONSE.Failure.Message = "Admission Policy section not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        const parsedSection = {
            ...section.toJSON(),
            additional_data: JSON.parse(section.additional_data),
        };

        RESPONSE.Success.Message = "Admission Policy section retrieved successfully.";
        RESPONSE.Success.data = parsedSection;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching Admission Policy section by ID:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch Admission Policy section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Soft Delete
exports.deleteAdmissionPolicySection = async (req, res) => {
    try {
        const { admission_policy_id } = req.params;

        const section = await AdmissionPolicy.findOne({
            where: { admission_policy_id: admission_policy_id },
        });

        if (!section) {
            RESPONSE.Failure.Message = "Admission Policy section not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        if (section.delete_status === 1) {
            RESPONSE.Failure.Message = "Admission Policy section is already deleted.";
            return res.status(StatusCode.OK.code).send(RESPONSE.Failure);
        }

        await AdmissionPolicy.update(
            { delete_status: 1, deletedAt: new Date() },
            { where: { admission_policy_id: admission_policy_id } }
        );

        RESPONSE.Success.Message = "Admission Policy section soft deleted successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error deleting Admission Policy section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to delete Admission Policy section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Update Admission Policy Section
exports.updateAdmissionPolicySection = async (req, res) => {
    try {
        const { admission_policy_id } = req.params;
        const { section_name, heading, content, additional_data, sub_heading } = req.body;

        const section = await AdmissionPolicy.findOne({
            where: { admission_policy_id: admission_policy_id, delete_status: 0 },
        });

        if (!section) {
            RESPONSE.Failure.Message = "Admission Policy section not found or is deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        const updatedAdditionalData =
            additional_data !== undefined ? additional_data : JSON.parse(section.additional_data);

        await AdmissionPolicy.update(
            { section_name, heading, sub_heading, content, additional_data: JSON.stringify(updatedAdditionalData) },
            { where: { admission_policy_id: admission_policy_id } }
        );

        RESPONSE.Success.Message = "Admission Policy section updated successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error updating Admission Policy section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to update Admission Policy section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Restore Soft Deleted
exports.restoreAdmissionPolicySection = async (req, res) => {
    try {
        const { admission_policy_id } = req.params;

        const section = await AdmissionPolicy.findOne({
            where: { admission_policy_id: admission_policy_id, delete_status: 1 },
        });

        if (!section) {
            RESPONSE.Failure.Message = "Admission Policy section not found or is not soft-deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        await AdmissionPolicy.update(
            { delete_status: 0, deletedAt: null },
            { where: { admission_policy_id: admission_policy_id } }
        );

        RESPONSE.Success.Message = "Admission Policy section restored successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error restoring Admission Policy section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to restore Admission Policy section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};
