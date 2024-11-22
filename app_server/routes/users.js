/*
Developer: Ryan Hatch
Date of development: 2024/24/02
Date of last modification: 2024/24/10
Description: Main entry point for the application. This file is used to set up the Express application and configure the routes and middleware that the application will use.
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
