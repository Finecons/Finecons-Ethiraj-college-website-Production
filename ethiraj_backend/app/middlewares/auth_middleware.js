// const jwt = require('jsonwebtoken');
// const RESPONSE = require("../constants/response");

// const { MESSAGE } = require("../constants/message");
// const { StatusCode } = require("../constants/HttpStatusCode");
// const isAuthenticated = async (req, res, next) => {
//     try {
//         const token = req.headers.authorization.split(' ')[1];
//         if (!token) {
//             // return next('Please login to access the data');
//             RESPONSE.Failure.Message = StatusCode.FORBIDDEN.message;
//             return res.status(StatusCode.FORBIDDEN.code).send(RESPONSE.Failure);
//         }
//         const verify =  jwt.verify(token,"pravinApi", (err, decoded) => {
//             if (err) {
//                 RESPONSE.Failure.Message = StatusCode.UNAUTHORIZED.message;
//                 return res.status(StatusCode.UNAUTHORIZED.code).send(RESPONSE.Failure);
//             }
//             req.user_id = decoded.user_id;
//             next();
//         });
//     } catch (error) {
//         RESPONSE.Failure.Message = StatusCode.UNAUTHORIZED.message;
//         return res.status(StatusCode.UNAUTHORIZED.code).send(RESPONSE.Failure);
//     }
// };

// module.exports = isAuthenticated;


// middlewares/isAuthenticated.js
const jwt = require('jsonwebtoken');
const { StatusCode } = require("../constants/HttpStatusCode");
const RESPONSE = require("../constants/response");

const isAuthenticated = async (req, res, next) => {
  try {
    // Expecting header format: "Bearer <token>"
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      RESPONSE.Failure.Message = "Authorization header is missing.";
      return res.status(StatusCode.FORBIDDEN.code).send(RESPONSE.Failure);
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      RESPONSE.Failure.Message = "Token is missing.";
      return res.status(StatusCode.FORBIDDEN.code).send(RESPONSE.Failure);
    }

    // Verify the token using your secret key (replace "pravinApi" with your secret key from your environment variables ideally)
    jwt.verify(token, "goldStakeApi", (err, decoded) => {
      if (err) {
        RESPONSE.Failure.Message = "Invalid or expired token.";
        return res.status(StatusCode.UNAUTHORIZED.code).send(RESPONSE.Failure);
      }
      // Attach user information from the token payload to the request object.
      req.user = {
        user_id: decoded.user_id,
        userRole: decoded.userRole,
        userRoleId: decoded.userRoleId ?? null
      };
      next();
    });
  } catch (error) {
    RESPONSE.Failure.Message = "Unauthorized access.";
    return res.status(StatusCode.UNAUTHORIZED.code).send(RESPONSE.Failure);
  }
};

module.exports = isAuthenticated;
