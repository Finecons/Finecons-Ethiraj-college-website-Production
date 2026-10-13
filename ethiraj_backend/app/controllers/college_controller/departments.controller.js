const db = require("../../models");
const Department = db.departments;
const Academic = db.academics;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const { Op, Sequelize } = require("sequelize");



// ===================================================
// 1️⃣ Add Department
// ===================================================
exports.addDepartment = async (req, res) => {
  try {
    const {
      academic_id,
      department_name,
      description,
      image_url,
      additional_data,
    } = req.body;

    if (!academic_id || !department_name) {
      RESPONSE.Failure.Message =
        "academic_id and department_name are required.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    // Verify that academic_id exists and is active
    const academicExists = await Academic.findOne({
      where: { academic_id, delete_status: 0 },
    });

    if (!academicExists) {
      RESPONSE.Failure.Message = "Invalid or inactive academic_id.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    // Check for duplicate
    const existingDept = await Department.findOne({
      where: { academic_id, department_name, delete_status: 0 },
    });

    if (existingDept) {
      RESPONSE.Failure.Message = `Department "${department_name}" already exists under this academic.`;
      return res.status(StatusCode.CONFLICT.code).send(RESPONSE.Failure);
    }

    const newDept = await Department.create({
      academic_id,
      department_name,
      description,
      image_url,
      additional_data: JSON.stringify(additional_data) || JSON.stringify([]),
    });

    RESPONSE.Success.Message = "Department added successfully.";
    RESPONSE.Success.data = [{ department_id: newDept.department_id }];
    return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error adding Department:", error);
    RESPONSE.Failure.Message = error.message || "Failed to add Department.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===================================================
// 2️⃣ Get All Departments
// ===================================================
exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll({
      where: { delete_status: 0 },
      include: [
        {
          model: Academic,
          as: "academic",
          attributes: ["academic_id", "academic_name"],
          required: false,
        },
      ],
      order: [["department_id", "ASC"]],
    });

    // Parse additional_data field
    const parsedDepartments = departments.map((dept) => ({
      ...dept.toJSON(),
      additional_data: dept.additional_data
        ? JSON.parse(dept.additional_data)
        : [],
    }));

    RESPONSE.Success.Message = "Departments fetched successfully.";
    RESPONSE.Success.data = parsedDepartments;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching Departments:", error);
    RESPONSE.Failure.Message =
      error.message || "Failed to fetch Departments.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===================================================
// 3️⃣ Get Department by ID
// ===================================================

// exports.getDepartmentById = async (req, res) => {
//   try {
//     const { department_id } = req.params;

//     const dept = await Department.findOne({
//       where: { department_id, delete_status: 0 },
//       include: [
//         {
//           model: Academic,
//           as: "academic",
//           attributes: ["academic_id", "academic_name"],
//           required: false,
//         },
//       ],
//     });

//     if (!dept) {
//       RESPONSE.Failure.Message = "Department not found.";
//       return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
//     }

//     const parsedDept = {
//       ...dept.toJSON(),
//       additional_data: dept.additional_data
//         ? JSON.parse(dept.additional_data)
//         : [],
//     };

//     RESPONSE.Success.Message = "Department fetched successfully.";
//     RESPONSE.Success.data = parsedDept;
//     return res.status(StatusCode.OK.code).send(RESPONSE.Success);
//   } catch (error) {
//     console.error("Error fetching Department by ID:", error);
//     RESPONSE.Failure.Message =
//       error.message || "Failed to fetch Department.";
//     return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
//   }
// };

// before code --- // if department_id == 6, 
// then fetch:Departments with academic_id = 4 
// AND departments with the current department’s academic_id

// exports.getDepartmentById = async (req, res) => {
//   try {
//     const { department_id } = req.params;

//     const dept = await Department.findOne({
//       where: { department_id, delete_status: 0 },
//       include: [
//         {
//           model: Academic,
//           as: "academic",
//           attributes: ["academic_id", "academic_name"],
//           required: false,
//         },

//         {
//           model: db.programs,
//           as: "programs",   // <-- THIS WILL FETCH THE PROGRAMS
//           where: { delete_status: 0 },
//           required: false,
//           attributes: ["program_id", "program_name"],

//           include: [
//             {
//               model: db.programme_levels,
//               as: "programme_level",
//               attributes: ["programme_level_id", "level_name"],
//             },
//             {
//               model: db.funding_types,
//               as: "funding_type",
//               attributes: ["funding_type_id", "type_name"],
//             },
//             {
//               model: db.academics,
//               as: "academic",
//               attributes: ["academic_id", "academic_name"],
//             }
//           ]
//         },
//         {
//           model: db.researches,
//           as: "researches",
//           required: false,
//           where: {
//             delete_status: 0,
//             status: "active",
//             is_important: 1
//           },
//           // include: [
//           // { model: db.faculties, as: "faculty", attributes: ["faculty_id", "staff_name"] },
//           // { model: Program, as: "program", attributes: ["program_id", "program_name"] },
//           // { model: Department, as: "department", attributes: ["department_id", "department_name"] }
//           // ],
//           order: [["research_id", "DESC"]]
//         }
//       ],
//     });

//     if (!dept) {
//       RESPONSE.Failure.Message = "Department not found.";
//       return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
//     }

//     // const parsedDept = {
//     //   ...dept.toJSON(),
//     //   additional_data: dept.additional_data
//     //     ? JSON.parse(dept.additional_data)
//     //     : [],
//     // };

//     // --------------------------------------------------
//     const jsonDept = dept.toJSON();

//     const currentAcademicId = jsonDept.academic?.academic_id;

//     // ================================
//     // 2. Get 3 Random Other Departments
//     // ================================
//     const otherDepartments = await Department.findAll({
//       where: {
//         delete_status: 0,
//         department_id: {
//           [Op.ne]: department_id, // Exclude current department
//         },
//         // Only same academic departments
//         academic_id: currentAcademicId,
//       },

//       limit: 3,

//       // For MySQL
//       order: Sequelize.literal("RAND()"),

//       // For PostgreSQL use:
//       // order: Sequelize.literal("RANDOM()"),

//       include: [
//         {
//           model: db.programs,
//           as: "programs",
//           where: { delete_status: 0 },
//           required: false,
//           attributes: ["program_id", "program_name"],

//           include: [
//             {
//               model: db.funding_types,
//               as: "funding_type",
//               attributes: ["funding_type_id", "type_name"],
//             },
//           ],
//         },
//       ],
//     });


//     if (jsonDept.researches && jsonDept.researches.length > 0) {
//       jsonDept.researches = jsonDept.researches.map((research) => {
//         let parsedData = [];

//         try {
//           parsedData = JSON.parse(research.additional_data || "[]");
//         } catch {
//           parsedData = [];
//         }

//         return {
//           ...research,
//           additional_data: parsedData,
//         };
//       });
//     }

//     // Parse department's own additional_data
//     jsonDept.additional_data = dept.additional_data
//       ? JSON.parse(dept.additional_data)
//       : [];


//     // ================================
//     // 6. Add Other Related Departments
//     // ================================
//     const relatedDepts = otherDepartments.map((d) => d.toJSON());

//     jsonDept.other_related_departments = relatedDepts;

//     RESPONSE.Success.Message = "Department fetched successfully.";
//     // RESPONSE.Success.data = parsedDept;
//     RESPONSE.Success.data = jsonDept
//     return res.status(StatusCode.OK.code).send(RESPONSE.Success);
//   } catch (error) {
//     console.error("Error fetching Department by ID:", error);
//     RESPONSE.Failure.Message = error.message || "Failed to fetch Department.";
//     return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
//   }
// };


exports.getDepartmentById = async (req, res) => {
  try {
    const { department_id } = req.params;

    const dept = await Department.findOne({
      where: { department_id, delete_status: 0 },
      include: [
        {
          model: Academic,
          as: "academic",
          attributes: ["academic_id", "academic_name"],
          required: false,
        },

        {
          model: db.programs,
          as: "programs",   // <-- THIS WILL FETCH THE PROGRAMS
          where: { delete_status: 0 },
          required: false,
          attributes: ["program_id", "program_name"],

          include: [
            {
              model: db.programme_levels,
              as: "programme_level",
              attributes: ["programme_level_id", "level_name"],
            },
            {
              model: db.funding_types,
              as: "funding_type",
              attributes: ["funding_type_id", "type_name"],
            },
            {
              model: db.academics,
              as: "academic",
              attributes: ["academic_id", "academic_name"],
            }
          ]
        },
        {
          model: db.researches,
          as: "researches",
          required: false,
          where: {
            delete_status: 0,
            status: "active",
            is_important: 1
          },
          // include: [
          // { model: db.faculties, as: "faculty", attributes: ["faculty_id", "staff_name"] },
          // { model: Program, as: "program", attributes: ["program_id", "program_name"] },
          // { model: Department, as: "department", attributes: ["department_id", "department_name"] }
          // ],
          order: [["research_id", "DESC"]]
        }
      ],
    });

    if (!dept) {
      RESPONSE.Failure.Message = "Department not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    // const parsedDept = {
    //   ...dept.toJSON(),
    //   additional_data: dept.additional_data
    //     ? JSON.parse(dept.additional_data)
    //     : [],
    // };

    // --------------------------------------------------
    const jsonDept = dept.toJSON();

    const currentAcademicId = jsonDept.academic?.academic_id;


    // ================================
    // 2. Dynamic Academic Filter Logic
    // ================================
    let academicIds = [currentAcademicId];

    // Special condition
    if (parseInt(department_id) === 6) {
      academicIds.push(4);
    }

    // ================================
    // 3. Get 3 Random Other Departments
    // ================================
    const otherDepartments = await Department.findAll({
      where: {
        delete_status: 0,
        department_id: {
          [Op.ne]: department_id, // Exclude current department
        },
        
        academic_id: {
          [Op.in]: academicIds,
        },
      },

      limit: 2,

      // For MySQL
      order: Sequelize.literal("RAND()"),

      // For PostgreSQL use:
      // order: Sequelize.literal("RANDOM()"),

      include: [
        {
          model: db.programs,
          as: "programs",
          where: { delete_status: 0 },
          required: false,
          attributes: ["program_id", "program_name"],

          include: [
            {
              model: db.funding_types,
              as: "funding_type",
              attributes: ["funding_type_id", "type_name"],
            },
          ],
        },
      ],
    });


    if (jsonDept.researches && jsonDept.researches.length > 0) {
      jsonDept.researches = jsonDept.researches.map((research) => {
        let parsedData = [];

        try {
          parsedData = JSON.parse(research.additional_data || "[]");
        } catch {
          parsedData = [];
        }

        return {
          ...research,
          additional_data: parsedData,
        };
      });
    }

    // Parse department's own additional_data
    jsonDept.additional_data = dept.additional_data
      ? JSON.parse(dept.additional_data)
      : [];


    // ================================
    // 6. Add Other Related Departments
    // ================================
    const relatedDepts = otherDepartments.map((d) => d.toJSON());

    jsonDept.other_related_departments = relatedDepts;

    RESPONSE.Success.Message = "Department fetched successfully.";
    // RESPONSE.Success.data = parsedDept;
    RESPONSE.Success.data = jsonDept
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching Department by ID:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch Department.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===================================================
// 4️⃣ Update Department
// ===================================================
exports.updateDepartment = async (req, res) => {
  try {
    const { department_id } = req.params;
    const {
      academic_id,
      department_name,
      description,
      image_url,
      additional_data,
    } = req.body;

    const dept = await Department.findOne({
      where: { department_id, delete_status: 0 },
    });

    if (!dept) {
      RESPONSE.Failure.Message = "Department not found or deleted.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    await Department.update(
      {
        academic_id,
        department_name,
        description,
        image_url,
        additional_data: JSON.stringify(
          additional_data ?? JSON.parse(dept.additional_data || "[]")
        ),
      },
      { where: { department_id } }
    );

    RESPONSE.Success.Message = "Department updated successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error updating Department:", error);
    RESPONSE.Failure.Message =
      error.message || "Failed to update Department.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===================================================
// 5️⃣ Soft Delete Department
// ===================================================
exports.deleteDepartment = async (req, res) => {
  try {
    const { department_id } = req.params;

    const dept = await Department.findOne({ where: { department_id } });

    if (!dept) {
      RESPONSE.Failure.Message = "Department not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    if (dept.delete_status === 1) {
      RESPONSE.Failure.Message = "Department is already deleted.";
      return res.status(StatusCode.OK.code).send(RESPONSE.Failure);
    }

    await Department.update(
      { delete_status: 1, deletedAt: new Date() },
      { where: { department_id } }
    );

    RESPONSE.Success.Message = "Department soft deleted successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error deleting Department:", error);
    RESPONSE.Failure.Message =
      error.message || "Failed to delete Department.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===================================================
// 6️⃣ Restore Department
// ===================================================
exports.restoreDepartment = async (req, res) => {
  try {
    const { department_id } = req.params;

    const dept = await Department.findOne({
      where: { department_id, delete_status: 1 },
    });

    if (!dept) {
      RESPONSE.Failure.Message =
        "Department not found or not soft-deleted.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    await Department.update(
      { delete_status: 0, deletedAt: null },
      { where: { department_id } }
    );

    RESPONSE.Success.Message = "Department restored successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error restoring Department:", error);
    RESPONSE.Failure.Message =
      error.message || "Failed to restore Department.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};
