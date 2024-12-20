/*
 * - Developer: Ryan Hatch
 * - Date of development: 2024/24/11
Date of last modification: 2024/24/11
Version: 4.0
 * - Description: this file contains the controller functions for the main routes of the website.
*/

const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main');
const travlrController = require('../controllers/travlr');

router.get('/', mainController.index);
router.get('/travel', travlrController.travel);

module.exports = router;