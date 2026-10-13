const db = require("../../models");
const Program = db.programs;
const Academic = db.academics;
const Department = db.departments;
const ProgrammeLevel = db.programme_levels;
const FundingType = db.funding_types;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");
const { Op, Sequelize } = require("sequelize");


// ✅ Add Program
exports.addProgram = async (req, res) => {
    try {
        const {
            program_name,
            academic_id,
            department_id,
            programme_level_id,
            funding_type_id,
            description,
            image_url,
            additional_data,
        } = req.body;

        if (!program_name || !academic_id || !department_id || !programme_level_id || !funding_type_id) {
            return res.status(StatusCode.BAD_REQUEST.code).send({
                ...RESPONSE.Failure,
                Message: "program_name, academic_id, department_id, programme_level_id, and funding_type_id are required.",
            });
        }

        // 🔍 Check for duplicate
        const existingProgram = await Program.findOne({
            where: { program_name, department_id, funding_type_id, programme_level_id, academic_id, delete_status: 0 },
        });

        if (existingProgram) {
            return res.status(StatusCode.CONFLICT.code).send({
                ...RESPONSE.Failure,
                Message: `Program "${program_name}" already exists under this department and academic.`,
            });
        }

        // 🧩 Handle additional_data JSON safely
        const formattedAdditionalData = additional_data ? JSON.stringify(additional_data) : JSON.stringify([]);

        const newProgram = await Program.create({
            program_name,
            academic_id,
            department_id,
            programme_level_id,
            funding_type_id,
            description,
            image_url,
            additional_data: formattedAdditionalData,
        });

        RESPONSE.Success.Message = "Program created successfully.";
        RESPONSE.Success.data = [{ program_id: newProgram.program_id }];
        return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error adding program:", error);
        RESPONSE.Failure.Message = error.message || "Failed to add program.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// ✅ Get All Programs
exports.getAllPrograms = async (req, res) => {
    try {
        const programs = await Program.findAll({
            where: { delete_status: 0 },
            include: [
                { model: Academic, as: "academic", attributes: ["academic_id", "academic_name"] },
                { model: Department, as: "department", attributes: ["department_id", "department_name"] },
                { model: ProgrammeLevel, as: "programme_level", attributes: ["programme_level_id", "level_name"] },
                { model: FundingType, as: "funding_type", attributes: ["funding_type_id", "type_name"] },
            ],
        });

        // Parse additional_data for all programs
        const parsedPrograms = programs.map((p) => ({
            ...p.toJSON(),
            additional_data: p.additional_data ? JSON.parse(p.additional_data) : [],
        }));

        RESPONSE.Success.Message = "Programs fetched successfully.";
        RESPONSE.Success.data = parsedPrograms;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching programs:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch programs.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// ✅ Get Program by ID
// exports.getProgramById = async (req, res) => {
//     try {
//         const { program_id } = req.params;

//         const program = await Program.findOne({
//             where: { program_id, delete_status: 0 },
//             include: [
//                 { model: Academic, as: "academic", attributes: ["academic_id", "academic_name"] },
//                 { model: Department, as: "department", attributes: ["department_id", "department_name"] },
//                 { model: ProgrammeLevel, as: "programme_level", attributes: ["programme_level_id", "level_name"] },
//                 { model: FundingType, as: "funding_type", attributes: ["funding_type_id", "type_name"] },
//             ],
//         });

//         if (!program) {
//             RESPONSE.Failure.Message = "Program not found.";
//             return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
//         }

//         const parsedProgram = {
//             ...program.toJSON(),
//             additional_data: program.additional_data ? JSON.parse(program.additional_data) : [],
//         };

//         RESPONSE.Success.Message = "Program retrieved successfully.";
//         RESPONSE.Success.data = parsedProgram;
//         return res.status(StatusCode.OK.code).send(RESPONSE.Success);
//     } catch (error) {
//         console.error("Error fetching program by ID:", error);
//         RESPONSE.Failure.Message = error.message || "Failed to fetch program.";
//         return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
//     }
// };



// before code  ---// If program’s department_id == 6
// → fetch programs where:

// academic_id = 4

// AND current program’s academic_id

// 👉 Otherwise:

// normal flow (same academic only)
// exports.getProgramById = async (req, res) => {
//     try {
//         const { program_id } = req.params;

//         // ================================
//         // 1. Get Main Program
//         // ================================
//         const program = await Program.findOne({
//             where: {
//                 program_id,
//                 delete_status: 0,
//             },

//             include: [
//                 {
//                     model: Academic,
//                     as: "academic",
//                     attributes: ["academic_id", "academic_name"],
//                 },

//                 {
//                     model: Department,
//                     as: "department",
//                     attributes: ["department_id", "department_name"],
//                 },

//                 {
//                     model: ProgrammeLevel,
//                     as: "programme_level",
//                     attributes: ["programme_level_id", "level_name"],
//                 },

//                 {
//                     model: FundingType,
//                     as: "funding_type",
//                     attributes: ["funding_type_id", "type_name"],
//                 },
//             ],
//         });

//         if (!program) {
//             RESPONSE.Failure.Message = "Program not found.";
//             return res
//                 .status(StatusCode.NOT_FOUND.code)
//                 .send(RESPONSE.Failure);
//         }

//         // ================================
//         // 2. Convert to JSON
//         // ================================
//         const jsonProgram = program.toJSON();

//         // Get current academic id
//         const currentAcademicId = jsonProgram.academic?.academic_id;
//         const currentProgrammeLevelId = jsonProgram.programme_level?.programme_level_id;
//         const currentFundingTypeId = jsonProgram.funding_type?.funding_type_id;

//         // ================================
//         // 3. Get Other Related Programs
//         // ================================
//         const otherPrograms = currentAcademicId
//             ? await Program.findAll({
//                 where: {
//                     delete_status: 0,

//                     program_id: {
//                         [Op.ne]: program_id, // Exclude current
//                     },

//                     academic_id: currentAcademicId, // Same academic
//                     programme_level_id: currentProgrammeLevelId,
//                     funding_type_id: currentFundingTypeId,
//                 },

//                 limit: 3,

//                 // MySQL
//                 order: db.Sequelize.literal("RAND()"),

//                 // PostgreSQL
//                 // order: db.Sequelize.literal("RANDOM()"),

//                 include: [
//                     {
//                         model: Department,
//                         as: "department",
//                         attributes: ["department_id", "department_name"],
//                     },

//                     {
//                         model: FundingType,
//                         as: "funding_type",
//                         attributes: ["funding_type_id", "type_name"],
//                     },
//                 ],
//             })
//             : [];

//         // ================================
//         // 4. Parse additional_data
//         // ================================
//         try {
//             jsonProgram.additional_data = jsonProgram.additional_data
//                 ? JSON.parse(jsonProgram.additional_data)
//                 : [];
//         } catch {
//             jsonProgram.additional_data = [];
//         }

//         // ================================
//         // 5. Add Related Programs
//         // ================================
//         jsonProgram.other_related_programs = otherPrograms.map((p) =>
//             p.toJSON()
//         );

//         // ================================
//         // 6. Send Response
//         // ================================
//         RESPONSE.Success.Message = "Program retrieved successfully.";
//         RESPONSE.Success.data = jsonProgram;

//         return res
//             .status(StatusCode.OK.code)
//             .send(RESPONSE.Success);

//     } catch (error) {
//         console.error("Error fetching program by ID:", error);

//         RESPONSE.Failure.Message =
//             error.message || "Failed to fetch program.";

//         return res
//             .status(StatusCode.SERVER_ERROR.code)
//             .send(RESPONSE.Failure);
//     }
// };

exports.getProgramById = async (req, res) => {
    try {
        const { program_id } = req.params;

        // ================================
        // 1. Get Main Program
        // ================================
        const program = await Program.findOne({
            where: {
                program_id,
                delete_status: 0,
            },

            include: [
                {
                    model: Academic,
                    as: "academic",
                    attributes: ["academic_id", "academic_name"],
                },

                {
                    model: Department,
                    as: "department",
                    attributes: ["department_id", "department_name"],
                },

                {
                    model: ProgrammeLevel,
                    as: "programme_level",
                    attributes: ["programme_level_id", "level_name"],
                },

                {
                    model: FundingType,
                    as: "funding_type",
                    attributes: ["funding_type_id", "type_name"],
                },
            ],
        });

        if (!program) {
            RESPONSE.Failure.Message = "Program not found.";
            return res
                .status(StatusCode.NOT_FOUND.code)
                .send(RESPONSE.Failure);
        }

        // ================================
        // 2. Convert to JSON
        // ================================
        const jsonProgram = program.toJSON();

        // Get current academic id
        const currentAcademicId = jsonProgram.academic?.academic_id;
        const currentProgrammeLevelId = jsonProgram.programme_level?.programme_level_id;
        const currentFundingTypeId = jsonProgram.funding_type?.funding_type_id;
        const currentDepartmentId = jsonProgram.department?.department_id;


        // ================================
        // 3. Dynamic Academic Logic
        // ================================
        let academicIds = [currentAcademicId];

        // ✅ Special condition: if program's department is 6
        if (parseInt(currentDepartmentId) === 6) {
            academicIds.push(4);
        }


        // ================================
        // 4. Get Other Related Programs
        // ================================
        const otherPrograms = currentAcademicId
            ? await Program.findAll({
                where: {
                    delete_status: 0,

                    program_id: {
                        [Op.ne]: program_id, // Exclude current
                    },

                    academic_id: {
                        [Op.in]: academicIds,   // ✅ updated logic
                    },
                    programme_level_id: currentProgrammeLevelId,
                    funding_type_id: currentFundingTypeId,
                },

                limit: 3,

                // MySQL
                order: db.Sequelize.literal("RAND()"),

                // PostgreSQL
                // order: db.Sequelize.literal("RANDOM()"),

                include: [
                    {
                        model: Department,
                        as: "department",
                        attributes: ["department_id", "department_name"],
                    },

                    {
                        model: FundingType,
                        as: "funding_type",
                        attributes: ["funding_type_id", "type_name"],
                    },
                ],
            })
            : [];

        // ================================
        // 5. Parse additional_data
        // ================================
        try {
            jsonProgram.additional_data = jsonProgram.additional_data
                ? JSON.parse(jsonProgram.additional_data)
                : [];
        } catch {
            jsonProgram.additional_data = [];
        }

        // ================================
        // 6. Add Related Programs
        // ================================
        jsonProgram.other_related_programs = otherPrograms.map((p) =>
            p.toJSON()
        );

        // ================================
        // 7. Send Response
        // ================================
        RESPONSE.Success.Message = "Program retrieved successfully.";
        RESPONSE.Success.data = jsonProgram;

        return res
            .status(StatusCode.OK.code)
            .send(RESPONSE.Success);

    } catch (error) {
        console.error("Error fetching program by ID:", error);

        RESPONSE.Failure.Message =
            error.message || "Failed to fetch program.";

        return res
            .status(StatusCode.SERVER_ERROR.code)
            .send(RESPONSE.Failure);
    }
};

// ✅ Update Program
exports.updateProgram = async (req, res) => {
    try {
        const { program_id } = req.params;
        const { program_name, academic_id, department_id, programme_level_id, funding_type_id, description, image_url, additional_data } = req.body;

        const program = await Program.findOne({
            where: { program_id, delete_status: 0 },
        });

        if (!program) {
            RESPONSE.Failure.Message = "Program not found or is deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        // 🧩 Merge additional_data (if provided)
        const updatedAdditionalData =
            additional_data !== undefined
                ? JSON.stringify(additional_data)
                : program.additional_data;

        await Program.update(
            {
                program_name,
                academic_id,
                department_id,
                programme_level_id,
                funding_type_id,
                description,
                image_url,
                additional_data: updatedAdditionalData,
            },
            { where: { program_id } }
        );

        RESPONSE.Success.Message = "Program updated successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error updating program:", error);
        RESPONSE.Failure.Message = error.message || "Failed to update program.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// ✅ Soft Delete Program
exports.deleteProgram = async (req, res) => {
    try {
        const { program_id } = req.params;

        const program = await Program.findOne({ where: { program_id } });
        if (!program) {
            RESPONSE.Failure.Message = "Program not found.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        if (program.delete_status === 1) {
            RESPONSE.Failure.Message = "Program is already deleted.";
            return res.status(StatusCode.OK.code).send(RESPONSE.Failure);
        }

        await Program.update(
            { delete_status: 1, deletedAt: new Date() },
            { where: { program_id } }
        );

        RESPONSE.Success.Message = "Program soft deleted successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error deleting program:", error);
        RESPONSE.Failure.Message = error.message || "Failed to delete program.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// ✅ Restore Program
exports.restoreProgram = async (req, res) => {
    try {
        const { program_id } = req.params;

        const program = await Program.findOne({
            where: { program_id, delete_status: 1 },
        });

        if (!program) {
            RESPONSE.Failure.Message = "Program not found or not soft-deleted.";
            return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
        }

        await Program.update(
            { delete_status: 0, deletedAt: null },
            { where: { program_id } }
        );

        RESPONSE.Success.Message = "Program restored successfully.";
        RESPONSE.Success.data = [];
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error restoring program:", error);
        RESPONSE.Failure.Message = error.message || "Failed to restore program.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};



// exports.getProgramsByDepartment = async (req, res) => {
//   try {
//     const department_id = req.params.department_id;

//     if (!department_id) {
//       return res.status(400).json({ status: 'Failure', message: 'department_id is required.' });
//     }

//     const programs = await Program.findAll({
//       where: {
//         department_id: department_id,
//         delete_status: 0 // only active programs
//       },
//       include: [
//         {
//           model: db.academics,
//           as: 'academic',
//           attributes: ['academic_id', 'academic_name']
//         },
//         {
//           model: db.departments,
//           as: 'department',
//           attributes: ['department_id', 'department_name','image_url','additional_data']
//         },
//         {
//           model: db.programme_levels,
//           as: 'programme_level',
//           attributes: ['programme_level_id', 'level_name']
//         },
//         {
//           model: db.funding_types,
//           as: 'funding_type',
//           attributes: ['funding_type_id', 'type_name']
//         }
//       ],
//     //   attributes: ['program_id', 'program_name', 'description']
//     });

//     return res.status(200).json({
//       status: 'Success',
//       message: `Programs for department ID ${department_id} retrieved successfully.`,
//       data: programs
//     });

//   } catch (error) {
//     console.error('API Error:', error);
//     return res.status(500).json({ status: 'Failure', message: error.message });
//   }
// };

exports.getProgramsByDepartment = async (req, res) => {
    try {
        const department_id = req.params.department_id;

        if (!department_id) {
            return res.status(400).json({ status: 'Failure', message: 'department_id is required.' });
        }

        // First fetch the department details including additional_data parsed
        const department = await db.departments.findOne({
            where: { department_id: department_id, delete_status: 0 },
            attributes: ['department_id', 'department_name', 'image_url', 'additional_data']
        });

        if (!department) {
            return res.status(404).json({ status: 'Failure', message: 'Department not found' });
        }

        // Parse additional_data JSON string if exists
        let departmentData = department.toJSON();
        departmentData.additional_data = departmentData.additional_data ? JSON.parse(departmentData.additional_data) : [];

        // Fetch all programs for the department
        const programs = await Program.findAll({
            where: { department_id: department_id, delete_status: 0 },
            include: [
                {
                    model: db.academics,
                    as: 'academic',
                    attributes: ['academic_id', 'academic_name']
                },
                {
                    model: db.departments,
                    as: 'department',
                    attributes: ['department_id', 'department_name']
                },
                {
                    model: db.programme_levels,
                    as: 'programme_level',
                    attributes: ['programme_level_id', 'level_name']
                },
                {
                    model: db.funding_types,
                    as: 'funding_type',
                    attributes: ['funding_type_id', 'type_name']
                }
            ],
            attributes: ['program_id', 'program_name']
        });

        // // Parse additional_data JSON string for programs
        // const parsedPrograms = programs.map(p => {
        //     const programObj = p.toJSON();
        //     programObj.additional_data = programObj.additional_data ? JSON.parse(programObj.additional_data) : [];
        //     return programObj;
        // });

        return res.status(200).json({
            status: 'Success',
            message: `Department and programs for department ID ${department_id} retrieved successfully.`,
            data: {
                department: departmentData,
                programs: programs // directly sending programs without JSON parse manipulation
            }
        });
    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ status: 'Failure', message: error.message });
    }
};

const getProgramsByLevelAndFunding = async (res, levelName, fundingTypeName, successMessage) => {
    try {
        const programs = await Program.findAll({
            where: { delete_status: 0 },
            include: [
                {
                    model: Academic,
                    as: "academic",
                    attributes: ["academic_id", "academic_name"],
                },
                {
                    model: Department,
                    as: "department",
                    attributes: ["department_id", "department_name"],
                },
                {
                    model: ProgrammeLevel,
                    as: "programme_level",
                    attributes: ["programme_level_id", "level_name"],
                    where: {
                        level_name: levelName,
                        delete_status: 0,
                    },
                },
                {
                    model: FundingType,
                    as: "funding_type",
                    attributes: ["funding_type_id", "type_name"],
                    where: {
                        type_name: fundingTypeName,
                        delete_status: 0,
                    },
                },
            ],
            order: [["program_name", "ASC"]],
        });

        const parsedPrograms = programs.map((program) => ({
            ...program.toJSON(),
            additional_data: program.additional_data ? JSON.parse(program.additional_data) : [],
        }));

        RESPONSE.Success.Message = successMessage;
        RESPONSE.Success.data = parsedPrograms;
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching programs by level and funding type:", error);
        RESPONSE.Failure.Message = error.message || "Failed to fetch programs.";
        return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
    }
};

// 1) Get all programs of Undergraduate Aided
exports.getUndergraduateAidedPrograms = async (req, res) => {
    return getProgramsByLevelAndFunding(
        res,
        "Undergraduate",
        "Aided",
        "Undergraduate Aided programs fetched successfully."
    );
};

// 2) Get all programs of Undergraduate Self-Supporting
exports.getUndergraduateSelfSupportingPrograms = async (req, res) => {
    return getProgramsByLevelAndFunding(
        res,
        "Undergraduate",
        "Self-Supporting",
        "Undergraduate Self-Supporting programs fetched successfully."
    );
};

// 3) Get all programs of Postgraduate Aided
exports.getPostgraduateAidedPrograms = async (req, res) => {
    return getProgramsByLevelAndFunding(
        res,
        "Postgraduate",
        "Aided",
        "Postgraduate Aided programs fetched successfully."
    );
};

// 4) Get all programs of Postgraduate Self-Supporting
exports.getPostgraduateSelfSupportingPrograms = async (req, res) => {
    return getProgramsByLevelAndFunding(
        res,
        "Postgraduate",
        "Self-Supporting",
        "Postgraduate Self-Supporting programs fetched successfully."
    );
};
