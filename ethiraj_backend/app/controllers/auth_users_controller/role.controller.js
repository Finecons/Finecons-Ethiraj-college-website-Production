const db = require("../../models");
const Role = db.Role;
const { StatusCode } = require("../../constants/HttpStatusCode");
const RESPONSE = require("../../constants/response");
const RolePermission = db.RolePermission;
const { Op } = require("sequelize");

// exports.createRoleWithDefaultPermissionsForAuthUser = async (req, res) => {
//   try {
//       let { roleName } = req.body;

//       // Validate required field
//       if (!roleName) {
//           return res.status(StatusCode.BAD_REQUEST.code).send({
//               ...RESPONSE.Failure,
//               Message: "roleName is required.",
//           });
//       }

//       // Convert roleName to lowercase
//       roleName = roleName.toLowerCase();

//       // Check if the role already exists
//       const existingRole = await Role.findOne({ where: { roleName, delete_status: 0 } });

//       if (existingRole) {
//           return res.status(StatusCode.CONFLICT.code).send({
//               ...RESPONSE.Failure,
//               Message: "Role already exists.",
//           });
//       }

//       // Create the new role
//       const newRole = await Role.create({ roleName });

//       // Default permissions for this role
//       const defaultPermissions = [
//           { module_name: "Dashboard", screen_name: "Dashboard" },
//           { module_name: "OperatorRegistration", screen_name: "All User List" },
//           { module_name: "OperatorRegistration", screen_name: "Purchaser List" },
//           { module_name: "OperatorRegistration", screen_name: "Referrer List" },
//           { module_name: "OperatorRegistration", screen_name: "Financial Consultant List" },
//           { module_name: "SchemeManagement", screen_name: "Gold Stake Schemes" },
//           { module_name: "SchemeManagement", screen_name: "Referral Schemes" },
//           { module_name: "ContentManagement", screen_name: "Home" },
//           { module_name: "ContentManagement", screen_name: "Stake Now" },
//           { module_name: "ContentManagement", screen_name: "About Us" },
//           { module_name: "ContentManagement", screen_name: "Blog" },
//           { module_name: "ContentManagement", screen_name: "Contact Us" }
//       ].map(permission => ({
//           ...permission,
//           role_id: newRole.role_id, // Attach role_id
//           add: false,
//           edit: false,
//           delete: false,
//           view: false
//       }));

//       // Automatically create permissions
//       await RolePermission.bulkCreate(defaultPermissions);

//       return res.status(StatusCode.CREATED.code).send({
//           ...RESPONSE.Success,
//           Message: "Role created successfully with default permissions.",
//           data: newRole,
//       });
//   } catch (error) {
//       console.error("Error in createRole:", error);
//       return res.status(StatusCode.SERVER_ERROR.code).send({
//           ...RESPONSE.Failure,
//           Message: error.message || "Internal Server Error.",
//       });
//   }
// };








// Create Default Roles API
exports.createDefaultRoles = async (req, res) => {
  try {
    const defaultRoles = ["Admin"];

    // Iterate over defaultRoles and create them if they don’t exist
    for (let roleName of defaultRoles) {
      // Convert roleName to lowercase
      // roleName = roleName.toLowerCase();

      const existingRole = await Role.findOne({
        where: { roleName, delete_status: 0 },
      });

      if (!existingRole) {
        await Role.create({ roleName });
      }
    }

    // return res.status(StatusCode.CREATED.code).send({
    //   ...RESPONSE.Success,
    //   Message: "Default roles created successfully.",
    // });
  } catch (error) {
    console.error("Error in createDefaultRoles:", error);
    return
  }
};





