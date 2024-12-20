/* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
*Developer: Ryan Hatch
Date of development: 11/24/2024
*Date of last modification: 12/12/2024
Version: 6.4
 * - Description: This is the controller for the Home page.
                  It contains the logic for rendering the Home page.  */
//* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

var express = require("express");
var router = express.Router();

/* GET home page. */
const ctrlMain = require("../controllers/main");

router.get("/", ctrlMain.index);

module.exports = router;
