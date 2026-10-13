module.exports = (sequelize, Sequelize) => {
  const ResearchHighlights = sequelize.define(
    "researchHighlights",
    {
      researchHighlights_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: "Primary key for research highlights",
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "Title of the research highlight",
      },
      publisher: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "Name of the publisher or publication",
      },
      description: {
        type: Sequelize.TEXT("long"),
        allowNull: true,
        comment: "Detailed description of the research highlight",
      },
      faculty_name: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "Name of the faculty member associated with this research",
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
        comment: "Reference to academics table",
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
        comment: "Reference to departments table",
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: "Year of the research publication or event",
      },
      is_important: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: "Flag to mark research highlight as important: 0 = false, 1 = true (max 4 allowed)",
      },
      delete_status: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: "Soft delete flag: 0 = active, 1 = deleted",
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

  return ResearchHighlights;
};


// pravin 