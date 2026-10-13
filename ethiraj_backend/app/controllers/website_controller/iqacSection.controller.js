const db = require("../../models");
const IQACSection = db.iqacSections;  // <-- changed
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const AuthUser = db.AuthUser;
const Role = db.Role;


// Add a New IQAC Section
exports.addIQACSection = async (req, res) => {
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
                Message: `Invalid creator: Role ID ${createdByAuthUserId} not found.`,
            });
        }

        const roleExists = await Role.findOne({ where: { role_id: createdByAuthUserId, delete_status: 0 } });
        if (!roleExists) {
            return res.status(StatusCode.BAD_REQUEST.code).send({
                ...RESPONSE.Failure,
                Message: `Invalid role ID: ${createdByAuthUserId} does not exist in roles.`,
            });
        }

        if (!section_name || !heading || !content) {
            return res.status(StatusCode.BAD_REQUEST.code).send({
                ...RESPONSE.Failure,
                Message: "Section name, heading, and content are required.",
            });
        }

        const existingSection = await IQACSection.findOne({
            where: { section_name, delete_status: 0 }
        });

        if (existingSection) {
            return res.status(StatusCode.CONFLICT.code).send({
                ...RESPONSE.Failure,
                Message: `Section with name "${section_name}" already exists.`,
            });
        }

        const newSection = await IQACSection.create({
            section_name,
            heading,
            sub_heading,
            content,
            additional_data: JSON.stringify(additional_data) || JSON.stringify([]),
        });

        RESPONSE.Success.Message = "IQAC section added successfully.";
        RESPONSE.Success.data = [{ section_id: newSection.section_id }];
        return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error adding IQAC section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to add IQAC section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};


// Get All IQAC Sections
exports.getAllIQACSections = async (req, res) => {
    try {
        const sections = await IQACSection.findAll({
            where: { delete_status: 0 },
        });

        const parsedSections = sections.map((section) => {
            const additionalData = JSON.parse(section.additional_data);
            return {
                ...section.toJSON(),
                additional_data: additionalData,
            };
        });

        RESPONSE.Success.Message = "IQAC sections retrieved successfully.";
        RESPONSE.Success.data = parsedSections;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching IQAC sections:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch IQAC sections.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};


// Get by Section Name
exports.getAllIQACSectionsBySectionName = async (req, res) => {
    const { section_name } = req.body;

    try {
        const sections = await IQACSection.findAll({
            where: { delete_status: 0, section_name },
        });

        const parsedSections = sections.map((section) => {
            const additionalData = JSON.parse(section.additional_data);
            return {
                ...section.toJSON(),
                additional_data: additionalData,
            };
        });

        RESPONSE.Success.Message = "IQAC sections retrieved successfully.";
        RESPONSE.Success.data = parsedSections;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching IQAC by section name:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch IQAC section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};


// Get by ID
exports.getIQACSectionById = async (req, res) => {
    try {
        const { section_id } = req.params;

        const section = await IQACSection.findOne({
            where: { section_id: section_id, delete_status: 0 },
        });

        if (!section) {
            RESPONSE.Failure.Message = "IQAC section not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        const parsedSection = {
            ...section.toJSON(),
            additional_data: JSON.parse(section.additional_data),
        };

        RESPONSE.Success.Message = "IQAC section retrieved successfully.";
        RESPONSE.Success.data = parsedSection;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching IQAC section by ID:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch IQAC section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};


// Soft Delete
exports.deleteIQACSection = async (req, res) => {
    try {
        const { section_id } = req.params;

        const section = await IQACSection.findOne({
            where: { section_id: section_id },
        });

        if (!section) {
            RESPONSE.Failure.Message = "IQAC section not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        if (section.delete_status === 1) {
            RESPONSE.Failure.Message = "IQAC section is already deleted.";
            return res.status(StatusCode.OK.code).send(RESPONSE.Failure);
        }

        await IQACSection.update(
            { delete_status: 1, deletedAt: new Date() },
            { where: { section_id: section_id } }
        );

        RESPONSE.Success.Message = "IQAC section soft deleted successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error deleting IQAC section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to delete IQAC section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};


// Update IQAC Section
exports.updateIQACSection = async (req, res) => {
    try {
        const { section_id } = req.params;
        const { section_name, heading, content, additional_data, sub_heading } = req.body;

        const section = await IQACSection.findOne({
            where: { section_id: section_id, delete_status: 0 },
        });

        if (!section) {
            RESPONSE.Failure.Message = "IQAC section not found or is deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        const updatedAdditionalData =
            additional_data !== undefined ? additional_data : JSON.parse(section.additional_data);

        await IQACSection.update(
            { section_name, heading, sub_heading, content, additional_data: JSON.stringify(updatedAdditionalData) },
            { where: { section_id: section_id } }
        );

        RESPONSE.Success.Message = "IQAC section updated successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error updating IQAC section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to update IQAC section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};


// Restore Soft Deleted
exports.restoreIQACSection = async (req, res) => {
    try {
        const { section_id } = req.params;

        const section = await IQACSection.findOne({
            where: { section_id: section_id, delete_status: 1 },
        });

        if (!section) {
            RESPONSE.Failure.Message = "IQAC section not found or is not soft-deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        await IQACSection.update(
            { delete_status: 0, deletedAt: null },
            { where: { section_id: section_id } }
        );

        RESPONSE.Success.Message = "IQAC section restored successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error restoring IQAC section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to restore IQAC section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};
