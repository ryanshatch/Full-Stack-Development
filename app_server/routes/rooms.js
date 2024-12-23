/* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
*Developer: Ryan Hatch
Date of development: 11/24/2024
*Date of last modification: 12/12/2024
Version: 7.1
 * - Description: This is the controller for the Rooms page.
                  It contains the logic for rendering the Rooms page.  */
//* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

var express = require("express");
var router = express.Router();
const controller = require("../controllers/rooms");

/* GET rooms page. */
router.get("/", controller.rooms);

module.exports = router;
