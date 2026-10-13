// controllers/user.controller.js
const db = require("../../models");
const jwt = require("jsonwebtoken");
const AuthUser = db.AuthUser;
const Role = db.Role;
const bcrypt = require("bcrypt");
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");

// email: "admin@ethiraj.com",
// password: "admin@123",


exports.createDefaultSuperAdmins = async () => {
  try {
    const saltRounds = 10; // Adjust salt rounds based on your security needs

    // Step 1: Define hardcoded super admin(s)
    const hardcodedSuperAdmins = [
      {
        name: "Primary Admin",
        email: "admin@ethiraj.com",
        phone: "1234567890",
        password: "admin@123",
        userRole: "Admin",
        role_id: 1,
        // If you're using role associations, you might include a role_id here as well.
      },
    ];

    // Step 2: Iterate over the hardcoded super admins and create them if they don't already exist
    for (const adminData of hardcodedSuperAdmins) {
      const emailExists = await AuthUser.findOne({
        where: { email: adminData.email, delete_status: 0 },
      });

      if (!emailExists) {
        // Hash the password before creating the record
        adminData.password = await bcrypt.hash(adminData.password, saltRounds);
        await AuthUser.create(adminData);
        // console.log(`SuperAdmin created: ${adminData.email}`);
        continue; // Skip to the next admin
      } else {
        // console.log(`SuperAdmin with email ${adminData.email} already exists.`);
        continue; // Skip to the next admin
      }
    }

    // Step 3: Parse additional super admins from the environment variable (if any)
    // Example env variable: SUPERADMINS=[{"name": "Env SuperAdmin", "email": "envsuperadmin@example.com", "phone": "0987654321", "password": "envpassword123"}]
    const defaultSuperAdmins = JSON.parse(process.env.SUPERADMINS || "[]");

    // Step 4: Iterate over the env-sourced super admins and create them if they don't already exist
    for (const adminData of defaultSuperAdmins) {
      const emailExists = await AuthUser.findOne({
        where: { email: adminData.email, delete_status: 0 },
      });
      if (emailExists) {
        console.log(`SuperAdmin with email ${adminData.email} already exists.`);
        continue; // Skip to the next admin
      }

      const phoneExists = await AuthUser.findOne({
        where: { phone: adminData.phone, delete_status: 0 },
      });
      if (phoneExists) {
        console.log(`SuperAdmin with phone ${adminData.phone} already exists.`);
        continue; // Skip to the next admin
      }

      // Hash the password before storing it
      adminData.password = await bcrypt.hash(adminData.password, saltRounds);
      // Set the userRole to "superAdmin"
      adminData.userRole = "superAdmin";

      await AuthUser.create(adminData);
      // console.log(`SuperAdmin created from .env: ${adminData.email}`);
      continue; // Skip to the next admin
    }
  } catch (error) {
    console.error("Error creating default super admins:", error);
  }
};


// Define allowed role creation mapping.
const allowedRolesForCreation = {
  superAdmin: ["admin", "operator", "manager"],
  admin: ["operator", "manager"],
};

