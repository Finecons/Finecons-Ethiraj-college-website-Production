// controllers/permission.controller.js
const db = require("../../models");
const RolePermission = db.RolePermission;
const { StatusCode } = require("../../constants/HttpStatusCode");
const RESPONSE = require("../../constants/response");
const Role = db.Role;
const { Sequelize } = require("sequelize");




const defaultPermissions = [
    {
        role_id: 1, // Assuming role_id = 1 for SuperAdmin
        module_name: "Dashboard",
        screen_name: "Dashboard",
        add: true,
        edit: true,
        delete: true,
        view: true,
    },
    {
        role_id: 1,
        module_name: "OperatorRegistration",
        screen_name: "All User List",
        add: true,
        edit: false,
        delete: false,
        view: true,
    },
    {
        role_id: 1,
        module_name: "OperatorRegistration",
        screen_name: "Purchaser List",
        add: false,
        edit: false,
        delete: false,
        view: true,
    },
    {
        role_id: 1,
        module_name: "OperatorRegistration",
        screen_name: "Referrer List",
        add: false,
        edit: false,
        delete: false,
        view: true,
    },
    {
        role_id: 1,
        module_name: "OperatorRegistration",
        screen_name: "Financial Consultant List",
        add: true,
        edit: false,
        delete: false,
        view: true,
    },
    {
        role_id: 1,
        module_name: "SchemeManagement",
        screen_name: "Gold Stake Schemes",
        add: true,
        edit: true,
        delete: false,
        view: true,
    },
    {
        role_id: 1,
        module_name: "SchemeManagement",
        screen_name: "Referral Schemes",
        add: true,
        edit: true,
        delete: false,
        view: true,
    },
    {
        role_id: 1,
        module_name: "ContentManagement",
        screen_name: "Home",
        add: true,
        edit: true,
        delete: true,
        view: true,
    },
    {
        role_id: 1,
        module_name: "ContentManagement",
        screen_name: "Stake Now",
        add: true,
        edit: true,
        delete: true,
        view: true,
    },
    {
        role_id: 1,
        module_name: "ContentManagement",
        screen_name: "Referrals",
        add: true,
        edit: true,
        delete: true,
        view: true,
    },
    {
        role_id: 1,
        module_name: "ContentManagement",
        screen_name: "About Us",
        add: true,
        edit: true,
        delete: true,
        view: true,
    },
    {
        role_id: 1,
        module_name: "ContentManagement",
        screen_name: "Blog",
        add: true,
        edit: true,
        delete: true,
        view: true,
    },
    {
        role_id: 1,
        module_name: "ContentManagement",
        screen_name: "Contact Us",
        add: true,
        edit: true,
        delete: true,
        view: true,
    },
];


// dynamic role passed role Permissions

// const defaultPermissions = [
//     {
//         module_name: "Dashboard",
//         screen_name: "Dashboard",
//         add: true,
//         edit: true,
//         delete: true,
//         view: true,
//     },
//     {
//         module_name: "OperatorRegistration",
//         screen_name: "All User List",
//         add: true,
//         edit: true,
//         delete: true,
//         view: true,
//     },
//     {
//         module_name: "OperatorRegistration",
//         screen_name: "Purchaser List",
//         add: true,
//         edit: true,
//         delete: true,
//         view: true,
//     },
//     {
//         module_name: "OperatorRegistration",
//         screen_name: "Referrer List",
//         add: true,
//         edit: true,
//         delete: true,
//         view: true,
//     },
//     {
//         module_name: "OperatorRegistration",
//         screen_name: "Financial Consultant List",
//         add: true,
//         edit: true,
//         delete: true,
//         view: true,
//     },
//     {
//         module_name: "SchemeManagement",
//         screen_name: "Gold Stake Schemes",
//         add: true,
//         edit: true,
//         delete: true,
//         view: true,
//     },
//     {
//         module_name: "SchemeManagement",
//         screen_name: "Referral Schemes",
//         add: true,
//         edit: true,
//         delete: true,
//         view: true,
//     },
//     {
//         module_name: "ContentManagement",
//         screen_name: "Home",
//         add: true,
//         edit: true,
//         delete: true,
//         view: true,
//     },
//     {
//         module_name: "ContentManagement",
//         screen_name: "Stake Now",
//         add: true,
//         edit: true,
//         delete: true,
//         view: true,
//     },
//     {
//         module_name: "ContentManagement",
//         screen_name: "About Us",
//         add: true,
//         edit: true,
//         delete: true,
//         view: true,
//     },
//     {
//         module_name: "ContentManagement",
//         screen_name: "Blog",
//         add: true,
//         edit: true,
//         delete: true,
//         view: true,
//     },
//     {
//         module_name: "ContentManagement",
//         screen_name: "Contact Us",
//         add: true,
//         edit: true,
//         delete: true,
//         view: true,
//     },
// ];


