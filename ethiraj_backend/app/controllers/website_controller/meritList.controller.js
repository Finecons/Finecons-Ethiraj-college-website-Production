const db = require("../../models");
const MeritList = db.meritLists;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const AuthUser = db.AuthUser;
const Role = db.Role;

// Add a New Merit List Section
exports.addMeritListSection = async (req, res) => {
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

        const existingSection = await MeritList.findOne({
            where: { section_name, delete_status: 0 }
        });

        if (existingSection) {
            return res.status(StatusCode.CONFLICT.code).send({
                ...RESPONSE.Failure,
                Message: `Section with name "${section_name}" already exists.`,
            });
        }

        const newSection = await MeritList.create({
            section_name,
            heading,
            sub_heading,
            content,
            additional_data: JSON.stringify(additional_data) || JSON.stringify([]),
        });

        RESPONSE.Success.Message = "Merit List section added successfully.";
        RESPONSE.Success.data = [{ merit_list_id: newSection.merit_list_id }];
        return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error adding Merit List section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to add Merit List section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Get All Merit List Sections
exports.getAllMeritListSections = async (req, res) => {
    try {
        const sections = await MeritList.findAll({
            where: { delete_status: 0 },
        });

        const parsedSections = sections.map((section) => {
            const additionalData = JSON.parse(section.additional_data);
            return {
                ...section.toJSON(),
                additional_data: additionalData,
            };
        });

        RESPONSE.Success.Message = "Merit List sections retrieved successfully.";
        RESPONSE.Success.data = parsedSections;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching Merit List sections:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch Merit List sections.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Get by Section Name
exports.getAllMeritListSectionsBySectionName = async (req, res) => {
    const { section_name } = req.body;

    try {
        const sections = await MeritList.findAll({
            where: { delete_status: 0, section_name },
        });

        const parsedSections = sections.map((section) => {
            const additionalData = JSON.parse(section.additional_data);
            return {
                ...section.toJSON(),
                additional_data: additionalData,
            };
        });

        RESPONSE.Success.Message = "Merit List sections retrieved successfully.";
        RESPONSE.Success.data = parsedSections;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching Merit List by section name:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch Merit List section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Get by ID
exports.getMeritListSectionById = async (req, res) => {
    try {
        const { merit_list_id } = req.params;

        const section = await MeritList.findOne({
            where: { merit_list_id: merit_list_id, delete_status: 0 },
        });

        if (!section) {
            RESPONSE.Failure.Message = "Merit List section not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        const parsedSection = {
            ...section.toJSON(),
            additional_data: JSON.parse(section.additional_data),
        };

        RESPONSE.Success.Message = "Merit List section retrieved successfully.";
        RESPONSE.Success.data = parsedSection;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching Merit List section by ID:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch Merit List section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Soft Delete
exports.deleteMeritListSection = async (req, res) => {
    try {
        const { merit_list_id } = req.params;

        const section = await MeritList.findOne({
            where: { merit_list_id: merit_list_id },
        });

        if (!section) {
            RESPONSE.Failure.Message = "Merit List section not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        if (section.delete_status === 1) {
            RESPONSE.Failure.Message = "Merit List section is already deleted.";
            return res.status(StatusCode.OK.code).send(RESPONSE.Failure);
        }

        await MeritList.update(
            { delete_status: 1, deletedAt: new Date() },
            { where: { merit_list_id: merit_list_id } }
        );

        RESPONSE.Success.Message = "Merit List section soft deleted successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error deleting Merit List section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to delete Merit List section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Update Merit List Section
exports.updateMeritListSection = async (req, res) => {
    try {
        const { merit_list_id } = req.params;
        const { section_name, heading, content, additional_data, sub_heading } = req.body;

        const section = await MeritList.findOne({
            where: { merit_list_id: merit_list_id, delete_status: 0 },
        });

        if (!section) {
            RESPONSE.Failure.Message = "Merit List section not found or is deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        const updatedAdditionalData =
            additional_data !== undefined ? additional_data : JSON.parse(section.additional_data);

        await MeritList.update(
            { section_name, heading, sub_heading, content, additional_data: JSON.stringify(updatedAdditionalData) },
            { where: { merit_list_id: merit_list_id } }
        );

        RESPONSE.Success.Message = "Merit List section updated successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error updating Merit List section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to update Merit List section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Restore Soft Deleted
exports.restoreMeritListSection = async (req, res) => {
    try {
        const { merit_list_id } = req.params;

        const section = await MeritList.findOne({
            where: { merit_list_id: merit_list_id, delete_status: 1 },
        });

        if (!section) {
            RESPONSE.Failure.Message = "Merit List section not found or is not soft-deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        await MeritList.update(
            { delete_status: 0, deletedAt: null },
            { where: { merit_list_id: merit_list_id } }
        );

        RESPONSE.Success.Message = "Merit List section restored successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error restoring Merit List section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to restore Merit List section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};
