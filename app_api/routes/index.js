/* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
* Developer: Ryan Hatch
* Date of development: 11/24/2024
* Date of last modification: 12/12/2024
* Version: 6.4
* Description: JWT authentication middleware for securing routes and managing user sessions.
* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication");

// Middleware to check for a valid JWT in the Authorization header
function validateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        console.log("Authorization header is missing?");
        return res.sendStatus(401); // Unauthorized
    }
    let headers = authHeader.split(' ');
    if (headers.length < 1) {
        console.log("No token found in Authorization header. Wen more tokens?");
        return res.sendStatus(501); // Token error
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        console.log("Bearer token is missing.");
        return res.sendStatus(401); // Unauthorized
    }

    //* JWT verification using the JWT_SECRET code:
    const verified = jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err, verified) => {
        if (err) {
          return res.sendStatus(401).json("Token Validation Error!");
        }
        req.auth = verified; // Attach the decoded user to the request object
      }
    );
    next(); // Continue processing the request after token validation

    // * JWT verification using the JWT_SECRET code -1:
    // try {
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //     req.user = decoded; // Attach the decoded user to the request object
    //     next();
    // } catch (error) {
    //     console.log("Token verification failed:", error.message);
    //     res.sendStatus(403); // Forbidden
    // }
}

// User authentication and management routes
router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

router
  .route("/trips")
  .get(tripsController.tripsList)
  .post(validateToken, tripsController.tripsAddTrip);

router
  .route("/trips/:tripCode")
  .get(tripsController.tripsFindByCode)
  .put(validateToken, tripsController.tripsUpdateTrip);

module.exports = router;


// const jwt = require("jsonwebtoken");
// const express = require("express");
// const router = express.Router();

// const tripsController = require("../controllers/trips");
// const authController = require("../controllers/authentication");

// // authentication
// // TODO: add authentication middleware

// router
//   .route("/trips")
//   .get(tripsController.tripsList)
//   .post(tripsController.tripsAddTrip);

// router
//   .route("/trips/:tripCode")
//   .get(tripsController.tripsFindByCode)
//   .put(tripsController.tripsUpdateTrip);

// module.exports = router;