// Create Role API
exports.createRole = async (req, res) => {
  try {
    const { roleName } = req.body;
    // const { roleName, description } = req.body;

    // Validate the required field
    if (!roleName) {
      return res.status(StatusCode.BAD_REQUEST.code).send({
        ...RESPONSE.Failure,
        Message: "roleName is required.",
      });
    }


    // Convert roleName to lowercase
    // roleName = roleName.toLowerCase();


    // Check if the role already exists (active record)
    const existingRole = await Role.findOne({
      where: { roleName, delete_status: 0 },
    });

    if (existingRole) {
      return res.status(StatusCode.CONFLICT.code).send({
        ...RESPONSE.Failure,
        Message: "Role already exists.",
      });
    }

    // Create the new role
    const newRole = await Role.create({
      roleName,
      // description, // description is optional
    });

    return res.status(StatusCode.CREATED.code).send({
      ...RESPONSE.Success,
      Message: "Role created successfully.",
      data: newRole,
    });
  } catch (error) {
    console.error("Error in createRole:", error);
    return res.status(StatusCode.SERVER_ERROR.code).send({
      ...RESPONSE.Failure,
      Message: error.message || "Internal Server Error.",
    });
  }
};




exports.createRoleWithPermissions = async (req, res) => {
  try {
    const { roleName, permissions } = req.body;

    if (!roleName || !permissions || !Array.isArray(permissions)) {
      return res.status(400).json({ error: "roleName and permissions array are required." });
    }

    // // Convert roleName to lowercase
    // const formattedRoleName = roleName.toLowerCase();

    // // Check if role already exists
    // let existingRole = await Role.findOne({
    //   where: { roleName: formattedRoleName, delete_status: 0 },
    // });


    // Convert roleName to lowercase
    // const formattedRoleName = roleName.toLowerCase();

    // Check if role already exists
    let existingRole = await Role.findOne({
      where: { roleName: roleName, delete_status: 0 },
    });

    if (existingRole) {
      // return res.status(400).json({ error: "Role already exists." });
      RESPONSE.Success.Message = "Role already exists.";
      RESPONSE.Success.data = {};
      return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    }

    // // Create new role
    // const newRole = await Role.create({ roleName: formattedRoleName });

    // Create new role
    const newRole = await Role.create({ roleName: roleName });

    // Attach role_id to each permission object
    const newPermissions = permissions.map(permission => ({
      ...permission,
      role_id: newRole.role_id,
    }));

    // Bulk insert permissions
    await RolePermission.bulkCreate(newPermissions);

    // res.status(201).json({
    //   message: "Role and permissions created successfully!",
    //   role: newRole,
    //   permissions: newPermissions
    // });
    RESPONSE.Success.Message = "Role and permissions created successfully!";
    RESPONSE.Success.data = {
      role: newRole,
      permissions: newPermissions
    };
    return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error creating role and permissions:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};



// Get All Roles API

exports.getAllRoles = async (req, res) => {
  try {
    // Retrieve roles where delete_status is 0 (active roles)
    const roles = await Role.findAll({
      where: {
        delete_status: 0,
        roleName: { [Op.ne]: "superAdmin" }, // Exclude superAdmin
      },
    });

    return res.status(StatusCode.OK.code).send({
      ...RESPONSE.Success,
      Message: "Roles fetched successfully.",
      data: roles,
    });
  } catch (error) {
    console.error("Error in getAllRoles:", error);
    return res.status(StatusCode.SERVER_ERROR.code).send({
      ...RESPONSE.Failure,
      Message: error.message || "Internal Server Error.",
    });
  }
};


exports.getAllRolesWithModules = async (req, res) => {
  try {
    // Fetch all active roles
    const roles = await Role.findAll({
      where: { delete_status: 0 },
      attributes: ['role_id', 'roleName']
    });

    if (!roles.length) {
      return res.status(404).json({ error: "No roles found." });
    }

    // Fetch all permissions related to active roles
    const roleIds = roles.map(role => role.role_id);
    const permissions = await RolePermission.findAll({
      where: { role_id: roleIds, delete_status: 0 },
      attributes: ['role_id', 'module_name']
    });

    // Organize modules by role
    const roleMap = {};
    roles.forEach(role => {
      roleMap[role.role_id] = {
        roleName: role.roleName,
        role_id: role.role_id,
        modules: []
      };
    });

    permissions.forEach(permission => {
      if (!roleMap[permission.role_id].modules.includes(permission.module_name)) {
        roleMap[permission.role_id].modules.push(permission.module_name);
      }
    });

    // Convert roleMap object into an array
    const response = Object.values(roleMap);

    // return res.status(200).json(response);
    RESPONSE.Success.Message = "Role retrieved successfully.";
    RESPONSE.Success.data = response;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching roles and modules:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};
