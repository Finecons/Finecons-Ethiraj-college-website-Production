module.exports = (sequelize, Sequelize) => {
  const ProgrammeLevel = sequelize.define(
    "programme_levels",
    {
      programme_level_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      level_name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "E.g., Undergraduate, Postgraduate, PhD",
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: "Optional description for this programme level",
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
      // paranoid: true, // optional for soft delete
      // tableName: "programme_levels",
    }
  );

  return ProgrammeLevel;
};
