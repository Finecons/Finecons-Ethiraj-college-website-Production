const db = require("../../models");
const StudentPublications = db.studentPublications;
const Academic = db.academics;
const Department = db.departments;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const { Op } = require("sequelize");

// Add New Student Publication

exports.addStudentPublication = async (req, res) => {
  try {
    const {
      title,
      publisher,
      description,
      student_name,
      academic_id,
      department_id,
      year,
      isbn,
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

    // Create student publication with is_important = 0 by default
    let newStudentPublication = await StudentPublications.create({
      title,
      publisher,
      description,
      student_name,
      academic_id,
      department_id,
      year,
      isbn,
      delete_status: 0,
      is_important: 0,
    });

    // ⭐ APPLY IMPORTANT LOGIC IF mark_as_important = true
    if (mark_as_important === true) {
      const importantPublications = await StudentPublications.findAll({
        where: {
          is_important: 1,
          delete_status: 0,
        },
        order: [["updatedAt", "ASC"]], // oldest first
      });

      // If 4 or more important records exist, unmark the oldest one
      if (importantPublications.length >= 4) {
        const oldest = importantPublications[0];
        await StudentPublications.update(
          { is_important: 0 },
          { where: { studentPublications_id: oldest.studentPublications_id } }
        );
      }

      // Mark new student publication as important
      await StudentPublications.update(
        { is_important: 1 },
        { where: { studentPublications_id: newStudentPublication.studentPublications_id } }
      );

      newStudentPublication.is_important = 1;
    }

    RESPONSE.Success.Message = "Student Publication added successfully.";
    RESPONSE.Success.data = [{ studentPublications_id: newStudentPublication.studentPublications_id }];
    return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error adding student publication:", error);
    RESPONSE.Failure.Message = error.message || "Failed to add student publication.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get All Student Publications

exports.getAllStudentPublications = async (req, res) => {
  try {
    const studentPublications = await StudentPublications.findAll({
      where: { delete_status: 0 },
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
      order: [["studentPublications_id", "DESC"]],
    });

    const formatted = studentPublications.map((sp) => sp.toJSON());

    RESPONSE.Success.Message = "Student Publications retrieved successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching student publications:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch student publications.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get Student Publication by ID

exports.getStudentPublicationById = async (req, res) => {
  try {
    const { studentPublications_id } = req.params;

    const studentPublication = await StudentPublications.findOne({
      where: { studentPublications_id, delete_status: 0 },
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
    });

    if (!studentPublication) {
      RESPONSE.Failure.Message = "Student Publication not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    RESPONSE.Success.Message = "Student Publication retrieved successfully.";
    RESPONSE.Success.data = studentPublication.toJSON();
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching student publication:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch student publication.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Update Student Publication

exports.updateStudentPublication = async (req, res) => {
  try {
    const { studentPublications_id } = req.params;
    const {
      title,
      publisher,
      description,
      student_name,
      academic_id,
      department_id,
      year,
      isbn,
    } = req.body;

    // Check if record exists
    const studentPublication = await StudentPublications.findOne({
      where: { studentPublications_id, delete_status: 0 },
    });

    if (!studentPublication) {
      RESPONSE.Failure.Message = "Student Publication not found.";
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
    if (student_name !== undefined) updatePayload.student_name = student_name;
    if (academic_id !== undefined) updatePayload.academic_id = academic_id;
    if (department_id !== undefined) updatePayload.department_id = department_id;
    if (isbn !== undefined) updatePayload.isbn = isbn;
    if (year !== undefined) updatePayload.year = year;
    updatePayload.updatedAt = new Date();

    await StudentPublications.update(updatePayload, {
      where: { studentPublications_id, delete_status: 0 },
    });

    RESPONSE.Success.Message = "Student Publication updated successfully.";
    RESPONSE.Success.data = [{ studentPublications_id }];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error updating student publication:", error);
    RESPONSE.Failure.Message = error.message || "Failed to update student publication.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Soft Delete Student Publication

exports.deleteStudentPublication = async (req, res) => {
  try {
    const { studentPublications_id } = req.params;

    const studentPublication = await StudentPublications.findOne({
      where: { studentPublications_id, delete_status: 0 },
    });

    if (!studentPublication) {
      RESPONSE.Failure.Message = "Student Publication not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    await StudentPublications.update(
      { delete_status: 1, deletedAt: new Date() },
      { where: { studentPublications_id } }
    );

    RESPONSE.Success.Message = "Student Publication deleted successfully.";
    RESPONSE.Success.data = [{ studentPublications_id }];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error deleting student publication:", error);
    RESPONSE.Failure.Message = error.message || "Failed to delete student publication.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Restore Student Publication (from soft delete)

exports.restoreStudentPublication = async (req, res) => {
  try {
    const { studentPublications_id } = req.params;

    const studentPublication = await StudentPublications.findOne({
      where: { studentPublications_id, delete_status: 1 },
    });

    if (!studentPublication) {
      RESPONSE.Failure.Message = "Deleted Student Publication not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    await StudentPublications.update(
      { delete_status: 0, deletedAt: null },
      { where: { studentPublications_id } }
    );

    RESPONSE.Success.Message = "Student Publication restored successfully.";
    RESPONSE.Success.data = [{ studentPublications_id }];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error restoring student publication:", error);
    RESPONSE.Failure.Message = error.message || "Failed to restore student publication.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Mark Student Publication as Important (with max 4 limit)

exports.markStudentPublicationAsImportant = async (req, res) => {
  try {
    const { studentPublications_id } = req.params;
    const { is_important } = req.body;

    // Validate is_important value (should be 0 or 1)
    if (is_important === undefined || ![0, 1].includes(is_important)) {
      RESPONSE.Failure.Message = "is_important must be 0 or 1.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    // Check if record exists
    const studentPublication = await StudentPublications.findOne({
      where: { studentPublications_id, delete_status: 0 },
    });

    if (!studentPublication) {
      RESPONSE.Failure.Message = "Student Publication not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    // If marking as important
    if (is_important === 1) {
      const importantPublications = await StudentPublications.findAll({
        where: {
          is_important: 1,
          delete_status: 0,
        },
        order: [["updatedAt", "ASC"]], // oldest first
      });

      // If 4 or more important records exist, unmark the oldest one
      if (importantPublications.length >= 4) {
        const oldest = importantPublications[0];
        await StudentPublications.update(
          { is_important: 0, updatedAt: new Date() },
          { where: { studentPublications_id: oldest.studentPublications_id } }
        );
      }
    }

    // Update the is_important field
    await StudentPublications.update(
      { is_important, updatedAt: new Date() },
      { where: { studentPublications_id, delete_status: 0 } }
    );

    RESPONSE.Success.Message = `Student Publication marked as ${is_important === 1 ? "important" : "not important"} successfully.`;
    RESPONSE.Success.data = [{ studentPublications_id, is_important }];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error marking student publication as important:", error);
    RESPONSE.Failure.Message = error.message || "Failed to mark student publication as important.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get Important Student Publications Only

exports.getImportantStudentPublications = async (req, res) => {
  try {
    const importantPublications = await StudentPublications.findAll({
      where: { is_important: 1, delete_status: 0 },
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
      order: [["updatedAt", "DESC"]],
    });

    const formatted = importantPublications.map((sp) => sp.toJSON());

    RESPONSE.Success.Message = "Important Student Publications retrieved successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching important student publications:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch important student publications.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get Student Publications by Academic ID

exports.getStudentPublicationsByAcademic = async (req, res) => {
  try {
    const { academic_id } = req.params;

    const academic = await Academic.findByPk(academic_id);
    if (!academic) {
      RESPONSE.Failure.Message = "Invalid academic_id. Academic record not found.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    const studentPublications = await StudentPublications.findAll({
      where: { academic_id, delete_status: 0 },
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
      order: [["studentPublications_id", "DESC"]],
    });

    const formatted = studentPublications.map((sp) => sp.toJSON());

    RESPONSE.Success.Message = "Student Publications retrieved successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching student publications:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch student publications.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get Student Publications by Department ID

exports.getStudentPublicationsByDepartment = async (req, res) => {
  try {
    const { department_id } = req.params;

    const department = await Department.findByPk(department_id);
    if (!department) {
      RESPONSE.Failure.Message = "Invalid department_id. Department not found.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    const studentPublications = await StudentPublications.findAll({
      where: { department_id, delete_status: 0 },
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
      order: [["studentPublications_id", "DESC"]],
    });

    const formatted = studentPublications.map((sp) => sp.toJSON());

    RESPONSE.Success.Message = "Student Publications retrieved successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching student publications:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch student publications.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get All Academics with Student Publications

exports.getAcademicsWithStudentPublications = async (req, res) => {
  try {
    const studentPublications = await StudentPublications.findAll({
      where: { delete_status: 0 },
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
      order: [["studentPublications_id", "DESC"]],
    });

    const formatted = studentPublications.map((sp) => sp.toJSON());

    RESPONSE.Success.Message = "Academics with Student Publications retrieved successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching academics with student publications:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch academics with student publications.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get All Departments by Academic ID in Student Publications

exports.getDepartmentsByAcademicInStudentPublications = async (req, res) => {
  try {
    const { academic_id } = req.params;

    const academic = await Academic.findByPk(academic_id);
    if (!academic) {
      RESPONSE.Failure.Message = "Invalid academic_id. Academic record not found.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    const departments = await Department.findAll({
      include: {
        model: StudentPublications,
        as: "studentPublications",
        where: { academic_id, delete_status: 0 },
        required: true,
      },
      subQuery: false,
      raw: false,
    });

    RESPONSE.Success.Message = "Departments in Student Publications for this Academic retrieved successfully.";
    RESPONSE.Success.data = departments;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching departments:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch departments.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Advanced Filter for Student Publications (with keyword, academic_id, department_id, year)

exports.filterStudentPublications = async (req, res) => {
  try {
    const { keyword, academic_id, department_id, year } = req.query;

    // Build dynamic WHERE clause
    const whereClause = { delete_status: 0 };

    // Add keyword filter (search in title, publisher, description, student_name, isbn)
    if (keyword) {
      whereClause[Op.or] = [
        { title: { [Op.like]: `%${keyword}%` } },
        { publisher: { [Op.like]: `%${keyword}%` } },
        { description: { [Op.like]: `%${keyword}%` } },
        { student_name: { [Op.like]: `%${keyword}%` } },
        { isbn: { [Op.like]: `%${keyword}%` } },
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
    const studentPublications = await StudentPublications.findAll({
      where: whereClause,
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
      order: [["updatedAt", "DESC"]], // Newest to oldest
    });

    const formatted = studentPublications.map((sp) => sp.toJSON());

    RESPONSE.Success.Message = "Student Publications filtered successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error filtering student publications:", error);
    RESPONSE.Failure.Message = error.message || "Failed to filter student publications.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get All Student Publications Grouped by Year

exports.getAllStudentPublicationsYear = async (req, res) => {
  try {
    const studentPublications = await StudentPublications.findAll({
      where: { delete_status: 0 },
      attributes: ["studentPublications_id", "year"],
      order: [["year", "DESC"], ["studentPublications_id", "DESC"]],
    });

    // Group by year
    const groupedByYear = {};
    studentPublications.forEach((sp) => {
      const year = sp.year || "No Year";
      if (!groupedByYear[year]) {
        groupedByYear[year] = [];
      }
      groupedByYear[year].push({ studentPublications_id: sp.studentPublications_id });
    });

    RESPONSE.Success.Message = "Student Publications grouped by year retrieved successfully.";
    RESPONSE.Success.data = groupedByYear;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching student publications by year:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch student publications by year.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};
