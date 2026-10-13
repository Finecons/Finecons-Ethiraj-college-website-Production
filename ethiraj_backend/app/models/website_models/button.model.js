module.exports = (sequelize, Sequelize) => {
  const Button = sequelize.define(
    "buttons",
    {
      button_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      button_name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "Display name of the button.",
      },
      text: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment: "Text/content related to the button.",
      },
      link: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "Redirect URL for the button.",
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

  return Button;
};