// 🟢 Seeder API for SuperAdmin Default Permissions


exports.DefaultPermissionsForAuthUser = async (req, res) => {
    try {
        const existingPermissions = await RolePermission.findAll({
            where: { role_id: 1 },
        });

        if (existingPermissions.length > 0) {
            // console.log("Permissions already seeded!");
            return;

        }

        await RolePermission.bulkCreate(defaultPermissions);
        console.log("SuperAdmin permissions seeded successfully");
    } catch (error) {
        console.error(error);
        //   res.status(500).json({ error: "Server error", details: error.message });
    }
}


// 🟢 Seeder API for Default Permissions with Dynamic Role ID
// exports.DefaultPermissionsForAuthUser = async (roleId) => {
//     try {
//       // Map over the default permissions and add dynamic role_id to each
//       const dynamicPermissions = defaultPermissions.map(permission => ({
//         ...permission,
//         role_id: roleId // Dynamically set role_id for each permission
//       }));

//       // Check if permissions for this role already exist
//       const existingPermissions = await RolePermission.findAll({
//         where: { role_id: roleId },
//       });

//       // If permissions already exist, log the message and skip seeding
//       if (existingPermissions.length > 0) {
//         console.log(`Permissions for role_id ${roleId} already seeded!`);
//         return;
//       }

//       // Seed the default permissions for the specific role
//       await RolePermission.bulkCreate(dynamicPermissions);
//       console.log(`Permissions for role_id ${roleId} seeded successfully`);

//     } catch (error) {
//       // Log the error if something goes wrong
//       console.error("Error while seeding permissions for role_id:", roleId, error.message);
//     }
//   };