exports.registerAuthUser = async (req, res) => {
  try {
    // Assume req.user contains the currently authenticated user data
    const currentUser = req.user;
    if (!currentUser) {
      return res.status(StatusCode.UNAUTHORIZED.code).send({
        ...RESPONSE.Failure,
        Message: "Unauthorized access.",
      });
    }

    const { name, email, phone, password, roleName } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !password || !roleName) {
      return res.status(StatusCode.BAD_REQUEST.code).send({
        ...RESPONSE.Failure,
        Message: "Missing required fields: name, email, phone, password, and roleName.",
      });
    }

    // Check if the current user is allowed to create a user with the provided role
    // const allowedTargetRoles = allowedRolesForCreation[currentUser.userRole];
    // if (!allowedTargetRoles || !allowedTargetRoles.includes(roleName)) {
    //   return res.status(StatusCode.FORBIDDEN.code).send({
    //     ...RESPONSE.Failure,
    //     Message: "You are not authorized to create a user with this role.",
    //   });
    // }


    // Verify that only superAdmin can create users
    if (currentUser.userRole !== "superAdmin") {
      return res.status(StatusCode.FORBIDDEN.code).send({
        ...RESPONSE.Failure,
        Message: "Only a superAdmin can create users.",
      });
    }


    // Check if the user email or phone already exists
    const emailExists = await AuthUser.findOne({ where: { email, delete_status: 0 } });
    const phoneExists = await AuthUser.findOne({ where: { phone, delete_status: 0 } });
    if (emailExists || phoneExists) {
      RESPONSE.Success.Message = "Email or phone already exists.";
      RESPONSE.Success.data = {};
      return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    }

    // Retrieve the role from the Roles table using roleName
    const role = await Role.findOne({ where: { roleName, delete_status: 0 } });
    if (!role) {
      return res.status(StatusCode.NOT_FOUND.code).send({
        ...RESPONSE.Failure,
        Message: `Role "${roleName}" not found. Please create the role first.`,
      });
    }

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user, storing both the role_id and userRole (roleName)
    const newUser = await AuthUser.create({
      name,
      email,
      phone,
      password: hashedPassword,
      role_id: role.role_id,
      userRole: role.roleName, // storing the role name in userRole column
    });

    RESPONSE.Success.Message = "User registered successfully.";
    RESPONSE.Success.data = newUser;
    return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("registerUser:", error);
    RESPONSE.Failure.Message = error.message || "Error registering user.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};




// Login API: Validate credentials and return a JWT token
exports.loginAuthUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate that email and password are provided
    if (!email || !password) {
      return res.status(StatusCode.BAD_REQUEST.code).send({
        ...RESPONSE.Failure,
        Message: "Email and password are required.",
      });
    }

    // Find the user by email (only active records)
    const user = await AuthUser.findOne({
      where: { email, delete_status: 0 },
    });

    // If user not found, return error
    if (!user) {
      // return res.status(StatusCode.NOT_FOUND.code).send({
      //   ...RESPONSE.Failure,
      //   Message: "User not found.",
      // });
      RESPONSE.Success.Message = "User not found.";
      RESPONSE.Success.data = {};
      return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    }

    // Compare the provided password with the stored hash
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      // return res.status(StatusCode.UNAUTHORIZED.code).send({
      //   ...RESPONSE.Failure,
      //   Message: "Invalid credentials.",
      // });
      RESPONSE.Success.Message = "Invalid password.";
      RESPONSE.Success.data = {};
      return res.status(StatusCode.OK.code).send(RESPONSE.Success);
    }


    // Fetch the role name based on the role_id
    const userRole = await Role.findOne({
      where: { role_id: user.role_id },
    });

    // Ensure role exists
    if (!userRole) {
      return res.status(StatusCode.NOT_FOUND.code).send({
        ...RESPONSE.Failure,
        Message: "User role not found.",
      });
    }


    // Generate a JWT token. The payload can include any user information you wish to embed.
    const token = jwt.sign(
      { user_id: user.user_id, userRole: userRole.roleName ,userRoleId: userRole.role_id },
      "goldStakeApi", // Secret key (ensure this is stored securely, e.g., in an env variable)
      { expiresIn: "1d" } // Token expiration time
    );

    // Exclude the password field from the user data before sending the response
    const { password: pwd, ...userData } = user.toJSON();

    return res.status(StatusCode.OK.code).send({
      ...RESPONSE.Success,
      Message: "Login successful.",
      data: { token, user: userData, userRole: userRole.roleName },
    });
  } catch (error) {
    console.error("loginUser:", error);
    return res.status(StatusCode.SERVER_ERROR.code).send({
      ...RESPONSE.Failure,
      Message: error.message || "Error logging in.",
    });
  }
};



// Get All Auth Users API
exports.getAllAuthUser = async (req, res) => {
  try {
    // Fetch all users that are not soft-deleted
    const users = await AuthUser.findAll({
      where: { delete_status: 0 },
      include: [
        {
            model: Role,
            as: "role",
            attributes: ["role_id", "roleName"], // Select needed fields
        }
    ],
      attributes: { exclude: ["password"] }  // Exclude sensitive fields like password
    });

    if (!users || users.length === 0) {
      return res.status(StatusCode.NOT_FOUND.code).json({
        ...RESPONSE.Failure,
        Message: "No users found."
      });
    }

    return res.status(StatusCode.OK.code).json({
      ...RESPONSE.Success,
      Message: "Users fetched successfully.",
      data: users
    });
  } catch (error) {
    console.error("Error fetching all auth users:", error.message);
    return res.status(StatusCode.SERVER_ERROR.code).json({
      ...RESPONSE.Failure,
      Message: error.message || "Internal server error"
    });
  }
};



//
// 1. Get User by ID
//
exports.getAuthUserById = async (req, res) => {
  try {
    // Retrieve the user_id from the URL parameters
    const userId = req.params.user_id;

    // Find the user by ID and ensure the user is active (delete_status: 0)
    const user = await AuthUser.findOne({
      where: { user_id: userId, delete_status: 0 },
      include: [
        {
            model: Role,
            as: "role",
            attributes: ["role_id", "roleName"], // Select needed fields
        }
    ],
      attributes: { exclude: ["password"] }, // Exclude password from response
    });

    if (!user) {
      return res.status(StatusCode.NOT_FOUND.code).send({
        ...RESPONSE.Failure,
        Message: "User not found.",
      });
    }

    return res.status(StatusCode.OK.code).send({
      ...RESPONSE.Success,
      Message: "User fetched successfully.",
      data: user,
    });
  } catch (error) {
    console.error("getUserById:", error);
    return res.status(StatusCode.SERVER_ERROR.code).send({
      ...RESPONSE.Failure,
      Message: error.message || "Error fetching user.",
    });
  }
};

