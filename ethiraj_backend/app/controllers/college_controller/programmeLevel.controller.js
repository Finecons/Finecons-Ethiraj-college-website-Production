const db = require("../../models");
const ProgrammeLevel = db.programme_levels;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");


exports.createDefaultProgrammeLevels = async () => {
  try {
    const defaultProgrammeLevels = [
      {
        level_name: "Undergraduate",
        description: "The college offers 26 undergraduate programs for aided and self-supporting candidates such as B.A, BBA, B.Com, B.com (Hons) and B.Sc programmes.",
      },
      {
        level_name: "Postgraduate",
        description: "22 programs at the postgraduate level are offered for candidates including Master of Business Administration (MBA) and Master of Computer Application (MCA).",
      },
      {
        level_name: "PhD",
        description: "20+ Doctoral programmes and it is offered by University of Madras",
      },
    ];

    for (const level of defaultProgrammeLevels) {
      const exists = await ProgrammeLevel.findOne({
        where: {
          level_name: level.level_name,
          delete_status: 0,
        },
      });

      if (!exists) {
        await ProgrammeLevel.create(level);
        // console.log(`Programme Level created: ${level.level_name}`);
      }
    }
  } catch (error) {
    console.error("Error creating default Programme Levels:", error);
  }
};


// ===============================================
// 1️⃣ Add New Programme Level
// ===============================================
exports.addProgrammeLevel = async (req, res) => {
  try {
    const { level_name, description } = req.body;

    if (!level_name) {
      RESPONSE.Failure.Message = "Programme level name is required.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    const existingLevel = await ProgrammeLevel.findOne({
      where: { level_name, delete_status: 0 },
    });

    if (existingLevel) {
      RESPONSE.Failure.Message = `Programme level "${level_name}" already exists.`;
      return res.status(StatusCode.CONFLICT.code).send(RESPONSE.Failure);
    }

    const newLevel = await ProgrammeLevel.create({ level_name, description });

    RESPONSE.Success.Message = "Programme level added successfully.";
    RESPONSE.Success.data = [{ programme_level_id: newLevel.programme_level_id }];
    return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error adding Programme Level:", error);
    RESPONSE.Failure.Message = error.message || "Failed to add Programme Level.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===============================================
// 2️⃣ Get All Programme Levels
// ===============================================
exports.getAllProgrammeLevels = async (req, res) => {
  try {
    const levels = await ProgrammeLevel.findAll({
      where: { delete_status: 0 },
      order: [["programme_level_id", "ASC"]],
    });

    RESPONSE.Success.Message = "Programme levels fetched successfully.";
    RESPONSE.Success.data = levels;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching Programme Levels:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch Programme Levels.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===============================================
// 3️⃣ Get Programme Level by ID
// ===============================================
exports.getProgrammeLevelById = async (req, res) => {
  try {
    const { programme_level_id } = req.params;

    const level = await ProgrammeLevel.findOne({
      where: { programme_level_id, delete_status: 0 },
    });

    if (!level) {
      RESPONSE.Failure.Message = "Programme level not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    RESPONSE.Success.Message = "Programme level fetched successfully.";
    RESPONSE.Success.data = level;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching Programme Level by ID:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch Programme Level.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===============================================
// 4️⃣ Update Programme Level
// ===============================================
exports.updateProgrammeLevel = async (req, res) => {
  try {
    const { programme_level_id } = req.params;
    const { level_name, description } = req.body;

    const level = await ProgrammeLevel.findOne({
      where: { programme_level_id, delete_status: 0 },
    });

    if (!level) {
      RESPONSE.Failure.Message = "Programme level not found or deleted.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    await ProgrammeLevel.update(
      { level_name, description },
      { where: { programme_level_id } }
    );

    RESPONSE.Success.Message = "Programme level updated successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error updating Programme Level:", error);
    RESPONSE.Failure.Message = error.message || "Failed to update Programme Level.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===============================================
// 5️⃣ Soft Delete Programme Level
// ===============================================
exports.deleteProgrammeLevel = async (req, res) => {
  try {
    const { programme_level_id } = req.params;

    const level = await ProgrammeLevel.findOne({ where: { programme_level_id } });

    if (!level) {
      RESPONSE.Failure.Message = "Programme level not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    if (level.delete_status === 1) {
      RESPONSE.Failure.Message = "Programme level is already deleted.";
      return res.status(StatusCode.OK.code).send(RESPONSE.Failure);
    }

    await ProgrammeLevel.update(
      { delete_status: 1, deletedAt: new Date() },
      { where: { programme_level_id } }
    );

    RESPONSE.Success.Message = "Programme level soft deleted successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error deleting Programme Level:", error);
    RESPONSE.Failure.Message = error.message || "Failed to delete Programme Level.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===============================================
// 6️⃣ Restore Programme Level
// ===============================================
exports.restoreProgrammeLevel = async (req, res) => {
  try {
    const { programme_level_id } = req.params;

    const level = await ProgrammeLevel.findOne({
      where: { programme_level_id, delete_status: 1 },
    });

    if (!level) {
      RESPONSE.Failure.Message = "Programme level not found or not soft-deleted.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    await ProgrammeLevel.update(
      { delete_status: 0, deletedAt: null },
      { where: { programme_level_id } }
    );

    RESPONSE.Success.Message = "Programme level restored successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error restoring Programme Level:", error);
    RESPONSE.Failure.Message = error.message || "Failed to restore Programme Level.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};
