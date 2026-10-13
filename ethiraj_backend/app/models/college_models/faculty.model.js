module.exports = (sequelize, Sequelize) => {
  const Faculty = sequelize.define("faculties", {
    faculty_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: "Primary key for faculty table",
    },

    staff_name: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "Name of the faculty/staff member",
    },

    staff_role: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "Designation or role of the staff member (e.g., Professor, Assistant Professor, etc.)",
    },

    degrees_completed: {
      type: Sequelize.STRING,
      allowNull: true,
      comment: "Degrees or qualifications completed by the staff (e.g., Ph.D., M.Sc., B.Ed.)",
    },

    description: {
      type: Sequelize.TEXT("long"),
      allowNull: true,
      comment: "Short bio or description about the staff member",
    },

    image_url: {
      type: Sequelize.STRING,
      allowNull: true,
      comment: "Profile image URL of the faculty member",
    },

    program_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "programs", // 👈 references the programs table
        key: "program_id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      comment: "Program this faculty belongs to",
    },

    funding_type_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "funding_types", // 👈 references the funding_types table
        key: "funding_type_id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      comment: "Linked to funding type table (e.g., Self-financed, Government funded)",
    },

    additional_data: {
      type: Sequelize.TEXT("long"),
      allowNull: true,
      comment: "Additional data like achievements, publications, or research details in JSON format.",
    },

    delete_status: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Soft delete flag: 0 = active, 1 = deleted",
    },

    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },

    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },

    deletedAt: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  });

  // 🧩 Associations
  Faculty.associate = (models) => {
    Faculty.belongsTo(models.Programs, {
      foreignKey: "program_id",
      as: "program",
    });

    Faculty.belongsTo(models.FundingType, {
      foreignKey: "funding_type_id",
      as: "funding_type",
    });
  };

  return Faculty;
};
