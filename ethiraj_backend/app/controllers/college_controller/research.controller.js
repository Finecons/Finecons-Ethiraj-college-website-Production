const db = require("../../models");
const Research = db.researches;
const Faculty = db.faculties;
const Program = db.programs;
const Department = db.departments;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");

// Add New Research

// exports.addResearch = async (req, res) => {
//   try {
//     const {
//       title,
//       description,
//       publication_date,
//       faculty_id,
//       program_id,
//       department_id,
//       image_url,
//       additional_data,
//     } = req.body;

//     // Basic validation
//     if (!title || !faculty_id || !program_id || !department_id) {
//       RESPONSE.Failure.Message =
//         "title, faculty_id, program_id, and department_id are required.";
//       return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
//     }

//     // Validate relationships
//     const faculty = await Faculty.findByPk(faculty_id);
//     const program = await Program.findByPk(program_id);
//     const department = await Department.findByPk(department_id);

//     if (!faculty) {
//       RESPONSE.Failure.Message = "Invalid faculty_id. Faculty not found.";
//       return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
//     }

//     if (!program) {
//       RESPONSE.Failure.Message = "Invalid program_id. Program not found.";
//       return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
//     }

//     if (!department) {
//       RESPONSE.Failure.Message = "Invalid department_id. Department not found.";
//       return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
//     }

//     const formattedAdditionalData = additional_data
//       ? JSON.stringify(additional_data)
//       : JSON.stringify([]);

//     const newResearch = await Research.create({
//       title,
//       description,
//       publication_date,
//       faculty_id,
//       program_id,
//       department_id,
//       image_url,
//       additional_data: formattedAdditionalData,
//     });

//     RESPONSE.Success.Message = "Research added successfully.";
//     RESPONSE.Success.data = [{ research_id: newResearch.research_id }];
//     return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
//   } catch (error) {
//     console.error("Error adding research:", error);
//     RESPONSE.Failure.Message = error.message || "Failed to add research.";
//     return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
//   }
// };

