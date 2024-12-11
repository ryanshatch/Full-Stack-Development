/*
 * - Developer: Ryan Hatch
 * - Date of development: 2024/24/11
Date of last modification: 2024/24/11
Version: 5.0
 * - Description: this file contains the controller functions for the travel routes, which is used to render the travel page view.
 */

var express = require('express');  // Import the express library
var router = express.Router();    // Create a new router object

/* GET users listing. */
router.get('/', function(req, res, next) { // Define a new route for the root URL
  res.send('respond with a resource');    // Send a response to the client
});

module.exports = router;                // Export the router object