// 🟢 Create Permissions for a Specific Role
exports.createPermissionsForAuthUser = async (req, res) => {
    try {
        const { role_id, permissions } = req.body; // role_id & permissions array from request

        if (!role_id || !permissions || !Array.isArray(permissions)) {
            return res.status(400).json({ error: "Invalid input. role_id and permissions are required." });
        }

        // Check if permissions already exist for the given role_id
        const existingPermissions = await RolePermission.findAll({ where: { role_id, delete_status: 0 } });

        if (existingPermissions.length > 0) {
            // return res.status(400).json({ error: "Permissions for this role already exist." });
            RESPONSE.Success.Message = "Permissions for this role already exist.";
            RESPONSE.Success.data = [];
            return res.status(StatusCode.OK.code).send(RESPONSE.Success);
        }

        // Attach role_id to each permission object
        const newPermissions = permissions.map(permission => ({ ...permission, role_id }));

        // Bulk insert the new permissions
        await RolePermission.bulkCreate(newPermissions);

        // res.status(201).json({ message: "Permissions created successfully!" });
        RESPONSE.Success.Message = "Permissions created successfully!";
        RESPONSE.Success.data = {};
        return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error creating permissions:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};


// 🟢 Get Permissions for a Specific Role
// exports.getPermissionsForAuthUser = async (req, res) => {
//     try {
//         const { role_id } = req.params;

//         if (!role_id) {
//             return res.status(400).json({ error: "role_id is required." });
//         }

//         // Fetch permissions based on role_id
//         const permissions = await RolePermission.findAll({ where: { role_id, delete_status: 0 } });

//         if (!permissions.length) {
//             return res.status(404).json({ error: "No permissions found for this role." });
//         }

//         res.status(200).json(permissions);
//     } catch (error) {
//         console.error("Error fetching permissions:", error.message);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };

// 🟢 Get Permissions for a Specific Role
// exports.getPermissionsForAuthUser = async (req, res) => {
//     try {
//         const { role_id } = req.params;

//         if (!role_id) {
//             return res.status(400).json({ error: "role_id is required." });
//         }

//         // Fetch permissions based on role_id
//         const permissions = await RolePermission.findAll({ 
//             where: { role_id, delete_status: 0 } 
//         });

//         if (!permissions.length) {
//             return res.status(404).json({ error: "No permissions found for this role." });
//         }

//         // Transform data into the desired structure
//         const formattedPermissions = {};
//         permissions.forEach(permission => {
//             const { module_name, screen_name } = permission;

//             if (!formattedPermissions[module_name]) {
//                 formattedPermissions[module_name] = {};
//             }

//             formattedPermissions[module_name][screen_name] = {
//                 add: false,
//                 edit: false,
//                 delete: false,
//                 view: false,
//             };
//         });

//         res.status(200).json({ permissions: formattedPermissions });
//     } catch (error) {
//         console.error("Error fetching permissions:", error.message);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };

// 🟢 Get Permissions for a Specific Role
exports.getPermissionsForAuthUser = async (req, res) => {
    try {
        const { role_id } = req.params;

        if (!role_id) {
            return res.status(400).json({ error: "role_id is required." });
        }

        // const role = await Role.findOne({
        //     where: { delete_status: 0, role_id },
        // });

        const role = await Role.findOne({
            where: { role_id },
        });

        if (!role) {
            // return res.status(404).json({ error: "Role not found." });
            RESPONSE.Success.Message = "Role not found.";
            RESPONSE.Success.data = {};
            return res.status(StatusCode.OK.code).send(RESPONSE.Success);
        }

        const roleInactive = await Role.findOne({
            where: { delete_status: 1, role_id },
        });

        if (roleInactive) {
            // return res.status(404).json({ error: "Role not found." });
            RESPONSE.Success.Message = "Please contact the Admin";
            RESPONSE.Success.data = {};
            return res.status(StatusCode.OK.code).send(RESPONSE.Success);
        }

        // Fetch permissions based on role_id
        const permissions = await RolePermission.findAll({
            where: { role_id, delete_status: 0 },
        });

        if (!permissions.length) {

            // return res.status(404).json({ error: "No permissions found for this role." });
            RESPONSE.Success.Message = "No permissions found for this role.";
            RESPONSE.Success.data = {};
            return res.status(StatusCode.OK.code).send(RESPONSE.Success);
        }

        // Transform data into the desired format
        const formattedPermissions = {};

        permissions.forEach(({ module_name, screen_name, add, edit, delete: del, view }) => {
            if (!formattedPermissions[module_name]) {
                formattedPermissions[module_name] = {};
            }
            formattedPermissions[module_name][screen_name] = {
                add,
                edit,
                delete: del,
                view,
            };
        });

        // res.status(200).json({ role_id, permissions: formattedPermissions });
        RESPONSE.Success.Message = "getPermissionsForAuthUser retrieved successfully.";
        RESPONSE.Success.data = { role_id, roleName: role.roleName, permissions: formattedPermissions };
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error fetching permissions:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};



exports.bulkUpdatePermissionsForAuthUser = async (req, res) => {
    try {
        // Get the role_id from the URL parameter
        const { role_id } = req.params;
        // Get the array of permission objects from the request body
        const permissionsArray = req.body;

        // Validate inputs
        if (!role_id || !Array.isArray(permissionsArray) || permissionsArray.length === 0) {
            return res.status(400).json({
                error: "role_id and a non-empty permissions array are required.",
            });
        }

        // For each permission object, update the corresponding record
        const updatePromises = permissionsArray.map(async (perm) => {
            const { module_name, screen_name, add, edit, delete: del, view } = perm;

            // Validate required fields for each permission object
            if (!module_name || !screen_name) {
                throw new Error("Each permission must have module_name and screen_name.");
            }

            // Update the permission record matching role_id, module_name, and screen_name
            // Note: If no record exists, you might want to choose to create one.
            return RolePermission.update(
                { add, edit, delete: del, view },
                { where: { role_id, module_name, screen_name, delete_status: 0 } }
            );
        });

        // Wait for all updates to complete
        await Promise.all(updatePromises);

        res.status(200).json({ message: "Permissions updated successfully." });
    } catch (error) {
        console.error("Error updating permissions:", error);
        res.status(500).json({ error: "Internal server error", details: error.message });
    }
};



exports.updateAllPermissionsForAuthUser = async (req, res) => {
    try {
        const { role_id, permissions, roleName } = req.body;

        if (!role_id || !permissions || !Array.isArray(permissions) || permissions.length === 0) {
            return res.status(400).json({ error: "role_id and a non-empty permissions array are required." });
        }

        // Find the role by role_id
        const role = await Role.findOne({
            where: { role_id, delete_status: 0 },
        });

        if (!role) {
            return res.status(404).json({ error: "Role not found." });
        }

        // Check if the roleName already exists, excluding the current role being updated
        if (roleName) {


            // const lowerCaseRoleName = roleName.toLowerCase(); // Convert to lowercase

            // const existingRole = await Role.findOne({
            //     where: { roleName: lowerCaseRoleName, delete_status: 0, role_id: { [Sequelize.Op.ne]: role_id } },
            // });

            // const lowerCaseRoleName = roleName.toLowerCase(); // Convert to lowercase

            const existingRole = await Role.findOne({
                where: { roleName: roleName, delete_status: 0, role_id: { [Sequelize.Op.ne]: role_id } },
            });

            if (existingRole) {
                // return res.status(400).json({ error: "Role name already exists." });
                RESPONSE.Success.Message = "Role name already exists.";
                RESPONSE.Success.data = {};
                return res.status(StatusCode.OK.code).send(RESPONSE.Success);
            }


            // Update the roleName if it's unique
            // await Role.update(
            //     { roleName: lowerCaseRoleName },
            //     { where: { role_id } }
            // );

            await Role.update(
                { roleName: roleName },
                { where: { role_id } }
            );
        }


        // Iterate through each permission object and update the record matching role_id, module_name, and screen_name.
        for (const perm of permissions) {
            const { module_name, screen_name, add, edit, delete: del, view } = perm;

            if (!module_name || !screen_name) {
                return res.status(400).json({ error: "Each permission object must include module_name and screen_name." });
            }

            const [affectedRows] = await RolePermission.update(
                { add, edit, delete: del, view },
                { where: { role_id, module_name, screen_name, delete_status: 0 } }
            );

            if (affectedRows === 0) {
                // Optionally, if no record exists for this combination, log a warning.
                console.warn(`No permission record found for role_id ${role_id}, module_name "${module_name}", screen_name "${screen_name}"`);
                // If you want to create a new record instead, uncomment the following:
                // await RolePermission.create({ role_id, module_name, screen_name, add, edit, delete: del, view });
            }
        }

        // return res.status(200).json({ message: "Permissions updated successfully!" });
        RESPONSE.Success.Message = "Permissions updated successfully!";
        RESPONSE.Success.data = {};
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    } catch (error) {
        console.error("Error updating permissions:", error.message);
        return res.status(500).json({ error: "Internal server error", details: error.message });
    }
}


// Soft delete all permissions for a given role_id
exports.softDeletePermissionsForAuthUser = async (req, res) => {
    try {
        const { role_id } = req.params;

        if (!role_id) {
            return res.status(400).json({ error: "role_id is required." });
        }

        // Find the role to ensure it exists and is not already deleted
        const role = await Role.findOne({
            where: { role_id, delete_status: 0 },
        });

        if (!role) {
            return res.status(404).json({ error: "Role not found or already deleted." });
        }

        // Soft delete role
        await Role.update(
            {
                delete_status: 1,
                deletedAt: new Date(),
            },
            { where: { role_id, delete_status: 0 } }
        );



        // Update all permission records for the specified role_id
        const [affectedRows] = await RolePermission.update(
            {
                delete_status: 1,
                deletedAt: new Date()
            },
            { where: { role_id, delete_status: 0 } }
        );

        if (affectedRows === 0) {
            return res.status(404).json({ error: "No permissions found for this role." });
        }

        return res.status(200).json({ message: "Permissions soft deleted successfully!" });
    } catch (error) {
        console.error("Error soft deleting permissions:", error.message);
        return res.status(500).json({ error: "Internal server error", details: error.message });
    }
};


// Restore all soft-deleted permissions for a given role_id
exports.restorePermissionsForAuthUser = async (req, res) => {
    try {
        const { role_id } = req.params;

        if (!role_id) {
            return res.status(400).json({ error: "role_id is required." });
        }

        // Find the role to ensure it exists and is not already deleted
        const role = await Role.findOne({
            where: { role_id, delete_status: 1 },
        });

        if (!role) {
            return res.status(404).json({ error: "Role not found or No soft-deleted." });
        }

        // Soft delete role
        await Role.update(
            {
                delete_status: 0,
                deletedAt: null,
            },
            { where: { role_id, delete_status: 1 } }
        );


        // Update all permission records for this role that are soft-deleted
        const [affectedRows] = await RolePermission.update(
            {
                delete_status: 0,
                deletedAt: null
            },
            {
                where: {
                    role_id,
                    delete_status: 1
                }
            }
        );

        if (affectedRows === 0) {
            return res.status(404).json({ error: "No soft-deleted permissions found for this role." });
        }

        return res.status(200).json({ message: "Permissions restored successfully." });
    } catch (error) {
        console.error("Error restoring permissions:", error.message);
        return res.status(500).json({ error: "Internal server error", details: error.message });
    }
};


// 🔴 Delete Permissions for a Specific Role from Data base (destroy)
exports.deletePermissionsForAuthUser = async (req, res) => {
    try {
        const { role_id } = req.params;

        if (!role_id) {
            return res.status(400).json({ error: "role_id is required." });
        }

        // Delete permissions
        const deletedCount = await RolePermission.destroy({ where: { role_id } });

        if (deletedCount === 0) {
            return res.status(404).json({ error: "No permissions found for this role." });
        }

        res.status(200).json({ message: "Permissions deleted successfully!" });
    } catch (error) {
        console.error("Error deleting permissions:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
