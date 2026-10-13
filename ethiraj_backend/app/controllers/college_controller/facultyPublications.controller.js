const db = require("../../models");
const FacultyPublications = db.facultyPublications;
const Academic = db.academics;
const Department = db.departments;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const { Op } = require("sequelize");

// Add New Faculty Publication

exports.addFacultyPublication = async (req, res) => {
  try {
    const {
      title,
      publisher,
      description,
      faculty_name,
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

    // Create faculty publication with is_important = 0 by default
    let newFacultyPublication = await FacultyPublications.create({
      title,
      publisher,
      description,
      faculty_name,
      academic_id,
      department_id,
      year,
      isbn,
      delete_status: 0,
      is_important: 0,
    });

    // ⭐ APPLY IMPORTANT LOGIC IF mark_as_important = true
    if (mark_as_important === true) {
      const importantPublications = await FacultyPublications.findAll({
        where: {
          is_important: 1,
          delete_status: 0,
        },
        order: [["updatedAt", "ASC"]], // oldest first
      });

      // If 4 or more important records exist, unmark the oldest one
      if (importantPublications.length >= 4) {
        const oldest = importantPublications[0];
        await FacultyPublications.update(
          { is_important: 0 },
          { where: { facultyPublications_id: oldest.facultyPublications_id } }
        );
      }

      // Mark new faculty publication as important
      await FacultyPublications.update(
        { is_important: 1 },
        { where: { facultyPublications_id: newFacultyPublication.facultyPublications_id } }
      );

      newFacultyPublication.is_important = 1;
    }

    RESPONSE.Success.Message = "Faculty Publication added successfully.";
    RESPONSE.Success.data = [{ facultyPublications_id: newFacultyPublication.facultyPublications_id }];
    return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error adding faculty publication:", error);
    RESPONSE.Failure.Message = error.message || "Failed to add faculty publication.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get All Faculty Publications

exports.getAllFacultyPublications = async (req, res) => {
  try {
    const facultyPublications = await FacultyPublications.findAll({
      where: { delete_status: 0 },
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
      order: [["facultyPublications_id", "DESC"]],
    });

    const formatted = facultyPublications.map((fp) => fp.toJSON());

    RESPONSE.Success.Message = "Faculty Publications retrieved successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching faculty publications:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch faculty publications.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get Faculty Publication by ID

exports.getFacultyPublicationById = async (req, res) => {
  try {
    const { facultyPublications_id } = req.params;

    const facultyPublication = await FacultyPublications.findOne({
      where: { facultyPublications_id, delete_status: 0 },
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
    });

    if (!facultyPublication) {
      RESPONSE.Failure.Message = "Faculty Publication not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    RESPONSE.Success.Message = "Faculty Publication retrieved successfully.";
    RESPONSE.Success.data = facultyPublication.toJSON();
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching faculty publication:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch faculty publication.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Update Faculty Publication

exports.updateFacultyPublication = async (req, res) => {
  try {
    const { facultyPublications_id } = req.params;
    const {
      title,
      publisher,
      description,
      faculty_name,
      academic_id,
      department_id,
      year,
      isbn,
    } = req.body;

    // Check if record exists
    const facultyPublication = await FacultyPublications.findOne({
      where: { facultyPublications_id, delete_status: 0 },
    });

    if (!facultyPublication) {
      RESPONSE.Failure.Message = "Faculty Publication not found.";
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
    if (isbn !== undefined) updatePayload.isbn = isbn;
    if (year !== undefined) updatePayload.year = year;
    updatePayload.updatedAt = new Date();

    await FacultyPublications.update(updatePayload, {
      where: { facultyPublications_id, delete_status: 0 },
    });

    RESPONSE.Success.Message = "Faculty Publication updated successfully.";
    RESPONSE.Success.data = [{ facultyPublications_id }];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error updating faculty publication:", error);
    RESPONSE.Failure.Message = error.message || "Failed to update faculty publication.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Soft Delete Faculty Publication

exports.deleteFacultyPublication = async (req, res) => {
  try {
    const { facultyPublications_id } = req.params;

    const facultyPublication = await FacultyPublications.findOne({
      where: { facultyPublications_id, delete_status: 0 },
    });

    if (!facultyPublication) {
      RESPONSE.Failure.Message = "Faculty Publication not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    await FacultyPublications.update(
      { delete_status: 1, deletedAt: new Date() },
      { where: { facultyPublications_id } }
    );

    RESPONSE.Success.Message = "Faculty Publication deleted successfully.";
    RESPONSE.Success.data = [{ facultyPublications_id }];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error deleting faculty publication:", error);
    RESPONSE.Failure.Message = error.message || "Failed to delete faculty publication.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Restore Faculty Publication (from soft delete)

exports.restoreFacultyPublication = async (req, res) => {
  try {
    const { facultyPublications_id } = req.params;

    const facultyPublication = await FacultyPublications.findOne({
      where: { facultyPublications_id, delete_status: 1 },
    });

    if (!facultyPublication) {
      RESPONSE.Failure.Message = "Deleted Faculty Publication not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    await FacultyPublications.update(
      { delete_status: 0, deletedAt: null },
      { where: { facultyPublications_id } }
    );

    RESPONSE.Success.Message = "Faculty Publication restored successfully.";
    RESPONSE.Success.data = [{ facultyPublications_id }];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error restoring faculty publication:", error);
    RESPONSE.Failure.Message = error.message || "Failed to restore faculty publication.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Mark Faculty Publication as Important (with max 4 limit)

exports.markFacultyPublicationAsImportant = async (req, res) => {
  try {
    const { facultyPublications_id } = req.params;
    const { is_important } = req.body;

    // Validate is_important value (should be 0 or 1)
    if (is_important === undefined || ![0, 1].includes(is_important)) {
      RESPONSE.Failure.Message = "is_important must be 0 or 1.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    // Check if record exists
    const facultyPublication = await FacultyPublications.findOne({
      where: { facultyPublications_id, delete_status: 0 },
    });

    if (!facultyPublication) {
      RESPONSE.Failure.Message = "Faculty Publication not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    // If marking as important
    if (is_important === 1) {
      const importantPublications = await FacultyPublications.findAll({
        where: {
          is_important: 1,
          delete_status: 0,
        },
        order: [["updatedAt", "ASC"]], // oldest first
      });

      // If 4 or more important records exist, unmark the oldest one
      if (importantPublications.length >= 4) {
        const oldest = importantPublications[0];
        await FacultyPublications.update(
          { is_important: 0, updatedAt: new Date() },
          { where: { facultyPublications_id: oldest.facultyPublications_id } }
        );
      }
    }

    // Update the is_important field
    await FacultyPublications.update(
      { is_important, updatedAt: new Date() },
      { where: { facultyPublications_id, delete_status: 0 } }
    );

    RESPONSE.Success.Message = `Faculty Publication marked as ${is_important === 1 ? "important" : "not important"} successfully.`;
    RESPONSE.Success.data = [{ facultyPublications_id, is_important }];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error marking faculty publication as important:", error);
    RESPONSE.Failure.Message = error.message || "Failed to mark faculty publication as important.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get Important Faculty Publications Only

exports.getImportantFacultyPublications = async (req, res) => {
  try {
    const importantPublications = await FacultyPublications.findAll({
      where: { is_important: 1, delete_status: 0 },
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
      order: [["updatedAt", "DESC"]],
    });

    const formatted = importantPublications.map((fp) => fp.toJSON());

    RESPONSE.Success.Message = "Important Faculty Publications retrieved successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching important faculty publications:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch important faculty publications.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get Faculty Publications by Academic ID

exports.getFacultyPublicationsByAcademic = async (req, res) => {
  try {
    const { academic_id } = req.params;

    const academic = await Academic.findByPk(academic_id);
    if (!academic) {
      RESPONSE.Failure.Message = "Invalid academic_id. Academic record not found.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    const facultyPublications = await FacultyPublications.findAll({
      where: { academic_id, delete_status: 0 },
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
      order: [["facultyPublications_id", "DESC"]],
    });

    const formatted = facultyPublications.map((fp) => fp.toJSON());

    RESPONSE.Success.Message = "Faculty Publications retrieved successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching faculty publications:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch faculty publications.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get Faculty Publications by Department ID

exports.getFacultyPublicationsByDepartment = async (req, res) => {
  try {
    const { department_id } = req.params;

    const department = await Department.findByPk(department_id);
    if (!department) {
      RESPONSE.Failure.Message = "Invalid department_id. Department not found.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    const facultyPublications = await FacultyPublications.findAll({
      where: { department_id, delete_status: 0 },
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
      order: [["facultyPublications_id", "DESC"]],
    });

    const formatted = facultyPublications.map((fp) => fp.toJSON());

    RESPONSE.Success.Message = "Faculty Publications retrieved successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching faculty publications:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch faculty publications.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get All Academics with Faculty Publications

exports.getAcademicsWithFacultyPublications = async (req, res) => {
  try {
    const facultyPublications = await FacultyPublications.findAll({
      where: { delete_status: 0 },
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
      order: [["facultyPublications_id", "DESC"]],
    });

    const formatted = facultyPublications.map((fp) => fp.toJSON());

    RESPONSE.Success.Message = "Academics with Faculty Publications retrieved successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching academics with faculty publications:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch academics with faculty publications.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get All Departments by Academic ID in Faculty Publications

exports.getDepartmentsByAcademicInFacultyPublications = async (req, res) => {
  try {
    const { academic_id } = req.params;

    const academic = await Academic.findByPk(academic_id);
    if (!academic) {
      RESPONSE.Failure.Message = "Invalid academic_id. Academic record not found.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    const departments = await Department.findAll({
      include: {
        model: FacultyPublications,
        as: "facultyPublications",
        where: { academic_id, delete_status: 0 },
        required: true,
      },
      subQuery: false,
      raw: false,
    });

    RESPONSE.Success.Message = "Departments in Faculty Publications for this Academic retrieved successfully.";
    RESPONSE.Success.data = departments;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching departments:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch departments.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Advanced Filter for Faculty Publications (with keyword, academic_id, department_id, year)

exports.filterFacultyPublications = async (req, res) => {
  try {
    const { keyword, academic_id, department_id, year } = req.query;

    // Build dynamic WHERE clause
    const whereClause = { delete_status: 0 };

    // Add keyword filter (search in title, publisher, description, faculty_name, isbn)
    if (keyword) {
      whereClause[Op.or] = [
        { title: { [Op.like]: `%${keyword}%` } },
        { publisher: { [Op.like]: `%${keyword}%` } },
        { description: { [Op.like]: `%${keyword}%` } },
        { faculty_name: { [Op.like]: `%${keyword}%` } },
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
    const facultyPublications = await FacultyPublications.findAll({
      where: whereClause,
      include: [
        { model: Academic, as: "academic" },
        { model: Department, as: "department" },
      ],
      order: [["updatedAt", "DESC"]], // Newest to oldest
    });

    const formatted = facultyPublications.map((fp) => fp.toJSON());

    RESPONSE.Success.Message = "Faculty Publications filtered successfully.";
    RESPONSE.Success.data = formatted;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error filtering faculty publications:", error);
    RESPONSE.Failure.Message = error.message || "Failed to filter faculty publications.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// Get All Faculty Publications Grouped by Year

exports.getAllFacultyPublicationsYear = async (req, res) => {
  try {
    const facultyPublications = await FacultyPublications.findAll({
      where: { delete_status: 0 },
      attributes: ["facultyPublications_id", "year"],
      order: [["year", "DESC"], ["facultyPublications_id", "DESC"]],
    });

    // Group by year
    const groupedByYear = {};
    facultyPublications.forEach((fp) => {
      const year = fp.year || "No Year";
      if (!groupedByYear[year]) {
        groupedByYear[year] = [];
      }
      groupedByYear[year].push({ facultyPublications_id: fp.facultyPublications_id });
    });

    RESPONSE.Success.Message = "Faculty Publications grouped by year retrieved successfully.";
    RESPONSE.Success.data = groupedByYear;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching faculty publications by year:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch faculty publications by year.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};
