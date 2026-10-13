module.exports = (sequelize, Sequelize) => {
  const Marquee = sequelize.define(
    "marquees",
    {
      marquee_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      page_name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "home page",
        comment: "Display page name for the marquee.",
      },
      text: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment: "Text/content related to the marquee.",
      },
      link: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "Redirect URL for the marquee.",
      },
      delete_status: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: "Soft delete field (0 = active, 1 = deleted)",
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

  return Marquee;
};