//
// 2. Update User API
//
exports.updateAuthUser = async (req, res) => {
  try {
    // Get the user_id from the URL parameters (or use req.user.user_id if updating own profile)
    const userId = req.params.user_id;


    const { name, email, phone, password, roleName } = req.body;

    // Basic validation
    if (!name && !email && !phone && !password && !roleName) {
      return res.status(StatusCode.BAD_REQUEST.code).send({
        ...RESPONSE.Failure,
        Message: "At least one field (name, email, phone,roleName) must be provided for update.",
      });
    }

    // Check if the user exists and is active
    const user = await AuthUser.findOne({
      where: { user_id: userId, delete_status: 0 },
    });

    if (!user) {
      return res.status(StatusCode.NOT_FOUND.code).send({
        ...RESPONSE.Failure,
        Message: "User not found.",
      });
    }

    // Optionally, check for duplicate email/phone conflicts if updating those fields
    if (email && email !== user.email) {
      const emailExists = await AuthUser.findOne({
        where: { email, delete_status: 0 },
      });
      if (emailExists) {
        // return res.status(StatusCode.CONFLICT.code).send({
        //   ...RESPONSE.Failure,
        //   Message: "Another user with this email already exists.",
        // });
        RESPONSE.Success.Message = "Another user with this email already exists.";
        RESPONSE.Success.data = {};
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
      }
    }

    if (phone && phone !== user.phone) {
      const phoneExists = await AuthUser.findOne({
        where: { phone, delete_status: 0 },
      });
      if (phoneExists) {
        // return res.status(StatusCode.CONFLICT.code).send({
        //   ...RESPONSE.Failure,
        //   Message: "Another user with this phone already exists.",
        // });
        RESPONSE.Success.Message = "Another user with this phone already exists.";
        RESPONSE.Success.data = {};
        return res.status(StatusCode.OK.code).send(RESPONSE.Success);
      }
    }


    // Prepare update object
    const updateData = { name, email, phone, userRole: roleName };

    // Hash the user's password
    // Hash the password only if provided
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    // Update the user
    await AuthUser.update(updateData, { where: { user_id: userId } });

    // Fetch the updated user (excluding the password)
    const updatedUser = await AuthUser.findOne({
      where: { user_id: userId },
      attributes: { exclude: ["password"] },
    });

    return res.status(StatusCode.OK.code).send({
      ...RESPONSE.Success,
      Message: "User updated successfully.",
      data: updatedUser,
    });
  } catch (error) {
    console.error("updateUser:", error);
    return res.status(StatusCode.SERVER_ERROR.code).send({
      ...RESPONSE.Failure,
      Message: error.message || "Error updating user.",
    });
  }
};

//
// 3. Soft Delete User API
//
exports.softDeleteAuthUser = async (req, res) => {
  try {
    // Get the user_id from the URL parameters
    const userId = req.params.user_id;

    // Find the user first
    const user = await AuthUser.findOne({ where: { user_id: userId } });
    if (!user || user.delete_status === 1) {
      return res.status(StatusCode.NOT_FOUND.code).send({
        ...RESPONSE.Failure,
        Message: "User not found or already deleted.",
      });
    }

    // Soft delete the user by setting delete_status to 1 and marking deletedAt timestamp
    await AuthUser.update(
      { delete_status: 1, deletedAt: new Date() },
      { where: { user_id: userId } }
    );

    return res.status(StatusCode.OK.code).send({
      ...RESPONSE.Success,
      Message: "User deleted successfully (soft delete).",
    });
  } catch (error) {
    console.error("softDeleteUser:", error);
    return res.status(StatusCode.SERVER_ERROR.code).send({
      ...RESPONSE.Failure,
      Message: error.message || "Error deleting user.",
    });
  }
};

//
// 4. Reset Password API
//
exports.resetPasswordForAuthUser = async (req, res) => {
  try {
    // Get the currently authenticated user's ID (or use req.params.user_id if admin resets another user's password)
    // Here we assume that the user is resetting their own password.
    const userId = req.user.user_id;
    const { currentPassword, newPassword } = req.body;

    // Validate that both passwords are provided
    if (!currentPassword || !newPassword) {
      return res.status(StatusCode.BAD_REQUEST.code).send({
        ...RESPONSE.Failure,
        Message: "Both currentPassword and newPassword are required.",
      });
    }

    // Fetch the user by ID
    const user = await AuthUser.findOne({
      where: { user_id: userId, delete_status: 0 },
    });
    if (!user) {
      return res.status(StatusCode.NOT_FOUND.code).send({
        ...RESPONSE.Failure,
        Message: "User not found.",
      });
    }

    // Verify that the provided current password matches the stored password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(StatusCode.UNAUTHORIZED.code).send({
        ...RESPONSE.Failure,
        Message: "Current password is incorrect.",
      });
    }

    // Hash the new password before updating
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    await AuthUser.update(
      { password: hashedPassword },
      { where: { user_id: userId } }
    );

    return res.status(StatusCode.OK.code).send({
      ...RESPONSE.Success,
      Message: "Password updated successfully.",
    });
  } catch (error) {
    console.error("resetPassword:", error);
    return res.status(StatusCode.SERVER_ERROR.code).send({
      ...RESPONSE.Failure,
      Message: error.message || "Error resetting password.",
    });
  }
};