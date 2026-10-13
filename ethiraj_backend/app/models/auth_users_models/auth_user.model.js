// models/auth_user.model.js
module.exports = (sequelize, Sequelize) => {
    const AuthUser = sequelize.define(
      "auth_users", // This is the table name
      {
        user_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          // unique: true, // ensures email uniqueness
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: false,
          // unique: true, // ensures phone uniqueness
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        profileImage: {
          type: Sequelize.STRING,
          allowNull: true, // optional profile image
        },
        // Foreign key to the Role model
        role_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "roles", // the roles table name
            key: "role_id",
          },
        },
        // Field to store the role name (userRole)
        userRole: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        delete_status: {
          type: Sequelize.TINYINT,
          allowNull: false,
          defaultValue: 0, // active by default
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
          defaultValue: null, // for soft deletes
        },
      },
      {
        timestamps: true,
      }
    );
  
    return AuthUser;
  };
  