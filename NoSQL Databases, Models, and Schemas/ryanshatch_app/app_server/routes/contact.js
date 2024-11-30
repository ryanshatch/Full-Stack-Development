/*
 * - Developer: Ryan Hatch
 * - Date of development: 2024/24/02
Date of last modification: 2024/24/10
Version: 3.0
*/

var express = require('express');
var router = express.Router();
const controller = require('../controllers/contact');

/* GET home page. */
router.get('/', controller.contact);

module.exports = router;