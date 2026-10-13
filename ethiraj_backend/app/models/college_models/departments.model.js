module.exports = (sequelize, Sequelize) => {
  const Department = sequelize.define(
    "departments",
    {
      department_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      academic_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "academics", // 👈 references the academics table
          key: "academic_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        comment: "Linked to academics table (Business Studies, IT, etc.)",
      },
      department_name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "E.g., Commerce, Corporate Secretaryship, Computer Science, etc.",
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: "Optional details about the department.",
      },
      image_url: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "Image or banner URL for department display.",
      },
      additional_data: {
        type: Sequelize.TEXT("long"),
        allowNull: true,
        comment: "Additional data like cards, staff details, or highlights in JSON format.",
      },
      delete_status: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0, // 0 = active, 1 = deleted (soft delete)
        comment: "Soft delete flag.",
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
    //   tableName: "departments",
    //   comment:
        // "Stores department information under each academic category. Example: Commerce, Computer Science, etc.",
    }
  );

  return Department;
};
