/*
 * - Developer: Ryan Hatch
 * - Date of development: 2024/24/11
Date of last modification: 2024/24/11
Version: 4.0
*/

const express = require('express');
const router = express.Router();
const travlrController = require('../controllers/travlr');

router.get('/', travlrController.travel);

module.exports = router;