exports.addResearch = async (req, res) => {
  try {
    const {
      title,
      description,
      publication_date,
      faculty_id,
      program_id,
      department_id,
      image_url,
      additional_data,
      status,
      mark_as_important
    } = req.body;

    // Basic validation
    if (!title || !faculty_id || !program_id || !department_id) {
      RESPONSE.Failure.Message =
        "title, faculty_id, program_id, and department_id are required.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    // Validate relationships
    const faculty = await Faculty.findByPk(faculty_id);
    const program = await Program.findByPk(program_id);
    const department = await Department.findByPk(department_id);

    if (!faculty) {
      RESPONSE.Failure.Message = "Invalid faculty_id. Faculty not found.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    if (!program) {
      RESPONSE.Failure.Message = "Invalid program_id. Program not found.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    if (!department) {
      RESPONSE.Failure.Message = "Invalid department_id. Department not found.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    const formattedAdditionalData = additional_data
      ? JSON.stringify(additional_data)
      : JSON.stringify([]);

    // -------------------------------------
    // CREATE RESEARCH (default not important)
    // -------------------------------------
    let newResearch = await Research.create({
      title,
      description,
      publication_date,
      faculty_id,
      program_id,
      department_id,
      image_url,
      status: status || "active",
      is_important: 0,
      additional_data: formattedAdditionalData,
    });

    // ---------------------------------------------------
    // ⭐ APPLY IMPORTANT LOGIC IF mark_as_important = true
    // ---------------------------------------------------
    if (mark_as_important === true) {
      const importantResearches = await Research.findAll({
        where: {
          is_important: 1,
          delete_status: 0
        },
        order: [["updatedAt", "ASC"]] // oldest first
      });

      // If 2 important exist → unmark the oldest
      if (importantResearches.length >= 3) {
        const oldest = importantResearches[0];

        await Research.update(
          { is_important: 0 },
          { where: { research_id: oldest.research_id } }
        );
      }

      // mark new research as important
      await Research.update(
        { is_important: 1 },
        { where: { research_id: newResearch.research_id } }
      );

      newResearch.is_important = 1;
    }

    RESPONSE.Success.Message = "Research added successfully.";
    RESPONSE.Success.data = [{ research_id: newResearch.research_id }];
    return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);

  } catch (error) {
    console.error("Error adding research:", error);
    RESPONSE.Failure.Message = error.message || "Failed to add research.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};




// Get All Research

exports.getAllResearch = async (req, res) => {
  try {
    const researches = await Research.findAll({
      where: { delete_status: 0, },
      include: [
        { model: Faculty, as: "faculty" },
        { model: Program, as: "program" },
        { model: Department, as: "department" },
      ],
      order: [["research_id", "DESC"]],
    });

    const formatted = researches.map((r) => {
      let parsedData = [];
      try {
        parsedData = JSON.parse(r.additional_data || "[]");
      } catch {
        parsedData = [];
      }

      return {
        ...r.toJSON(),
        additional_data: parsedData,
      };
    });

    RESPONSE.Success.Message = "Research records retrieved successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching research:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch research.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

exports.getAllActiveResearch = async (req, res) => {
  try {
    const researches = await Research.findAll({
      where: { delete_status: 0, status: "active" },
      include: [
        { model: Faculty, as: "faculty" },
        { model: Program, as: "program" },
        { model: Department, as: "department" },
      ],
      order: [["research_id", "DESC"]],
    });

    const formatted = researches.map((r) => {
      let parsedData = [];
      try {
        parsedData = JSON.parse(r.additional_data || "[]");
      } catch {
        parsedData = [];
      }

      return {
        ...r.toJSON(),
        additional_data: parsedData,
      };
    });

    RESPONSE.Success.Message = "Research records retrieved successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching research:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch research.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get Research by ID

exports.getResearchById = async (req, res) => {
  try {
    const { research_id } = req.params;

    const research = await Research.findOne({
      where: { research_id, delete_status: 0 },
      include: [
        { model: Faculty, as: "faculty" },
        { model: Program, as: "program" },
        { model: Department, as: "department" },
      ],
    });

    if (!research) {
      RESPONSE.Failure.Message = "Research not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    let parsedData = [];
    try {
      parsedData = JSON.parse(research.additional_data || "[]");
    } catch {
      parsedData = [];
    }

    RESPONSE.Success.Message = "Research retrieved successfully.";
    RESPONSE.Success.data = {
      ...research.toJSON(),
      additional_data: parsedData,
    };
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching research:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch research.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};


// Update Research

// exports.updateResearch = async (req, res) => {
//   try {
//     const { research_id } = req.params;
//     const {
//       title,
//       description,
//       publication_date,
//       faculty_id,
//       program_id,
//       department_id,
//       image_url,
//       additional_data,
//     } = req.body;

//     const research = await Research.findOne({
//       where: { research_id, delete_status: 0 },
//     });

//     if (!research) {
//       RESPONSE.Failure.Message = "Research not found or deleted.";
//       return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
//     }

//     const formattedAdditionalData =
//       additional_data !== undefined
//         ? JSON.stringify(additional_data)
//         : research.additional_data;

//     await Research.update(
//       {
//         title,
//         description,
//         publication_date,
//         faculty_id,
//         program_id,
//         department_id,
//         image_url,
//         additional_data: formattedAdditionalData,
//       },
//       { where: { research_id } }
//     );

//     RESPONSE.Success.Message = "Research updated successfully.";
//     RESPONSE.Success.data = [];
//     return res.status(StatusCode.OK.code).send(RESPONSE.Success);
//   } catch (error) {
//     console.error("Error updating research:", error);
//     RESPONSE.Failure.Message = error.message || "Failed to update research.";
//     return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
//   }
// };

exports.updateResearch = async (req, res) => {
  try {
    const { research_id } = req.params;
    const {
      title,
      description,
      publication_date,
      faculty_id,
      program_id,
      department_id,
      image_url,
      additional_data,
      status,
      mark_as_important
    } = req.body;

    // Fetch research
    const research = await Research.findOne({
      where: { research_id, delete_status: 0 },
    });

    if (!research) {
      RESPONSE.Failure.Message = "Research not found or deleted.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    // Prepare additional data
    const formattedAdditionalData =
      additional_data !== undefined
        ? JSON.stringify(additional_data)
        : research.additional_data;

    // ------------------------------------
    // UPDATE MAIN RESEARCH DATA
    // ------------------------------------
    await Research.update(
      {
        title,
        description,
        publication_date,
        faculty_id,
        program_id,
        department_id,
        image_url,
        status,
        additional_data: formattedAdditionalData,
      },
      { where: { research_id } }
    );

    // ---------------------------------------------------------------
    // ⭐ APPLY IMPORTANT LOGIC (similar to updateNewsEvent)
    // ---------------------------------------------------------------
    if (mark_as_important === true) {

      // Get all important research records
      const importantResearch = await Research.findAll({
        where: {
          is_important: 1,
          delete_status: 0
        },
        order: [["updatedAt", "ASC"]]  // oldest first
      });

      // If current is already important → do nothing
      if (research.is_important !== 1) {

        // If already 2 → unmark the oldest
        if (importantResearch.length >= 2) {
          const oldest = importantResearch[0];

          await Research.update(
            { is_important: 0 },
            { where: { research_id: oldest.research_id } }
          );
        }

        // Mark the updated record as important
        await Research.update(
          { is_important: 1 },
          { where: { research_id } }
        );
      }
    }

    RESPONSE.Success.Message = "Research updated successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);

  } catch (error) {
    console.error("Error updating research:", error);
    RESPONSE.Failure.Message = error.message || "Failed to update research.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};


// Soft Delete Research

exports.deleteResearch = async (req, res) => {
  try {
    const { research_id } = req.params;

    const research = await Research.findOne({ where: { research_id } });
    if (!research) {
      RESPONSE.Failure.Message = "Research not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    if (research.delete_status === 1) {
      RESPONSE.Failure.Message = "Research already deleted.";
      return res.status(StatusCode.OK.code).send(RESPONSE.Failure);
    }

    await Research.update(
      { delete_status: 1, deletedAt: new Date() },
      { where: { research_id } }
    );

    RESPONSE.Success.Message = "Research soft deleted successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error deleting research:", error);
    RESPONSE.Failure.Message = error.message || "Failed to delete research.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};


// Restore Research

exports.restoreResearch = async (req, res) => {
  try {
    const { research_id } = req.params;

    const research = await Research.findOne({
      where: { research_id, delete_status: 1 },
    });

    if (!research) {
      RESPONSE.Failure.Message = "Research not found or not deleted.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    await Research.update(
      { delete_status: 0, deletedAt: null },
      { where: { research_id } }
    );

    RESPONSE.Success.Message = "Research restored successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error restoring research:", error);
    RESPONSE.Failure.Message = error.message || "Failed to restore research.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};


// Get Research by Faculty ID

// exports.getResearchByFacultyId = async (req, res) => {
//   try {
//     const { faculty_id } = req.params;

//     if (!faculty_id) {
//       RESPONSE.Failure.Message = "faculty_id is required.";
//       return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
//     }

//     const researches = await Research.findAll({
//       where: { faculty_id, delete_status: 0 },
//       include: [
//         { model: Faculty, as: "faculty" },
//         { model: Program, as: "program" },
//         { model: Department, as: "department" },
//       ],
//       order: [["research_id", "DESC"]],
//     });

//     RESPONSE.Success.Message = "Research retrieved successfully for faculty.";
//     RESPONSE.Success.data = researches;
//     return res.status(StatusCode.OK.code).send(RESPONSE.Success);
//   } catch (error) {
//     console.error("Error fetching research by faculty:", error);
//     RESPONSE.Failure.Message = error.message || "Failed to fetch research by faculty.";
//     return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
//   }
// };

exports.getResearchByFacultyId = async (req, res) => {
  try {
    const { faculty_id } = req.params;

    if (!faculty_id) {
      RESPONSE.Failure.Message = "faculty_id is required.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    const researches = await Research.findAll({
      where: { faculty_id, delete_status: 0 },
      include: [
        { model: Faculty, as: "faculty" },
        { model: Program, as: "program" },
        { model: Department, as: "department" },
      ],
      order: [["research_id", "DESC"]],
    });

    // 🧩 Parse the additional_data field for each record
    const formattedResearches = researches.map((research) => {
      let parsedData = [];
      try {
        parsedData = JSON.parse(research.additional_data || "[]");
      } catch {
        parsedData = [];
      }

      return {
        ...research.toJSON(),
        additional_data: parsedData,
      };
    });

    RESPONSE.Success.Message = "Research retrieved successfully for faculty.";
    RESPONSE.Success.data = formattedResearches;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching research by faculty:", error);
    RESPONSE.Failure.Message =
      error.message || "Failed to fetch research by faculty.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};



// Get Research by Program & Department

exports.getResearchByProgramAndDepartment = async (req, res) => {
  try {
    const { program_id, department_id } = req.params;

    if (!program_id || !department_id) {
      RESPONSE.Failure.Message = "program_id and department_id are required.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    const researches = await Research.findAll({
      where: { program_id, department_id, delete_status: 0 },
      include: [
        { model: Faculty, as: "faculty" },
        { model: Program, as: "program" },
        { model: Department, as: "department" },
      ],
      order: [["research_id", "DESC"]],
    });

    RESPONSE.Success.Message = "Research retrieved successfully for program & department.";
    RESPONSE.Success.data = researches;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching research by program & department:", error);
    RESPONSE.Failure.Message =
      error.message || "Failed to fetch research by program & department.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};



// exports.getResearchByDepartment = async (req, res) => {
//   try {
//     const { department_id } = req.params;

//     if (!department_id) {
//       RESPONSE.Failure.Message = "department_id is required.";
//       return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
//     }

//     const researches = await Research.findAll({
//       where: { department_id, delete_status: 0 },
//       include: [
//         { model: Faculty, as: "faculty" },
//         { model: Program, as: "program" },
//         { model: Department, as: "department" },
//       ],
//       order: [["research_id", "DESC"]],
//     });

//     RESPONSE.Success.Message = "Research retrieved successfully for the department.";
//     RESPONSE.Success.data = researches;
//     return res.status(StatusCode.OK.code).send(RESPONSE.Success);
//   } catch (error) {
//     console.error("Error fetching research by department:", error);
//     RESPONSE.Failure.Message =
//       error.message || "Failed to fetch research by department.";
//     return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
//   }
// };

exports.getResearchByDepartment = async (req, res) => {
  try {
    const { department_id } = req.params;

    if (!department_id) {
      RESPONSE.Failure.Message = "department_id is required.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    const researches = await Research.findAll({
      where: { department_id, delete_status: 0, is_important: 1 },
      include: [
        { model: Faculty, as: "faculty" },
        { model: Program, as: "program" },
        { model: Department, as: "department" },
      ],
      order: [["research_id", "DESC"]],
    });

    // 🧩 Parse the additional_data for each record
    const formattedResearches = researches.map((research) => {
      let parsedData = [];
      try {
        parsedData = JSON.parse(research.additional_data || "[]");
      } catch {
        parsedData = [];
      }

      return {
        ...research.toJSON(),
        additional_data: parsedData,
      };
    });

    RESPONSE.Success.Message = "Research retrieved successfully for the department.";
    RESPONSE.Success.data = formattedResearches;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching research by department:", error);
    RESPONSE.Failure.Message =
      error.message || "Failed to fetch research by department.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};
