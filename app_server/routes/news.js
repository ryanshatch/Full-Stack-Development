/* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
*Developer: Ryan Hatch
Date of development: 11/24/2024
*Date of last modification: 12/12/2024
Version: 6.4
 * - Description: This is the controller for the News page.
                  It contains the logic for rendering the News page.  */
//* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

var express = require("express");
var router = express.Router();
const controller = require("../controllers/news");

/* GET news page. */
router.get("/", controller.news);

module.exports = router;
