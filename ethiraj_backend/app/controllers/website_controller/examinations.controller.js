const db = require("../../models");
const Examinations = db.examinations;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const AuthUser = db.AuthUser;
const Role = db.Role;


// Add a New Examinations Section
exports.addExaminationsSection = async (req, res) => {
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

        const existingSection = await Examinations.findOne({
            where: { section_name, delete_status: 0 }
        });

        if (existingSection) {
            return res.status(StatusCode.CONFLICT.code).send({
                ...RESPONSE.Failure,
                Message: `Section with name "${section_name}" already exists.`,
            });
        }

        const newSection = await Examinations.create({
            section_name,
            heading,
            sub_heading,
            content,
            additional_data: JSON.stringify(additional_data) || JSON.stringify([]),
        });

        RESPONSE.Success.Message = "Examinations section added successfully.";
        RESPONSE.Success.data = [{ examination_id: newSection.examination_id }];
        return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error adding Examinations section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to add Examinations section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};


// Get All Examinations Sections
exports.getAllExaminationsSections = async (req, res) => {
    try {
        const sections = await Examinations.findAll({
            where: { delete_status: 0 },
        });

        const parsedSections = sections.map((section) => {
            const additionalData = JSON.parse(section.additional_data);
            return {
                ...section.toJSON(),
                additional_data: additionalData,
            };
        });

        RESPONSE.Success.Message = "Examinations sections retrieved successfully.";
        RESPONSE.Success.data = parsedSections;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching Examinations sections:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch Examinations sections.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};


// Get by Section Name
exports.getAllExaminationsSectionsBySectionName = async (req, res) => {
    const { section_name } = req.body;

    try {
        const sections = await Examinations.findAll({
            where: { delete_status: 0, section_name },
        });

        const parsedSections = sections.map((section) => {
            const additionalData = JSON.parse(section.additional_data);
            return {
                ...section.toJSON(),
                additional_data: additionalData,
            };
        });

        RESPONSE.Success.Message = "Examinations sections retrieved successfully.";
        RESPONSE.Success.data = parsedSections;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching Examinations by section name:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch Examinations section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};


// Get by ID
exports.getExaminationsSectionById = async (req, res) => {
    try {
        const { examination_id } = req.params;

        const section = await Examinations.findOne({
            where: { examination_id: examination_id, delete_status: 0 },
        });

        if (!section) {
            RESPONSE.Failure.Message = "Examinations section not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        const parsedSection = {
            ...section.toJSON(),
            additional_data: JSON.parse(section.additional_data),
        };

        RESPONSE.Success.Message = "Examinations section retrieved successfully.";
        RESPONSE.Success.data = parsedSection;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching Examinations section by ID:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch Examinations section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};


// Soft Delete
exports.deleteExaminationsSection = async (req, res) => {
    try {
        const { examination_id } = req.params;

        const section = await Examinations.findOne({
            where: { examination_id: examination_id },
        });

        if (!section) {
            RESPONSE.Failure.Message = "Examinations section not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        if (section.delete_status === 1) {
            RESPONSE.Failure.Message = "Examinations section is already deleted.";
            return res.status(StatusCode.OK.code).send(RESPONSE.Failure);
        }

        await Examinations.update(
            { delete_status: 1, deletedAt: new Date() },
            { where: { examination_id: examination_id } }
        );

        RESPONSE.Success.Message = "Examinations section soft deleted successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error deleting Examinations section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to delete Examinations section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};


// Update Examinations Section
exports.updateExaminationsSection = async (req, res) => {
    try {
        const { examination_id } = req.params;
        const { section_name, heading, content, additional_data, sub_heading } = req.body;

        const section = await Examinations.findOne({
            where: { examination_id: examination_id, delete_status: 0 },
        });

        if (!section) {
            RESPONSE.Failure.Message = "Examinations section not found or is deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        const updatedAdditionalData =
            additional_data !== undefined ? additional_data : JSON.parse(section.additional_data);

        await Examinations.update(
            { section_name, heading, sub_heading, content, additional_data: JSON.stringify(updatedAdditionalData) },
            { where: { examination_id: examination_id } }
        );

        RESPONSE.Success.Message = "Examinations section updated successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error updating Examinations section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to update Examinations section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};


// Restore Soft Deleted
exports.restoreExaminationsSection = async (req, res) => {
    try {
        const { examination_id } = req.params;

        const section = await Examinations.findOne({
            where: { examination_id: examination_id, delete_status: 1 },
        });

        if (!section) {
            RESPONSE.Failure.Message = "Examinations section not found or is not soft-deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        await Examinations.update(
            { delete_status: 0, deletedAt: null },
            { where: { examination_id: examination_id } }
        );

        RESPONSE.Success.Message = "Examinations section restored successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error restoring Examinations section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to restore Examinations section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};
