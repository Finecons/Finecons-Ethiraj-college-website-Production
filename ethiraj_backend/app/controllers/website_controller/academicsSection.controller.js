const db = require("../../models");
const AcademicsSection = db.academicsSections;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const AuthUser = db.AuthUser;
const Role = db.Role;

// ➕ Add a New Academics Section
exports.addAcademicsSection = async (req, res) => {
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

    // Validate AuthUser and Role
    const creator = await AuthUser.findOne({
      where: { user_id: createdByAuthUserId, role_id: createdByAuthUserRoleId, delete_status: 0 },
    });
    if (!creator) {
      return res.status(StatusCode.UNAUTHORIZED.code).send({
        ...RESPONSE.Failure,
        Message: "Invalid creator details.",
      });
    }

    if (!section_name || !heading || !content) {
      return res.status(StatusCode.BAD_REQUEST.code).send({
        ...RESPONSE.Failure,
        Message: "Section name, heading, and content are required.",
      });
    }

    // Check duplicate
    const existingSection = await AcademicsSection.findOne({
      where: { section_name, delete_status: 0 },
    });
    if (existingSection) {
      return res.status(StatusCode.CONFLICT.code).send({
        ...RESPONSE.Failure,
        Message: `Section with name "${section_name}" already exists.`,
      });
    }

    const newSection = await AcademicsSection.create({
      section_name,
      heading,
      sub_heading,
      content,
      additional_data: JSON.stringify(additional_data) || JSON.stringify([]),
    });

    RESPONSE.Success.Message = "Academics section added successfully.";
    RESPONSE.Success.data = [{ section_id: newSection.section_id }];
    return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error adding academics section:", error);
    RESPONSE.Failure.Message = error.message || "Failed to add academics section.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// 📋 Get All
exports.getAllAcademicsSections = async (req, res) => {
  try {
    const sections = await AcademicsSection.findAll({ where: { delete_status: 0 } });
    const parsed = sections.map((s) => ({
      ...s.toJSON(),
      additional_data: JSON.parse(s.additional_data || "[]"),
    }));

    RESPONSE.Success.Message = "Academics sections retrieved successfully.";
    RESPONSE.Success.data = parsed;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching academics sections:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch academics sections.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// 🎯 Get by Section Name
exports.getAcademicsSectionsByName = async (req, res) => {
  const { section_name } = req.body;
  try {
    const sections = await AcademicsSection.findAll({
      where: { section_name, delete_status: 0 },
    });

    const parsed = sections.map((s) => ({
      ...s.toJSON(),
      additional_data: JSON.parse(s.additional_data || "[]"),
    }));

    RESPONSE.Success.Message = "Academics sections retrieved successfully.";
    RESPONSE.Success.data = parsed;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching by section name:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch academics section.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// 🔍 Get by ID
exports.getAcademicsSectionById = async (req, res) => {
  try {
    const { section_id } = req.params;
    const section = await AcademicsSection.findOne({
      where: { section_id, delete_status: 0 },
    });

    if (!section) {
      RESPONSE.Failure.Message = "Academics section not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    const parsed = {
      ...section.toJSON(),
      additional_data: JSON.parse(section.additional_data || "[]"),
    };

    RESPONSE.Success.Message = "Academics section retrieved successfully.";
    RESPONSE.Success.data = parsed;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching academics section by ID:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch academics section.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// 🗑️ Soft Delete
exports.deleteAcademicsSection = async (req, res) => {
  try {
    const { section_id } = req.params;
    const section = await AcademicsSection.findOne({ where: { section_id } });

    if (!section) {
      RESPONSE.Failure.Message = "Academics section not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    if (section.delete_status === 1) {
      RESPONSE.Failure.Message = "Academics section already deleted.";
      return res.status(StatusCode.OK.code).send(RESPONSE.Failure);
    }

    await AcademicsSection.update(
      { delete_status: 1, deletedAt: new Date() },
      { where: { section_id } }
    );

    RESPONSE.Success.Message = "Academics section soft deleted successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error deleting academics section:", error);
    RESPONSE.Failure.Message = error.message || "Failed to delete academics section.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ✏️ Update
exports.updateAcademicsSection = async (req, res) => {
  try {
    const { section_id } = req.params;
    const { section_name, heading, content, additional_data, sub_heading } = req.body;

    const section = await AcademicsSection.findOne({
      where: { section_id, delete_status: 0 },
    });

    if (!section) {
      RESPONSE.Failure.Message = "Academics section not found or deleted.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    const updatedData =
      additional_data !== undefined ? additional_data : JSON.parse(section.additional_data);

    await AcademicsSection.update(
      {
        section_name,
        heading,
        sub_heading,
        content,
        additional_data: JSON.stringify(updatedData),
      },
      { where: { section_id } }
    );

    RESPONSE.Success.Message = "Academics section updated successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error updating academics section:", error);
    RESPONSE.Failure.Message = error.message || "Failed to update academics section.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ♻️ Restore Soft Deleted
exports.restoreAcademicsSection = async (req, res) => {
  try {
    const { section_id } = req.params;
    const section = await AcademicsSection.findOne({
      where: { section_id, delete_status: 1 },
    });

    if (!section) {
      RESPONSE.Failure.Message = "Academics section not found or not soft-deleted.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    await AcademicsSection.update(
      { delete_status: 0, deletedAt: null },
      { where: { section_id } }
    );

    RESPONSE.Success.Message = "Academics section restored successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error restoring academics section:", error);
    RESPONSE.Failure.Message = error.message || "Failed to restore academics section.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};
