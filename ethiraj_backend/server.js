const crypto = require("crypto");

if (!global.crypto) {
  global.crypto = crypto.webcrypto;
}

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
// const {createDefaultSuperAdmins} = require("./app/controllers/admin_controller/superAdmin.controller")
const { createDefaultSuperAdmins } = require("./app/controllers/auth_users_controller/authUser.controller");
// const {DefaultPermissionsForAuthUser} = require("./app/controllers/auth_users_controller/rolePermission.controller");
const { createDefaultRoles } = require("./app/controllers/auth_users_controller/role.controller");

// const { createDefaultManagers } = require("./app/controllers/manager.controller");

const { createDefaultFundingTypes } = require("./app/controllers/college_controller/FundingType.controller");
const { createDefaultProgrammeLevels } = require("./app/controllers/college_controller/programmeLevel.controller");



require("dotenv").config();
const db = require("./app/models");
// pravin


// Import the cron job script
// require("./app/cron/cronJob");  // This will ensure the cron job starts when the server starts


// var corsOptions = {
//   origin: "http://localhost:8081"
// };
app.use(
  cors({
    origin: "*",
  })
);


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Enable trust proxy for accurate client IP logging
app.set("trust proxy", true);


// Create a write stream for logging to a text file
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Use Morgan to log HTTP requests to the file (access.log)
app.use(morgan('combined', { stream: accessLogStream }));



db.sequelize
  .sync({ alter: true })
  .then(async () => {
    console.log("Synced db.");
    await createDefaultRoles()
    await createDefaultSuperAdmins();
    await createDefaultFundingTypes()
    await createDefaultProgrammeLevels()

  })


  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

  // pravin

// // drop the table if it already exists
////
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Ethiraj application api." });
});


// ==========================================================================================

// // Serve static files
// app.use(express.static(path.join(__dirname, "build")));

// // Handle React Routing
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// -------------------------------------


// Serve the Website Build on the root route "/"
// app.use(express.static(path.join(__dirname, "website", "build-website")));
// app.get("/website", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "website", "build-website", "index.html"));
// });

// Serve the Admin Panel Build on the "/admin" route
// app.use("/admin", express.static(path.join(__dirname, "admin", "build-admin")));
// app.use(express.static(path.join(__dirname, "admin", "build-admin")));

// // Make sure the admin route serves the index.html for all routes under /admin
// app.get("/admin/*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "admin", "build-admin", "index.html"));
// });


// app.use(express.static(path.join(__dirname, "admin", "build-admin")));
// app.get("/admin", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "admin", "build-admin", "index.html"));
// });`

// Catch-all route to redirect to the website for unmatched routes
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "website", "build-website", "index.html"));
// });


// ============================================================================================


const routes = require("./app/routes/routes");
const linkedinRoutes = require("./app/routes/linkedin.routes");

app.use("/api/v1", routes);

// Non-versioned LinkedIn APIs only
app.use("/", linkedinRoutes);

app.use("/api/v1/uploads", express.static("uploads"));
// require("./app/routes/user.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


// jjsncjsc