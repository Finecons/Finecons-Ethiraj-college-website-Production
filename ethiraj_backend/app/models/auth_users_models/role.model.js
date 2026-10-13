// models/role.model.js
module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define(
      "roles",
      {
        role_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        roleName: {
          type: Sequelize.STRING,
          allowNull: false,
          // unique: true, // each role name should be unique
        },
        // description: {
        //   type: Sequelize.STRING,
        //   allowNull: true, // optional description for the role
        // },
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
          defaultValue: null, // for soft delete
        },
      },
      {
        timestamps: true,
      }
    );
  
    return Role;
  };
  