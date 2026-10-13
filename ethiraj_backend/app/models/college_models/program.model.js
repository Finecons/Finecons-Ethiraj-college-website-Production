module.exports = (sequelize, Sequelize) => {
  const Program = sequelize.define(
    "programs",
    {
      program_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      program_name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "E.g., B.Com - General, M.Com - General",
      },
      academic_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "academics",
          key: "academic_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        comment: "Academic category this program belongs to",
      },
      department_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "departments",
          key: "department_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        comment: "Department this program belongs to",
      },
      programme_level_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "programme_levels",
          key: "programme_level_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        comment: "Programme level (Undergraduate, Postgraduate, PhD)",
      },
      funding_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "funding_types",
          key: "funding_type_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        comment: "Funding type (Aided, Self-Supporting)",
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: "Optional details about the program",
      },
      image_url: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "Image or banner URL for program display",
      },
      additional_data: {
        type: Sequelize.TEXT("long"),
        allowNull: true,
        comment: "Additional data like cards, staff details, or highlights in JSON format",
      },
      delete_status: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: "Soft delete flag: 0=active, 1=deleted",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
    },
    {
      timestamps: true,
    }
  );

  return Program;
};
