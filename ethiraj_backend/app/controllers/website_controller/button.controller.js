const db = require("../../models");
const Button = db.buttons;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const AuthUser = db.AuthUser;
const Role = db.Role;

// Add a New Button
exports.addButton = async (req, res) => {
    try {
        const { button_name, text, link } = req.body;

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

        if (!button_name || !text || !link) {
            return res.status(StatusCode.BAD_REQUEST.code).send({
                ...RESPONSE.Failure,
                Message: "button_name, text, and link are required.",
            });
        }

        // const existingButton = await Button.findOne({
        //     where: { button_name, delete_status: 0 },
        // });

        // if (existingButton) {
        //     return res.status(StatusCode.CONFLICT.code).send({
        //         ...RESPONSE.Failure,
        //         Message: `Button with name \"${button_name}\" already exists.`,
        //     });
        // }

        const newButton = await Button.create({
            button_name,
            text,
            link,
        });

        RESPONSE.Success.Message = "Button added successfully.";
        RESPONSE.Success.data = [{ button_id: newButton.button_id }];
        return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error adding button:", error);
        RESPONSE.Failure.Message = error.message || "Failed to add button.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Get All Buttons
exports.getAllButtons = async (req, res) => {
    try {
        const buttons = await Button.findAll({
            where: { delete_status: 0 },
        });

        RESPONSE.Success.Message = "Buttons retrieved successfully.";
        RESPONSE.Success.data = buttons;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching buttons:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch buttons.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Get Buttons by Name
exports.getAllButtonsByName = async (req, res) => {
    const { button_name } = req.body;

    try {
        const buttons = await Button.findAll({
            where: { delete_status: 0, button_name },
        });

        RESPONSE.Success.Message = "Buttons retrieved successfully.";
        RESPONSE.Success.data = buttons;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching buttons by name:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch buttons by name.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Get Button by ID
exports.getButtonById = async (req, res) => {
    try {
        const { button_id } = req.params;

        const button = await Button.findOne({
            where: { button_id: button_id, delete_status: 0 },
        });

        if (!button) {
            RESPONSE.Failure.Message = "Button not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        RESPONSE.Success.Message = "Button retrieved successfully.";
        RESPONSE.Success.data = button;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching button by ID:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch button.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Update Button
exports.updateButton = async (req, res) => {
    try {
        const { button_id } = req.params;
        const { button_name, text, link } = req.body;

        const button = await Button.findOne({
            where: { button_id: button_id, delete_status: 0 },
        });

        if (!button) {
            RESPONSE.Failure.Message = "Button not found or is deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        await Button.update(
            { button_name, text, link },
            { where: { button_id: button_id } }
        );

        RESPONSE.Success.Message = "Button updated successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error updating button:", error);
        RESPONSE.Failure.Message = error.message || "Failed to update button.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Soft Delete Button
exports.deleteButton = async (req, res) => {
    try {
        const { button_id } = req.params;

        const button = await Button.findOne({
            where: { button_id: button_id },
        });

        if (!button) {
            RESPONSE.Failure.Message = "Button not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        if (button.delete_status === 1) {
            RESPONSE.Failure.Message = "Button is already deleted.";
            return res.status(StatusCode.OK.code).send(RESPONSE.Failure);
        }

        await Button.update(
            { delete_status: 1, deletedAt: new Date() },
            { where: { button_id: button_id } }
        );

        RESPONSE.Success.Message = "Button soft deleted successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error deleting button:", error);
        RESPONSE.Failure.Message = error.message || "Failed to delete button.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// Restore Soft Deleted Button
exports.restoreButton = async (req, res) => {
    try {
        const { button_id } = req.params;

        const button = await Button.findOne({
            where: { button_id: button_id, delete_status: 1 },
        });

        if (!button) {
            RESPONSE.Failure.Message = "Button not found or is not soft-deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        await Button.update(
            { delete_status: 0, deletedAt: null },
            { where: { button_id: button_id } }
        );

        RESPONSE.Success.Message = "Button restored successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error restoring button:", error);
        RESPONSE.Failure.Message = error.message || "Failed to restore button.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};
