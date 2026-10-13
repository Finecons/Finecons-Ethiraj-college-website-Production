module.exports = (sequelize, Sequelize) => {
  const Research = sequelize.define(
    "researches",
    {
      research_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      faculty_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "faculties",
          key: "faculty_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        comment: "Faculty who created this research",
      },
      program_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "programs",
          key: "program_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        comment: "Program under which this research falls",
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
        comment: "Department to which this research belongs",
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "Title of the research paper or project",
      },
      description: {
        type: Sequelize.TEXT("long"),
        allowNull: true,
        comment: "Detailed abstract or research description",
      },
      publication_date: {
        type: Sequelize.DATE,
        allowNull: true,
        comment: "Date when the research was published or presented",
      },
      journal_name: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "Name of the journal or conference",
      },
      document_url: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "Optional link to the published research paper or PDF",
      },
      additional_data: {
        type: Sequelize.TEXT("long"),
        allowNull: true,
        comment: "Additional details like co-authors, awards, etc. (JSON format)",
      },
      is_important: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: "Mark research as important: 0 = No, 1 = Yes",
      },
      status: {
        type: Sequelize.ENUM("active", "inactive"),
        allowNull: false,
        defaultValue: "active",
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

  return Research;
};
