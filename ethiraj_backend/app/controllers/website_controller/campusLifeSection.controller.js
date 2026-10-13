const db = require("../../models");
const CampusLifeSection = db.campusLifeSections;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const AuthUser = db.AuthUser;
const Role = db.Role;

/**
 * Add New Campus Life Section
 */
exports.addCampusLifeSection = async (req, res) => {
    try {
        const {page_name, section_name, heading, content, additional_data, sub_heading } = req.body;
        const createdByAuthUserId = req.user.user_id;
        const createdByAuthUserRoleId = req.user.userRoleId;
        if (!createdByAuthUserId || !createdByAuthUserRoleId) {
            return res.status(StatusCode.BAD_REQUEST.code).send({
                ...RESPONSE.Failure,
                Message: "Missing required user details.",
            });
        }
        // Validate User
        const creator = await AuthUser.findOne({
            where: {
                user_id: createdByAuthUserId,
                role_id: createdByAuthUserRoleId,
                delete_status: 0
            },
        });
        if (!creator) {
            return res.status(StatusCode.UNAUTHORIZED.code).send({
                ...RESPONSE.Failure,
                Message: "Invalid creator.",
            });
        }
        // Validate Role
        const roleExists = await Role.findOne({
            where: {
                role_id: createdByAuthUserRoleId,
                delete_status: 0
            }
        });
        if (!roleExists) {
            return res.status(StatusCode.BAD_REQUEST.code).send({
                ...RESPONSE.Failure,
                Message: "Invalid role.",
            });
        }
        if (!section_name || !heading || !content) {
            return res.status(StatusCode.BAD_REQUEST.code).send({
                ...RESPONSE.Failure,
                Message: "Section name, heading, and content are required.",
            });
        }
        // Check duplicate section
        const existingSection = await CampusLifeSection.findOne({
            where: { section_name, delete_status: 0 }
        });
        if (existingSection) {
            return res.status(StatusCode.CONFLICT.code).send({
                ...RESPONSE.Failure,
                Message: `Section "${section_name}" already exists.`,
            });
        }
        const newSection = await CampusLifeSection.create({
            page_name,
            section_name,
            heading,
            sub_heading,
            content,
            additional_data: JSON.stringify(additional_data || []),
        });
        RESPONSE.Success.Message = "Campus Life section added successfully.";
        RESPONSE.Success.data = [{ section_id: newSection.section_id }];
        return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Add Campus Life Section Error:", error);
        RESPONSE.Failure.Message = error.message || "Failed to add campus life section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

/**
 * Get All Campus Life Sections
 */
exports.getAllCampusLifeSections = async (req, res) => {
    const { page_name } = req.params;
    try {
        const sections = await CampusLifeSection.findAll({
            where: { delete_status: 0, page_name },
        });
        const parsedSections = sections.map((section) => {
            return {
                ...section.toJSON(),
                additional_data: JSON.parse(section.additional_data),
            };
        });
        RESPONSE.Success.Message = "Campus Life sections retrieved successfully.";
        RESPONSE.Success.data = parsedSections;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Fetch Campus Life Sections Error:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch campus life sections.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

/**
 * Get Campus Life Sections by Section Name
 */
exports.getAllCampusLifeSectionsBySectionName = async (req, res) => {
    const { section_name, page_name } = req.body;
    try {
        const sections = await CampusLifeSection.findAll({
            where: { delete_status: 0, section_name, page_name },
        });
        const parsedSections = sections.map((section) => {
            return {
                ...section.toJSON(),
                additional_data: JSON.parse(section.additional_data),
            };
        });
        RESPONSE.Success.Message = "Campus Life sections retrieved successfully.";
        RESPONSE.Success.data = parsedSections;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Fetch by Name Error:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch campus life sections.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

/**
 * Get Campus Life Section By ID
 */
exports.getCampusLifeSectionById = async (req, res) => {
    try {
        const { section_id } = req.params;
        const section = await CampusLifeSection.findOne({
            where: { section_id, delete_status: 0 },
        });
        if (!section) {
            RESPONSE.Failure.Message = "Campus Life section not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }
        const parsedSection = {
            ...section.toJSON(),
            additional_data: JSON.parse(section.additional_data),
        };
        RESPONSE.Success.Message = "Campus Life section retrieved successfully.";
        RESPONSE.Success.data = parsedSection;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Get By ID Error:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch campus life section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

/**
 * Soft Delete Campus Life Section
 */
exports.deleteCampusLifeSection = async (req, res) => {
    try {
        const { section_id } = req.params;
        const section = await CampusLifeSection.findOne({
            where: { section_id },
        });
        if (!section) {
            RESPONSE.Failure.Message = "Campus Life section not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }
        if (section.delete_status === 1) {
            RESPONSE.Failure.Message = "Campus Life section already deleted.";
            return res.status(StatusCode.OK.code).send(RESPONSE.Failure);
        }
        await CampusLifeSection.update(
            { delete_status: 1, deletedAt: new Date() },
            { where: { section_id } }
        );
        RESPONSE.Success.Message = "Campus Life section deleted successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Delete Error:", error);
        RESPONSE.Failure.Message = error.message || "Failed to delete campus life section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

/**
 * Update Campus Life Section
 */
exports.updateCampusLifeSection = async (req, res) => {
    try {
        const { section_id } = req.params;
        const { section_name, heading, content, additional_data, sub_heading } = req.body;
        const section = await CampusLifeSection.findOne({
            where: { section_id, delete_status: 0 },
        });
        if (!section) {
            RESPONSE.Failure.Message = "Campus Life section not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }
        const updatedAdditionalData =
            additional_data !== undefined
                ? additional_data
                : JSON.parse(section.additional_data);
        await CampusLifeSection.update(
            {
                section_name,
                heading,
                sub_heading,
                content,
                additional_data: JSON.stringify(updatedAdditionalData),
            },
            { where: { section_id } }
        );
        RESPONSE.Success.Message = "Campus Life section updated successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Update Error:", error);
        RESPONSE.Failure.Message = error.message || "Failed to update campus life section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

/**
 * Restore Campus Life Section
 */
exports.restoreCampusLifeSection = async (req, res) => {
    try {
        const { section_id } = req.params;
        const section = await CampusLifeSection.findOne({
            where: { section_id, delete_status: 1 },
        });
        if (!section) {
            RESPONSE.Failure.Message = "Campus Life section not found or not deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }
        await CampusLifeSection.update(
            { delete_status: 0, deletedAt: null },
            { where: { section_id } }
        );
        RESPONSE.Success.Message = "Campus Life section restored successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Restore Error:", error);
        RESPONSE.Failure.Message = error.message || "Failed to restore campus life section.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};
