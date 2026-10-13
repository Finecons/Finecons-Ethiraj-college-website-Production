const db = require("../../models");
const Marquee = db.marquees;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const AuthUser = db.AuthUser;
const Role = db.Role;

exports.addMarquee = async (req, res) => {
  try {
    const { page_name = "home page", text, link } = req.body;

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

    if (!text || !link) {
      return res.status(StatusCode.BAD_REQUEST.code).send({
        ...RESPONSE.Failure,
        Message: "text and link are required.",
      });
    }

    const newMarquee = await Marquee.create({
      page_name,
      text,
      link,
    });

    RESPONSE.Success.Message = "Marquee added successfully.";
    RESPONSE.Success.data = [{ marquee_id: newMarquee.marquee_id }];
    return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error adding marquee:", error);
    RESPONSE.Failure.Message = error.message || "Failed to add marquee.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

exports.getAllMarquees = async (req, res) => {
  try {
    const marquees = await Marquee.findAll({
      where: { delete_status: 0 },
    });

    RESPONSE.Success.Message = "Marquees retrieved successfully.";
    RESPONSE.Success.data = marquees;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching marquees:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch marquees.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

exports.getAllMarqueesByPageName = async (req, res) => {
  const { page_name = "home page" } = req.body;

  try {
    const marquees = await Marquee.findAll({
      where: { delete_status: 0, page_name },
    });

    RESPONSE.Success.Message = "Marquees retrieved successfully.";
    RESPONSE.Success.data = marquees;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching marquees by page name:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch marquees by page name.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

exports.getMarqueeById = async (req, res) => {
  try {
    const { marquee_id } = req.params;

    const marquee = await Marquee.findOne({
      where: { marquee_id: marquee_id, delete_status: 0 },
    });

    if (!marquee) {
      RESPONSE.Failure.Message = "Marquee not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    RESPONSE.Success.Message = "Marquee retrieved successfully.";
    RESPONSE.Success.data = marquee;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching marquee by ID:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch marquee.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

exports.updateMarquee = async (req, res) => {
  try {
    const { marquee_id } = req.params;
    const { page_name = "home page", text, link } = req.body;

    const marquee = await Marquee.findOne({
      where: { marquee_id: marquee_id, delete_status: 0 },
    });

    if (!marquee) {
      RESPONSE.Failure.Message = "Marquee not found or is deleted.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    await Marquee.update(
      { page_name, text, link },
      { where: { marquee_id: marquee_id } }
    );

    RESPONSE.Success.Message = "Marquee updated successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error updating marquee:", error);
    RESPONSE.Failure.Message = error.message || "Failed to update marquee.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

exports.deleteMarquee = async (req, res) => {
  try {
    const { marquee_id } = req.params;

    const marquee = await Marquee.findOne({
      where: { marquee_id: marquee_id },
    });

    if (!marquee) {
      RESPONSE.Failure.Message = "Marquee not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    if (marquee.delete_status === 1) {
      RESPONSE.Failure.Message = "Marquee is already deleted.";
      return res.status(StatusCode.OK.code).send(RESPONSE.Failure);
    }

    await Marquee.update(
      { delete_status: 1, deletedAt: new Date() },
      { where: { marquee_id: marquee_id } }
    );

    RESPONSE.Success.Message = "Marquee soft deleted successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error deleting marquee:", error);
    RESPONSE.Failure.Message = error.message || "Failed to delete marquee.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

exports.restoreMarquee = async (req, res) => {
  try {
    const { marquee_id } = req.params;

    const marquee = await Marquee.findOne({
      where: { marquee_id: marquee_id, delete_status: 1 },
    });

    if (!marquee) {
      RESPONSE.Failure.Message = "Marquee not found or is not soft-deleted.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    await Marquee.update(
      { delete_status: 0, deletedAt: null },
      { where: { marquee_id: marquee_id } }
    );

    RESPONSE.Success.Message = "Marquee restored successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error restoring marquee:", error);
    RESPONSE.Failure.Message = error.message || "Failed to restore marquee.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};
