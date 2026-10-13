const db = require("../../models");
const AboutUsSection = db.aboutUsSections;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const AuthUser = db.AuthUser;
const Role = db.Role;

// Add a New About Us Section
exports.addAboutUsSection = async (req, res) => {
    try {
        const { section_name, heading, content, additional_data, sub_heading } = req.body;

        const createdByAuthUserId = req.user?.user_id;
        const createdByAuthUserRoleId = req.user?.userRoleId;

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
                Message: `Invalid creator: User with ID ${createdByAuthUserId} not found.`,
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

        const existingSection = await AboutUsSection.findOne({
            where: { section_name, delete_status: 0 },
        });

        if (existingSection) {
            return res.status(StatusCode.CONFLICT.code).send({
                ...RESPONSE.Failure,
                Message: `Section with name "${section_name}" already exists.`,
            });
        }

        const newSection = await AboutUsSection.create({
            section_name,
            heading,
            sub_heading,
            content,
            additional_data: JSON.stringify(additional_data) || JSON.stringify([]),
        });

        RESPONSE.Success.Message = "About Us section added successfully.";
        RESPONSE.Success.data = [{ section_id: newSection.section_id }];
        return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error adding About Us section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to add About Us section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Get All About Us Sections
exports.getAllAboutUsSections = async (req, res) => {
    try {
        const sections = await AboutUsSection.findAll({
            where: { delete_status: 0 },
        });

        const parsedSections = sections.map((section) => {
            const additionalData = JSON.parse(section.additional_data || "[]");
            return { ...section.toJSON(), additional_data: additionalData };
        });

        RESPONSE.Success.Message = "About Us sections retrieved successfully.";
        RESPONSE.Success.data = parsedSections;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching About Us sections:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch About Us sections.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Get Sections by Section Name
exports.getAllAboutUsSectionsBySectionName = async (req, res) => {
    const { section_name } = req.body;

    try {
        const sections = await AboutUsSection.findAll({
            where: { delete_status: 0, section_name },
        });

        const parsedSections = sections.map((section) => {
            const additionalData = JSON.parse(section.additional_data || "[]");
            return { ...section.toJSON(), additional_data: additionalData };
        });

        RESPONSE.Success.Message = "About Us sections retrieved successfully.";
        RESPONSE.Success.data = parsedSections;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching About Us sections by name:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch About Us sections.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Get Section by ID
exports.getAboutUsSectionById = async (req, res) => {
    try {
        const { section_id } = req.params;

        const section = await AboutUsSection.findOne({
            where: { section_id, delete_status: 0 },
        });

        if (!section) {
            RESPONSE.Failure.Message = "About Us section not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        const parsedSection = {
            ...section.toJSON(),
            additional_data: JSON.parse(section.additional_data || "[]"),
        };

        RESPONSE.Success.Message = "About Us section retrieved successfully.";
        RESPONSE.Success.data = parsedSection;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching About Us section by ID:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch About Us section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Update Section
exports.updateAboutUsSection = async (req, res) => {
    try {
        const { section_id } = req.params;
        const { section_name, heading, content, additional_data, sub_heading } = req.body;

        const section = await AboutUsSection.findOne({
            where: { section_id, delete_status: 0 },
        });

        if (!section) {
            RESPONSE.Failure.Message = "About Us section not found or is deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        const updatedAdditionalData =
            additional_data !== undefined ? additional_data : JSON.parse(section.additional_data || "[]");

        await AboutUsSection.update(
            { section_name, heading, sub_heading, content, additional_data: JSON.stringify(updatedAdditionalData) },
            { where: { section_id } }
        );

        RESPONSE.Success.Message = "About Us section updated successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error updating About Us section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to update About Us section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Soft Delete Section
exports.deleteAboutUsSection = async (req, res) => {
    try {
        const { section_id } = req.params;

        const section = await AboutUsSection.findOne({ where: { section_id } });

        if (!section) {
            RESPONSE.Failure.Message = "About Us section not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        if (section.delete_status === 1) {
            RESPONSE.Failure.Message = "About Us section is already deleted.";
            return res.status(StatusCode.OK.code).send(RESPONSE.Failure);
        }

        await AboutUsSection.update(
            { delete_status: 1, deletedAt: new Date() },
            { where: { section_id } }
        );

        RESPONSE.Success.Message = "About Us section soft deleted successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error deleting About Us section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to delete About Us section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Restore a Soft-Deleted Section
exports.restoreAboutUsSection = async (req, res) => {
    try {
        const { section_id } = req.params;

        const section = await AboutUsSection.findOne({
            where: { section_id, delete_status: 1 },
        });

        if (!section) {
            RESPONSE.Failure.Message = "About Us section not found or is not soft-deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        await AboutUsSection.update(
            { delete_status: 0, deletedAt: null },
            { where: { section_id } }
        );

        RESPONSE.Success.Message = "About Us section restored successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error restoring About Us section:", error);
        RESPONSE.Failure.Message = error.message || "Failed to restore About Us section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};
