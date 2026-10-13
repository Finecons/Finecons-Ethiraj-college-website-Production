const db = require("../../models");
const Faculty = db.faculties;
const Program = db.programs;
const FundingType = db.funding_types;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");

// ==========================
// Add New Faculty
// ==========================
exports.addFaculty = async (req, res) => {
  try {
    const {
      staff_name,
      staff_role,
      degrees_completed,
      description,
      image_url,
      funding_type_id,
      program_id,
      additional_data,
    } = req.body;

    // Basic validation
    if (!staff_name || !staff_role || !funding_type_id || !program_id) {
      RESPONSE.Failure.Message =
        "staff_name, staff_role, funding_type_id, and program_id are required.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    // Validate Program and Funding Type existence
    const program = await Program.findByPk(program_id);
    const fundingType = await FundingType.findByPk(funding_type_id);

    if (!program) {
      RESPONSE.Failure.Message = "Invalid program_id. Program not found.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    if (!fundingType) {
      RESPONSE.Failure.Message = "Invalid funding_type_id. Funding type not found.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    // 🧩 Handle additional_data safely
    const formattedAdditionalData = additional_data
      ? JSON.stringify(additional_data)
      : JSON.stringify([]);

    // Create Faculty
    const newFaculty = await Faculty.create({
      staff_name,
      staff_role,
      degrees_completed,
      description,
      image_url,
      funding_type_id,
      program_id,
      additional_data: formattedAdditionalData,
    });

    RESPONSE.Success.Message = "Faculty added successfully.";
    RESPONSE.Success.data = [{ faculty_id: newFaculty.faculty_id }];
    return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error adding faculty:", error);
    RESPONSE.Failure.Message = error.message || "Failed to add faculty.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ==========================
// Get All Faculties
// ==========================
exports.getAllFaculties = async (req, res) => {
  try {
    const faculties = await Faculty.findAll({
      where: { delete_status: 0 },
      include: [
        { model: Program, as: "program" },
        { model: FundingType, as: "funding_type" },
      ],
      order: [["faculty_id", "DESC"]],
    });

    const parsedFaculties = faculties.map((faculty) => {
      let parsedData = [];
      try {
        parsedData = JSON.parse(faculty.additional_data || "[]");
      } catch {
        parsedData = [];
      }

      return {
        ...faculty.toJSON(),
        additional_data: parsedData,
      };
    });

    RESPONSE.Success.Message = "Faculties retrieved successfully.";
    RESPONSE.Success.data = parsedFaculties;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching faculties:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch faculties.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ==========================
// Get Faculty by ID
// ==========================
exports.getFacultyById = async (req, res) => {
  try {
    const { faculty_id } = req.params;

    const faculty = await Faculty.findOne({
      where: { faculty_id, delete_status: 0 },
      include: [
        { model: Program, as: "program" },
        { model: FundingType, as: "funding_type" },
      ],
    });

    if (!faculty) {
      RESPONSE.Failure.Message = "Faculty not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    let parsedData = [];
    try {
      parsedData = JSON.parse(faculty.additional_data || "[]");
    } catch {
      parsedData = [];
    }

    RESPONSE.Success.Message = "Faculty retrieved successfully.";
    RESPONSE.Success.data = {
      ...faculty.toJSON(),
      additional_data: parsedData,
    };
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching faculty:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch faculty.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ==========================
// Update Faculty
// ==========================
exports.updateFaculty = async (req, res) => {
  try {
    const { faculty_id } = req.params;
    const {
      staff_name,
      staff_role,
      degrees_completed,
      description,
      image_url,
      funding_type_id,
      program_id,
      additional_data,
    } = req.body;

    const faculty = await Faculty.findOne({
      where: { faculty_id, delete_status: 0 },
    });

    if (!faculty) {
      RESPONSE.Failure.Message = "Faculty not found or is deleted.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    const formattedAdditionalData =
      additional_data !== undefined
        ? JSON.stringify(additional_data)
        : faculty.additional_data;

    await Faculty.update(
      {
        staff_name,
        staff_role,
        degrees_completed,
        description,
        image_url,
        funding_type_id,
        program_id,
        additional_data: formattedAdditionalData,
      },
      { where: { faculty_id } }
    );

    RESPONSE.Success.Message = "Faculty updated successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error updating faculty:", error);
    RESPONSE.Failure.Message = error.message || "Failed to update faculty.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ==========================
// Soft Delete Faculty
// ==========================
exports.deleteFaculty = async (req, res) => {
  try {
    const { faculty_id } = req.params;

    const faculty = await Faculty.findOne({ where: { faculty_id } });

    if (!faculty) {
      RESPONSE.Failure.Message = "Faculty not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    if (faculty.delete_status === 1) {
      RESPONSE.Failure.Message = "Faculty already deleted.";
      return res.status(StatusCode.OK.code).send(RESPONSE.Failure);
    }

    await Faculty.update(
      { delete_status: 1, deletedAt: new Date() },
      { where: { faculty_id } }
    );

    RESPONSE.Success.Message = "Faculty soft deleted successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error deleting faculty:", error);
    RESPONSE.Failure.Message = error.message || "Failed to delete faculty.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ==========================
// Restore Faculty
// ==========================
exports.restoreFaculty = async (req, res) => {
  try {
    const { faculty_id } = req.params;

    const faculty = await Faculty.findOne({
      where: { faculty_id, delete_status: 1 },
    });

    if (!faculty) {
      RESPONSE.Failure.Message = "Faculty not found or not deleted.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    await Faculty.update(
      { delete_status: 0, deletedAt: null },
      { where: { faculty_id } }
    );

    RESPONSE.Success.Message = "Faculty restored successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error restoring faculty:", error);
    RESPONSE.Failure.Message = error.message || "Failed to restore faculty.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};


// ==========================
// Get All Faculties by Program ID
// ==========================
exports.getFacultiesByProgramId = async (req, res) => {
  try {
    const { program_id } = req.params;

    if (!program_id) {
      RESPONSE.Failure.Message = "program_id is required.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    const faculties = await Faculty.findAll({
      where: { program_id, delete_status: 0 },
      include: [
        { model: Program, as: "program" },
        { model: FundingType, as: "funding_type" },
      ],
      order: [["faculty_id", "DESC"]],
    });

    if (!faculties.length) {
      RESPONSE.Success.Message = "No faculties found for this program.";
      RESPONSE.Success.data = [];
      return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    }

    // Safely parse additional_data
    const formattedFaculties = faculties.map((faculty) => {
      let parsedData = [];
      try {
        parsedData = JSON.parse(faculty.additional_data || "[]");
      } catch {
        parsedData = [];
      }

      return {
        ...faculty.toJSON(),
        additional_data: parsedData,
      };
    });

    RESPONSE.Success.Message = "Faculties retrieved successfully for the program.";
    RESPONSE.Success.data = formattedFaculties;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching faculties by program_id:", error);
    RESPONSE.Failure.Message =
      error.message || "Failed to fetch faculties for the given program_id.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};


// =======================================
// Get All Faculties by program_id and funding_type_id
// =======================================

exports.getFacultiesByProgramAndFunding = async (req, res) => {
  try {
    const { program_id, funding_type_id } = req.params; // use query params for flexibility

    if (!program_id) {
      RESPONSE.Failure.Message = "program_id is required.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    // Build dynamic where condition
    const whereCondition = { program_id, delete_status: 0 };
    if (funding_type_id) whereCondition.funding_type_id = funding_type_id;

    const faculties = await Faculty.findAll({
      where: whereCondition,
      include: [
        { model: Program, as: "program" },
        { model: FundingType, as: "funding_type" },
      ],
      order: [["faculty_id", "DESC"]],
    });

    if (!faculties.length) {
      RESPONSE.Success.Message = "No faculties found for the given criteria.";
      RESPONSE.Success.data = [];
      return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    }

    // Safely parse additional_data
    const formattedFaculties = faculties.map((faculty) => {
      let parsedData = [];
      try {
        parsedData = JSON.parse(faculty.additional_data || "[]");
      } catch {
        parsedData = [];
      }

      return {
        ...faculty.toJSON(),
        additional_data: parsedData,
      };
    });

    RESPONSE.Success.Message =
      "Faculties retrieved successfully for the given criteria.";
    RESPONSE.Success.data = formattedFaculties;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching faculties by program_id and funding_type_id:", error);
    RESPONSE.Failure.Message =
      error.message ||
      "Failed to fetch faculties for the given program_id and funding_type_id.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};
