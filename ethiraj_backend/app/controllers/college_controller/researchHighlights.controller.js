const db = require("../../models");
const ResearchHighlights = db.researchHighlights;
const Academic = db.academics;
const Department = db.departments;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const { Op } = require("sequelize");

// Add New Research Highlight

exports.addResearchHighlight = async (req, res) => {
  try {
    const {
      title,
      publisher,
      description,
      faculty_name,
      academic_id,
      department_id,
      year,
      mark_as_important,
    } = req.body;

    // Basic validation
    if (!title || !academic_id || !department_id) {
      RESPONSE.Failure.Message =
        "title, academic_id, and department_id are required.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    // Validate relationships
    const academic = await Academic.findByPk(academic_id);
    const department = await Department.findByPk(department_id);

    if (!academic) {
      RESPONSE.Failure.Message = "Invalid academic_id. Academic record not found.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    if (!department) {
      RESPONSE.Failure.Message = "Invalid department_id. Department not found.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    // Create research highlight with is_important = 0 by default
    let newResearchHighlight = await ResearchHighlights.create({
      title,
      publisher,
      description,
      faculty_name,
      academic_id,
      department_id,
      year,
      delete_status: 0,
      is_important: 0,
    });

    // ⭐ APPLY IMPORTANT LOGIC IF mark_as_important = true
    if (mark_as_important === true) {
      const importantHighlights = await ResearchHighlights.findAll({
        where: {
          is_important: 1,
          delete_status: 0,
        },
        order: [["updatedAt", "ASC"]], // oldest first
      });

      // If 4 or more important records exist, unmark the oldest one
      if (importantHighlights.length >= 4) {
        const oldest = importantHighlights[0];
        await ResearchHighlights.update(
          { is_important: 0 },
          { where: { researchHighlights_id: oldest.researchHighlights_id } }
        );
      }

      // Mark new research highlight as important
      await ResearchHighlights.update(
        { is_important: 1 },
        { where: { researchHighlights_id: newResearchHighlight.researchHighlights_id } }
      );

      newResearchHighlight.is_important = 1;
    }

    RESPONSE.Success.Message = "Research Highlight added successfully.";
    RESPONSE.Success.data = [{ researchHighlights_id: newResearchHighlight.researchHighlights_id }];
    return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error adding research highlight:", error);
    RESPONSE.Failure.Message = error.message || "Failed to add research highlight.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get All Research Highlights

exports.getAllResearchHighlights = async (req, res) => {
  try {
    const researchHighlights = await ResearchHighlights.findAll({
      where: { delete_status: 0 },
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
      order: [["researchHighlights_id", "DESC"]],
    });

    const formatted = researchHighlights.map((rh) => rh.toJSON());

    RESPONSE.Success.Message = "Research Highlights retrieved successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching research highlights:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch research highlights.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get Research Highlight by ID

exports.getResearchHighlightById = async (req, res) => {
  try {
    const { researchHighlights_id } = req.params;

    const researchHighlight = await ResearchHighlights.findOne({
      where: { researchHighlights_id, delete_status: 0 },
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
    });

    if (!researchHighlight) {
      RESPONSE.Failure.Message = "Research Highlight not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    RESPONSE.Success.Message = "Research Highlight retrieved successfully.";
    RESPONSE.Success.data = researchHighlight.toJSON();
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching research highlight:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch research highlight.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Update Research Highlight

exports.updateResearchHighlight = async (req, res) => {
  try {
    const { researchHighlights_id } = req.params;
    const {
      title,
      publisher,
      description,
      faculty_name,
      academic_id,
      department_id,
      year,
    } = req.body;

    // Check if record exists
    const researchHighlight = await ResearchHighlights.findOne({
      where: { researchHighlights_id, delete_status: 0 },
    });

    if (!researchHighlight) {
      RESPONSE.Failure.Message = "Research Highlight not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    // Validate relationships if they are being updated
    if (academic_id) {
      const academic = await Academic.findByPk(academic_id);
      if (!academic) {
        RESPONSE.Failure.Message = "Invalid academic_id. Academic record not found.";
        return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
      }
    }

    if (department_id) {
      const department = await Department.findByPk(department_id);
      if (!department) {
        RESPONSE.Failure.Message = "Invalid department_id. Department not found.";
        return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
      }
    }

    const updatePayload = {};
    if (title !== undefined) updatePayload.title = title;
    if (publisher !== undefined) updatePayload.publisher = publisher;
    if (description !== undefined) updatePayload.description = description;
    if (faculty_name !== undefined) updatePayload.faculty_name = faculty_name;
    if (academic_id !== undefined) updatePayload.academic_id = academic_id;
    if (department_id !== undefined) updatePayload.department_id = department_id;
    if (year !== undefined) updatePayload.year = year;
    updatePayload.updatedAt = new Date();

    await ResearchHighlights.update(updatePayload, {
      where: { researchHighlights_id, delete_status: 0 },
    });

    RESPONSE.Success.Message = "Research Highlight updated successfully.";
    RESPONSE.Success.data = [{ researchHighlights_id }];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error updating research highlight:", error);
    RESPONSE.Failure.Message = error.message || "Failed to update research highlight.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Soft Delete Research Highlight

exports.deleteResearchHighlight = async (req, res) => {
  try {
    const { researchHighlights_id } = req.params;

    const researchHighlight = await ResearchHighlights.findOne({
      where: { researchHighlights_id, delete_status: 0 },
    });

    if (!researchHighlight) {
      RESPONSE.Failure.Message = "Research Highlight not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    await ResearchHighlights.update(
      { delete_status: 1, deletedAt: new Date() },
      { where: { researchHighlights_id } }
    );

    RESPONSE.Success.Message = "Research Highlight deleted successfully.";
    RESPONSE.Success.data = [{ researchHighlights_id }];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error deleting research highlight:", error);
    RESPONSE.Failure.Message = error.message || "Failed to delete research highlight.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Restore Research Highlight (from soft delete)

exports.restoreResearchHighlight = async (req, res) => {
  try {
    const { researchHighlights_id } = req.params;

    const researchHighlight = await ResearchHighlights.findOne({
      where: { researchHighlights_id, delete_status: 1 },
    });

    if (!researchHighlight) {
      RESPONSE.Failure.Message = "Deleted Research Highlight not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    await ResearchHighlights.update(
      { delete_status: 0, deletedAt: null },
      { where: { researchHighlights_id } }
    );

    RESPONSE.Success.Message = "Research Highlight restored successfully.";
    RESPONSE.Success.data = [{ researchHighlights_id }];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error restoring research highlight:", error);
    RESPONSE.Failure.Message = error.message || "Failed to restore research highlight.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get Important Research Highlights Only

exports.getImportantResearchHighlights = async (req, res) => {
  try {
    const importantHighlights = await ResearchHighlights.findAll({
      where: { is_important: 1, delete_status: 0 },
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
      order: [["updatedAt", "DESC"]],
    });

    const formatted = importantHighlights.map((rh) => rh.toJSON());

    RESPONSE.Success.Message = "Important Research Highlights retrieved successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching important research highlights:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch important research highlights.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get Research Highlights by Academic ID

exports.getResearchHighlightsByAcademic = async (req, res) => {
  try {
    const { academic_id } = req.params;

    const academic = await Academic.findByPk(academic_id);
    if (!academic) {
      RESPONSE.Failure.Message = "Invalid academic_id. Academic record not found.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    const researchHighlights = await ResearchHighlights.findAll({
      where: { academic_id, delete_status: 0 },
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
      order: [["researchHighlights_id", "DESC"]],
    });

    const formatted = researchHighlights.map((rh) => rh.toJSON());

    RESPONSE.Success.Message = "Research Highlights retrieved successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching research highlights:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch research highlights.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get Research Highlights by Department ID

exports.getResearchHighlightsByDepartment = async (req, res) => {
  try {
    const { department_id } = req.params;

    const department = await Department.findByPk(department_id);
    if (!department) {
      RESPONSE.Failure.Message = "Invalid department_id. Department not found.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    const researchHighlights = await ResearchHighlights.findAll({
      where: { department_id, delete_status: 0 },
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
      order: [["researchHighlights_id", "DESC"]],
    });

    const formatted = researchHighlights.map((rh) => rh.toJSON());

    RESPONSE.Success.Message = "Research Highlights retrieved successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching research highlights:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch research highlights.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Mark Research Highlight as Important (with max 4 limit)

exports.markResearchHighlightAsImportant = async (req, res) => {
  try {
    const { researchHighlights_id } = req.params;
    const { is_important } = req.body;

    // Validate is_important value (should be 0 or 1)
    if (is_important === undefined || ![0, 1].includes(is_important)) {
      RESPONSE.Failure.Message = "is_important must be 0 or 1.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    // Check if record exists
    const researchHighlight = await ResearchHighlights.findOne({
      where: { researchHighlights_id, delete_status: 0 },
    });

    if (!researchHighlight) {
      RESPONSE.Failure.Message = "Research Highlight not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    // If marking as important
    if (is_important === 1) {
      const importantHighlights = await ResearchHighlights.findAll({
        where: {
          is_important: 1,
          delete_status: 0,
        },
        order: [["updatedAt", "ASC"]], // oldest first
      });

      // If 4 or more important records exist, unmark the oldest one
      if (importantHighlights.length >= 4) {
        const oldest = importantHighlights[0];
        await ResearchHighlights.update(
          { is_important: 0, updatedAt: new Date() },
          { where: { researchHighlights_id: oldest.researchHighlights_id } }
        );
      }
    }

    // Update the is_important field
    await ResearchHighlights.update(
      { is_important, updatedAt: new Date() },
      { where: { researchHighlights_id, delete_status: 0 } }
    );

    RESPONSE.Success.Message = `Research Highlight marked as ${is_important === 1 ? "important" : "not important"} successfully.`;
    RESPONSE.Success.data = [{ researchHighlights_id, is_important }];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error marking research highlight as important:", error);
    RESPONSE.Failure.Message = error.message || "Failed to mark research highlight as important.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get All Academics with Research Highlights

exports.getAcademicsWithResearchHighlights = async (req, res) => {
  try {
    const researchHighlights = await ResearchHighlights.findAll({
      where: { delete_status: 0 },
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
      order: [["researchHighlights_id", "DESC"]],
    });

    const formatted = researchHighlights.map((rh) => rh.toJSON());

    RESPONSE.Success.Message = "Academics with Research Highlights retrieved successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching academics with research highlights:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch academics with research highlights.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get All Departments by Academic ID in Research Highlights

exports.getDepartmentsByAcademicInResearchHighlights = async (req, res) => {
  try {
    const { academic_id } = req.params;

    const academic = await Academic.findByPk(academic_id);
    if (!academic) {
      RESPONSE.Failure.Message = "Invalid academic_id. Academic record not found.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    const departments = await Department.findAll({
      include: {
        model: ResearchHighlights,
        as: "researchHighlights",
        where: { academic_id, delete_status: 0 },
        required: true,
      },
      subQuery: false,
      raw: false,
    });

    RESPONSE.Success.Message = "Departments in Research Highlights for this Academic retrieved successfully.";
    RESPONSE.Success.data = departments;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching departments:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch departments.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Advanced Filter for Research Highlights (with keyword, academic_id, department_id, year)

exports.filterResearchHighlights = async (req, res) => {
  try {
    const { keyword, academic_id, department_id, year } = req.query;

    // Build dynamic WHERE clause
    const whereClause = { delete_status: 0 };

    // Add keyword filter (search in title, publisher, description, faculty_name)
    if (keyword) {
      whereClause[Op.or] = [
        { title: { [Op.like]: `%${keyword}%` } },
        { publisher: { [Op.like]: `%${keyword}%` } },
        { description: { [Op.like]: `%${keyword}%` } },
        { faculty_name: { [Op.like]: `%${keyword}%` } },
      ];
    }

    // Add academic_id filter if provided
    if (academic_id) {
      whereClause.academic_id = academic_id;
    }

    // Add department_id filter if provided
    if (department_id) {
      whereClause.department_id = department_id;
    }

    // Add year filter if provided
    if (year) {
      whereClause.year = year;
    }

    // Fetch filtered records
    const researchHighlights = await ResearchHighlights.findAll({
      where: whereClause,
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
      order: [["updatedAt", "DESC"]], // Newest to oldest
    });

    const formatted = researchHighlights.map((rh) => rh.toJSON());

    RESPONSE.Success.Message = "Research Highlights filtered successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error filtering research highlights:", error);
    RESPONSE.Failure.Message = error.message || "Failed to filter research highlights.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get All Research Highlights Grouped by Year

exports.getAllResearchHighlightsYear = async (req, res) => {
  try {
    const researchHighlights = await ResearchHighlights.findAll({
      where: { delete_status: 0 },
      attributes: ["researchHighlights_id", "year"],
      order: [["year", "DESC"], ["researchHighlights_id", "DESC"]],
    });

    // Group by year
    const groupedByYear = {};
    researchHighlights.forEach((rh) => {
      const year = rh.year || "No Year";
      if (!groupedByYear[year]) {
        groupedByYear[year] = [];
      }
      groupedByYear[year].push({ researchHighlights_id: rh.researchHighlights_id });
    });

    RESPONSE.Success.Message = "Research Highlights grouped by year retrieved successfully.";
    RESPONSE.Success.data = groupedByYear;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching research highlights by year:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch research highlights by year.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};
