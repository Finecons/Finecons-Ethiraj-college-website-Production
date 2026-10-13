module.exports = (sequelize, Sequelize) => {
  const RolePermission = sequelize.define(
    "role_permission",
    {
      role_permission_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "roles", // Ensure "roles" table exists
          key: "role_id",
        },
        comment: "Foreign key referencing the roles table",
      },
      module_name: {
        type: Sequelize.ENUM(
          "Dashboard",
          "OperatorRegistration",
          "SchemeManagement",
          "ContentManagement"
        ),
        allowNull: false,
        comment: "Module category (e.g., Dashboard, OperatorRegistration)",
      },
      screen_name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "Specific screen name within the module",
      },
      add: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: "Permission to add",
      },
      edit: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: "Permission to edit",
      },
      delete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: "Permission to delete",
      },
      view: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: "Permission to view",
      },
      delete_status: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0, // active by default
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null, // for soft delete
      },
    },
    {
      timestamps: true,
    }
  );

  return RolePermission;
};
