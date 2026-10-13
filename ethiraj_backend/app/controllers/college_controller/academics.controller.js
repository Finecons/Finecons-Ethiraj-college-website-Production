const db = require("../../models");
const Academic = db.academics;
const Department = db.departments; // optional for future includes
const Programs = db.programs;
const FundingType = db.funding_types;
const ProgrammeLevel = db.programme_levels
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");

// Program,FundingType,ProgrammeLevel,Department


// ===============================================
// 1️⃣ Add New Academic
// ===============================================
exports.addAcademic = async (req, res) => {
  try {
    const { academic_name, description, image_url } = req.body;

    if (!academic_name) {
      RESPONSE.Failure.Message = "Academic name is required.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    const existingAcademic = await Academic.findOne({
      where: { academic_name, delete_status: 0 },
    });

    if (existingAcademic) {
      RESPONSE.Failure.Message = `Academic "${academic_name}" already exists.`;
      return res.status(StatusCode.CONFLICT.code).send(RESPONSE.Failure);
    }

    const newAcademic = await Academic.create({
      academic_name,
      description,
      image_url,
    });

    RESPONSE.Success.Message = "Academic added successfully.";
    RESPONSE.Success.data = [{ academic_id: newAcademic.academic_id }];
    return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error adding Academic:", error);
    RESPONSE.Failure.Message = error.message || "Failed to add Academic.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===============================================
// 2️⃣ Get All Academics (With Departments if needed)
// ===============================================
exports.getAllAcademics = async (req, res) => {
  try {
    const academics = await Academic.findAll({
      where: { delete_status: 0 },
      include: [
        {
          model: Department,
          as: "departments",
          required: false,
          where: { delete_status: 0 },
          attributes: ["department_id", "department_name"],
        },
      ],
      order: [["academic_id", "ASC"]],
    });

    RESPONSE.Success.Message = "Academics fetched successfully.";
    RESPONSE.Success.data = academics;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching Academics:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch Academics.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===============================================
// 3️⃣ Get Academic by ID
// ===============================================
exports.getAcademicById = async (req, res) => {
  try {
    const { academic_id } = req.params;

    const academic = await Academic.findOne({
      where: { academic_id, delete_status: 0 },
      include: [
        {
          model: Department,
          as: "departments",
          required: false,
          where: { delete_status: 0 },
          attributes: ["department_id", "department_name"],
        },
      ],
    });

    if (!academic) {
      RESPONSE.Failure.Message = "Academic not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    RESPONSE.Success.Message = "Academic fetched successfully.";
    RESPONSE.Success.data = academic;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching Academic by ID:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch Academic.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===============================================
// 4️⃣ Update Academic
// ===============================================
exports.updateAcademic = async (req, res) => {
  try {
    const { academic_id } = req.params;
    const { academic_name, description, image_url } = req.body;

    const academic = await Academic.findOne({
      where: { academic_id, delete_status: 0 },
    });

    if (!academic) {
      RESPONSE.Failure.Message = "Academic not found or already deleted.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    await Academic.update(
      { academic_name, description, image_url },
      { where: { academic_id } }
    );

    RESPONSE.Success.Message = "Academic updated successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error updating Academic:", error);
    RESPONSE.Failure.Message = error.message || "Failed to update Academic.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===============================================
// 5️⃣ Soft Delete Academic
// ===============================================
exports.deleteAcademic = async (req, res) => {
  try {
    const { academic_id } = req.params;

    const academic = await Academic.findOne({ where: { academic_id } });
    if (!academic) {
      RESPONSE.Failure.Message = "Academic not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    if (academic.delete_status === 1) {
      RESPONSE.Failure.Message = "Academic is already deleted.";
      return res.status(StatusCode.OK.code).send(RESPONSE.Failure);
    }

    await Academic.update(
      { delete_status: 1, deletedAt: new Date() },
      { where: { academic_id } }
    );

    RESPONSE.Success.Message = "Academic soft deleted successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error deleting Academic:", error);
    RESPONSE.Failure.Message = error.message || "Failed to delete Academic.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===============================================
// 6️⃣ Restore Deleted Academic
// ===============================================
exports.restoreAcademic = async (req, res) => {
  try {
    const { academic_id } = req.params;

    const academic = await Academic.findOne({
      where: { academic_id, delete_status: 1 },
    });

    if (!academic) {
      RESPONSE.Failure.Message =
        "Academic not found or is not soft-deleted.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    await Academic.update(
      { delete_status: 0, deletedAt: null },
      { where: { academic_id } }
    );

    RESPONSE.Success.Message = "Academic restored successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error restoring Academic:", error);
    RESPONSE.Failure.Message = error.message || "Failed to restore Academic.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};


exports.getAcademicsHierarchyByProgrammeLevel = async (req, res) => {
  try {
    const programme_level_id = req.params.programme_level_id;

    if (!programme_level_id) {
      return res.status(400).json({ status: 'Failure', message: 'programme_level_id is required.' });
    }

    const academics = await Academic.findAll({
      attributes: ['academic_id', 'academic_name'], // Specify your desired columns for academics
      where: { delete_status: 0 },
      include: [
        {
          model: Department,
          as: "departments",
          attributes: ['department_id', 'department_name'], // Specify columns for departments
          where: { delete_status: 0 },
          required: false,
          include: [
            {
              model: Programs,
              as: "programs",
              attributes: ['program_id', 'program_name', 'programme_level_id'], // Specify columns for program
              where: { programme_level_id: programme_level_id, delete_status: 0 },
              required: false,
              include: [
                {
                  model: FundingType,  // Include funding_types model here
                  as: 'funding_type',
                  attributes: ['type_name'],  // Select only the type_name column
                  where: { delete_status: 0 },
                  required: false
                }
              ]
            }
          ]
        }
      ]
    });

    return res.status(200).json({
      status: 'Success',
      message: 'Fetched all academics with departments and filtered programs.',
      data: academics
    });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ status: 'Failure', message: error.message });
  }
};



exports.getAllAcademicsWithAllDetails = async (req, res) => {
  try {
    const academics = await Academic.findAll({
      where: { delete_status: 0 },
      attributes: [
        "academic_id",
        "academic_name",
      ],
      include: [
        {
          model: Department,
          as: "departments",
          required: false,
          where: { delete_status: 0 },
          attributes: ["department_id", "department_name"],

          include: [
            {
              model: Programs,
              as: "programs",
              required: false,
              where: { delete_status: 0 },
              attributes: [
                "program_id",
                "program_name",
              ],

              include: [
                {
                  model: ProgrammeLevel,
                  as: "programme_level",
                  required: false,
                  attributes: [
                    "programme_level_id",
                    "level_name"
                  ]
                },
                {
                  model: FundingType,
                  as: "funding_type",
                  required: false,
                  attributes: [
                    "funding_type_id",
                    "type_name"
                  ]
                }
              ]
            }
          ]
        }
      ],

      order: [["academic_id", "ASC"]],
    });

    RESPONSE.Success.Message = "Academics fetched successfully.";
    RESPONSE.Success.data = academics;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);

  } catch (error) {
    console.error("Error fetching Academics:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch Academics.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

