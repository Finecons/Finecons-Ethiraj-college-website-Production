module.exports = (sequelize, Sequelize) => {
  const Academic = sequelize.define(
    "academics",
    {
      academic_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      academic_name: {
        type: Sequelize.STRING,
        allowNull: false,
        // unique: true,
        comment: "E.g., Business Studies, Information Technology, etc.",
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: "Optional description for the academic group.",
      },
      image_url: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "Image or banner URL representing this academic area.",
      },
      delete_status: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0, // 0 = active, 1 = deleted (soft delete)
        comment: "Soft delete status flag.",
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
    //   tableName: "academics",
    //   comment: "Stores top-level academic categories such as Business Studies, Information Technology, etc.",
    }
  );

  return Academic;
};
