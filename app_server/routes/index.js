/*
Developer: Ryan Hatch
Date of development: 2024/24/02
Date of last modification: 2024/24/10
Description: Main entry point for the application. This file is used to set up the Express application and configure the routes and middleware that the application will use.
*/

const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main');
const travlrController = require('../controllers/travlr');

router.get('/', mainController.index);
router.get('/travel', travlrController.travel);

module.exports = router;

/*
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/