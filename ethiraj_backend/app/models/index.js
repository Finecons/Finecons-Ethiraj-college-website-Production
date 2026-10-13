const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
// const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  timezone: dbConfig.timezone, // Set the timezone here
  define: {
    timestamps: false, //true: createdAt & updatedAt
    freezeTableName: true, //To avoid plurals while creating table name
  },
  operatorsAliases: 0,
  logging: false,
  // logging: process.env.NODE_ENV === 'development' ? console.log : false, // Enable logging in development
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
// db.tutorials = require("./tutorial.model.js")(sequelize, DataTypes);


db.otp = require("./other_models/otp.model.js")(sequelize, Sequelize);
db.homeSections = require("./website_models/homeSection.model.js")(sequelize, Sequelize);
db.aboutUsSections = require("./website_models/aboutUsSection.model.js")(sequelize, Sequelize);
db.academicsSections = require("./website_models/academicsSection.model.js")(sequelize, Sequelize);

db.iqacSections = require("./website_models/iqacSection.model.js")(sequelize, Sequelize);
db.examinations = require("./website_models/examinations.model.js")(sequelize, Sequelize);
db.meritLists = require("./website_models/meritList.model.js")(sequelize, Sequelize);
db.admissionPolicies = require("./website_models/admissionPolicy.model.js")(sequelize, Sequelize);
db.buttons = require("./website_models/button.model.js")(sequelize, Sequelize);
db.marquees = require("./website_models/marquee.model.js")(sequelize, Sequelize);
db.researchSections = require("./website_models/researchSection.model.js")(sequelize, Sequelize);

db.campusLifeSections = require("./website_models/campusLifeSection.model.js")(sequelize, Sequelize);

db.academics = require("./college_models/academics.model.js")(sequelize, Sequelize);
db.departments = require("./college_models/departments.model.js")(sequelize, Sequelize);
db.programme_levels = require("./college_models/programmeLevel.model.js")(sequelize, Sequelize);
db.funding_types = require("./college_models/fundingType.model.js")(sequelize, Sequelize);
db.programs = require("./college_models/program.model.js")(sequelize, Sequelize);

db.faculties = require("./college_models/faculty.model.js")(sequelize, Sequelize);
db.researches = require("./college_models/research.model.js")(sequelize, Sequelize);
db.researchHighlights = require("./college_models/researchHighlights.model.js")(sequelize, Sequelize);
db.studentPublications = require("./college_models/studentPublications.model.js")(sequelize, Sequelize);
db.facultyPublications = require("./college_models/facultyPublications.model.js")(sequelize, Sequelize);

db.newsEvent = require("./college_models/newsEvent.model.js")(sequelize, Sequelize);

// db.stakeNowSections = require("./website_models/stakeNowSection.model.js")(sequelize, Sequelize);
// db.referralSections = require("./website_models/referralSection.model.js")(sequelize, Sequelize);
// db.blogSections = require("./website_models/blogSection.model.js")(sequelize, Sequelize);
// db.aboutUsSections = require("./website_models/aboutUsSection.model.js")(sequelize, Sequelize);
// db.contactUsSections = require("./website_models/contactUsSection.model.js")(sequelize, Sequelize);
db.contactUsForms = require("./website_models/contactUsForm.model.js")(sequelize, Sequelize);

db.Role = require("./auth_users_models/role.model.js")(sequelize, Sequelize);
db.AuthUser = require("./auth_users_models/auth_user.model.js")(sequelize, Sequelize); // renamed model
// db.RolePermission = require("./auth_users_models/rolePermission.model.js")(sequelize, Sequelize); // renamed model

db.LinkedinToken = require("./LinkedinToken_models/LinkedinToken.model.js")(sequelize, Sequelize);


// Establish relationships (associations)


// Associations for authUser and role and All website sections

// db.homeSections.belongsTo(db.AuthUser, { foreignKey: "created_by_user_id", as: "creator" });
// db.homeSections.belongsTo(db.Role, { foreignKey: "created_by_user_role_id", as: "creatorRole" });

// db.stakeNowSections.belongsTo(db.AuthUser, { foreignKey: "created_by_user_id", as: "creator" });
// db.stakeNowSections.belongsTo(db.Role, { foreignKey: "created_by_user_role_id", as: "creatorRole" });

// db.referralSections.belongsTo(db.AuthUser, { foreignKey: "created_by_user_id", as: "creator" });
// db.referralSections.belongsTo(db.Role, { foreignKey: "created_by_user_role_id", as: "creatorRole" });

