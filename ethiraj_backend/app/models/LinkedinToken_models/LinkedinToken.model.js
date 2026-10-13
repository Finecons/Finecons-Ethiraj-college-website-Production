module.exports = (sequelize, Sequelize) => {
  const LinkedinToken = sequelize.define("LinkedinToken", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    accessToken: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    refreshToken: {
      type: Sequelize.TEXT,
    },
    expiresAt: {
      type: Sequelize.DATE,
    },
  });

  return LinkedinToken;
};
