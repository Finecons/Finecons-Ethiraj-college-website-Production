 module.exports = (sequelize, Sequelize) => {
  const FundingType = sequelize.define(
    "funding_types",
    {
      funding_type_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      type_name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "E.g., Aided, Self-Supporting",
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: "Optional description for this funding type",
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
      // tableName: "funding_types",
    }
  );

  return FundingType;
};