// db.blogSections.belongsTo(db.AuthUser, { foreignKey: "created_by_user_id", as: "creator" });
// db.blogSections.belongsTo(db.Role, { foreignKey: "created_by_user_role_id", as: "creatorRole" });

// db.aboutUsSections.belongsTo(db.AuthUser, { foreignKey: "created_by_user_id", as: "creator" });
// db.aboutUsSections.belongsTo(db.Role, { foreignKey: "created_by_user_role_id", as: "creatorRole" });

// db.contactUsSections.belongsTo(db.AuthUser, { foreignKey: "created_by_user_id", as: "creator" });
// db.contactUsSections.belongsTo(db.Role, { foreignKey: "created_by_user_role_id", as: "creatorRole" });

// A Role can have many AuthUsers.
db.Role.hasMany(db.AuthUser, {
  foreignKey: "role_id",
  as: "users",
});

// An AuthUser belongs to a Role.
db.AuthUser.belongsTo(db.Role, {
  foreignKey: "role_id",
  as: "role",
});



db.academics.hasMany(db.departments, { foreignKey: "academic_id", as: "departments" });
db.departments.belongsTo(db.academics, { foreignKey: "academic_id", as: "academic" });



db.academics.hasMany(db.programs, { foreignKey: "academic_id", as: "programs" });
db.programs.belongsTo(db.academics, { foreignKey: "academic_id", as: "academic" });

db.departments.hasMany(db.programs, { foreignKey: "department_id", as: "programs" });
db.programs.belongsTo(db.departments, { foreignKey: "department_id", as: "department" });

db.programme_levels.hasMany(db.programs, { foreignKey: "programme_level_id", as: "programs" });
db.programs.belongsTo(db.programme_levels, { foreignKey: "programme_level_id", as: "programme_level" });

db.funding_types.hasMany(db.programs, { foreignKey: "funding_type_id", as: "programs" });
db.programs.belongsTo(db.funding_types, { foreignKey: "funding_type_id", as: "funding_type" });


db.programs.hasMany(db.faculties, { foreignKey: "program_id", as: "faculties", });
db.faculties.belongsTo(db.programs, {foreignKey: "program_id",as: "program",});

db.funding_types.hasMany(db.faculties, {foreignKey: "funding_type_id",as: "faculties",});
db.faculties.belongsTo(db.funding_types, {foreignKey: "funding_type_id",as: "funding_type",});

//  Research Associations

db.faculties.hasMany(db.researches, { foreignKey: "faculty_id", as: "researches" });
db.researches.belongsTo(db.faculties, { foreignKey: "faculty_id", as: "faculty" });

db.programs.hasMany(db.researches, { foreignKey: "program_id", as: "researches" });
db.researches.belongsTo(db.programs, { foreignKey: "program_id", as: "program" });

db.departments.hasMany(db.researches, { foreignKey: "department_id", as: "researches" });
db.researches.belongsTo(db.departments, { foreignKey: "department_id", as: "department" });

// Research Highlights Associations

db.academics.hasMany(db.researchHighlights, { foreignKey: "academic_id", as: "researchHighlights" });
db.researchHighlights.belongsTo(db.academics, { foreignKey: "academic_id", as: "academic" });

db.departments.hasMany(db.researchHighlights, { foreignKey: "department_id", as: "researchHighlights" });
db.researchHighlights.belongsTo(db.departments, { foreignKey: "department_id", as: "department" });

// Student Publications Associations

db.academics.hasMany(db.studentPublications, { foreignKey: "academic_id", as: "studentPublications" });
db.studentPublications.belongsTo(db.academics, { foreignKey: "academic_id", as: "academic" });

db.departments.hasMany(db.studentPublications, { foreignKey: "department_id", as: "studentPublications" });
db.studentPublications.belongsTo(db.departments, { foreignKey: "department_id", as: "department" });

// Faculty Publications Associations

db.academics.hasMany(db.facultyPublications, { foreignKey: "academic_id", as: "facultyPublications" });
db.facultyPublications.belongsTo(db.academics, { foreignKey: "academic_id", as: "academic" });

db.departments.hasMany(db.facultyPublications, { foreignKey: "department_id", as: "facultyPublications" });
db.facultyPublications.belongsTo(db.departments, { foreignKey: "department_id", as: "department" });


module.exports = db;
