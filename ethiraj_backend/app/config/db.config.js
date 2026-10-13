require("dotenv").config();

module.exports = {
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  dialect: "mysql",
  timezone: "+00:00", // UTC timezone 
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  SMTP: {
    service: process.env.MAIL_SERVICE,
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
};
