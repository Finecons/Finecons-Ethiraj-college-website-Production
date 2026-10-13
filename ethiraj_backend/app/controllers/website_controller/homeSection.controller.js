const db = require("../../models");
const HomeSection = db.homeSections;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const AuthUser = db.AuthUser;
const Role = db.Role;

// Add a New Home Section
exports.addHomeSection = async (req, res) => {
    try {
        const { section_name, heading, content, additional_data, sub_heading } = req.body;

        // Assume these values are set by your authentication middleware
        const createdByAuthUserId = req.user.user_id;
        const createdByAuthUserRoleId = req.user.userRoleId;

        // Validate inputs
        if (!createdByAuthUserId || !createdByAuthUserRoleId) {
            return res.status(StatusCode.BAD_REQUEST.code).send({
                ...RESPONSE.Failure,
                Message: "Missing required parameters: createdByAuthUserId and createdByAuthUserRoleId.",
            });
        }

        // Validate the creator using AuthUser
        const creator = await AuthUser.findOne({
            where: { user_id: createdByAuthUserId, role_id: createdByAuthUserRoleId, delete_status: 0 },
        });

        if (!creator) {
            return res.status(StatusCode.UNAUTHORIZED.code).send({
                ...RESPONSE.Failure,
                Message: `Invalid creator: Role ID ${createdByAuthUserId} not found.`,
            });
        }


        // Validate if the role exists in the roles table
        const roleExists = await Role.findOne({ where: { role_id: createdByAuthUserId, delete_status: 0 } });
        if (!roleExists) {
            return res.status(StatusCode.BAD_REQUEST.code).send({
                ...RESPONSE.Failure,
                Message: `Invalid role ID: ${createdByAuthUserId} does not exist in roles .`,
            });
        }


        if (!section_name || !heading || !content) {
            return res.status(StatusCode.BAD_REQUEST.code).send({
                ...RESPONSE.Failure,
                Message: "Section name, heading, and content are required.",
            });
        }

        // 🔍 Check if section_name already exists (only non-deleted)
        const existingSection = await HomeSection.findOne({
            where: { section_name, delete_status: 0 }
        });

        if (existingSection) {
            return res.status(StatusCode.CONFLICT.code).send({
                ...RESPONSE.Failure,
                Message: `Section with name "${section_name}" already exists.`,
            });
        }
        
        const newSection = await HomeSection.create({
            section_name,
            heading,
            sub_heading,
            content,
            additional_data: JSON.stringify(additional_data) || JSON.stringify([]),
        });

        RESPONSE.Success.Message = "Home section added successfully.";
        RESPONSE.Success.data = [{ section_id: newSection.section_id }];
        return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error adding home section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to add home section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

exports.getAllHomeSections = async (req, res) => {
    try {
        const sections = await HomeSection.findAll({
            where: { delete_status: 0 },
        });

        // Parse the `additional_data` for each section without type checking
        const parsedSections = sections.map((section) => {
            // Always parse additional_data assuming it's stringified JSON
            const additionalData = JSON.parse(section.additional_data);

            return {
                ...section.toJSON(), // Convert Sequelize model to plain object
                additional_data: additionalData, // Replace with parsed data
            };
        });


        RESPONSE.Success.Message = "Home sections retrieved successfully.";
        RESPONSE.Success.data = parsedSections;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching home sections:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch home sections.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

exports.getAllHomeSectionsBySectionName = async (req, res) => {

    const { section_name } = req.body;

    try {
        const sections = await HomeSection.findAll({
            where: { delete_status: 0, section_name },
        });

        // Parse the `additional_data` for each section without type checking
        const parsedSections = sections.map((section) => {
            // Always parse additional_data assuming it's stringified JSON
            const additionalData = JSON.parse(section.additional_data);

            return {
                ...section.toJSON(), // Convert Sequelize model to plain object
                additional_data: additionalData, // Replace with parsed data
            };
        });


        RESPONSE.Success.Message = "Home sections retrieved successfully.";
        RESPONSE.Success.data = parsedSections;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching home sections:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch home sections.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Get Home Section by ID
exports.getHomeSectionById = async (req, res) => {
    try {
        const { section_id } = req.params;

        const section = await HomeSection.findOne({
            where: { section_id: section_id, delete_status: 0 },
        });

        if (!section) {
            RESPONSE.Failure.Message = "Home section not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        // Parse the `additional_data` without type checking
        const parsedSection = {
            ...section.toJSON(), // Convert Sequelize model to plain object
            additional_data: JSON.parse(section.additional_data), // Parse additional_data
        };

        RESPONSE.Success.Message = "Home section     successfully.";
        RESPONSE.Success.data = parsedSection;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching home section by ID:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch home section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Soft Delete Home Section
exports.deleteHomeSection = async (req, res) => {
    try {
        const { section_id } = req.params;

        const section = await HomeSection.findOne({
            where: { section_id: section_id },
        });

        if (!section) {
            RESPONSE.Failure.Message = "Home section not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        if (section.delete_status === 1) {
            RESPONSE.Failure.Message = "Home section is already deleted.";
            return res.status(StatusCode.OK.code).send(RESPONSE.Failure);
        }

        await HomeSection.update(
            { delete_status: 1, deletedAt: new Date() },
            { where: { section_id: section_id } }
        );

        RESPONSE.Success.Message = "Home section soft deleted successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error deleting home section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to delete home section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Update Home Section
exports.updateHomeSection = async (req, res) => {
    try {
        const { section_id } = req.params;
        const { section_name, heading, content, additional_data, sub_heading } = req.body;

        const section = await HomeSection.findOne({
            where: { section_id: section_id, delete_status: 0 },
        });

        if (!section) {
            RESPONSE.Failure.Message = "Home section not found or is deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }


        // If additional_data is not provided, use the existing one from the database
        const updatedAdditionalData = additional_data !== undefined ? additional_data : JSON.parse(section.additional_data);


        await HomeSection.update(
            { section_name, heading, sub_heading, content, additional_data: JSON.stringify(updatedAdditionalData) },
            { where: { section_id: section_id } }
        );

        RESPONSE.Success.Message = "Home section updated successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error updating home section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to update home section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Restore a Soft-Deleted Home Section
exports.restoreHomeSection = async (req, res) => {
    try {
        const { section_id } = req.params;

        // Find the section by ID where the section is marked as deleted
        const section = await HomeSection.findOne({
            where: { section_id: section_id, delete_status: 1 },
        });

        if (!section) {
            RESPONSE.Failure.Message = "Home section not found or is not soft-deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        // Restore the soft-deleted section by setting delete_status to 0 and clearing deletedAt
        await HomeSection.update(
            { delete_status: 0, deletedAt: null },
            { where: { section_id: section_id } }
        );

        RESPONSE.Success.Message = "Home section restored successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error restoring home section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to restore home section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

