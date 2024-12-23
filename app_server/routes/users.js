/* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
*Developer: Ryan Hatch
Date of development: 11/24/2024
*Date of last modification: 12/12/2024
Version: 7.1
 * - Description: This is the controller for the Users page.
                  It contains the logic for rendering the Users page.  */
//* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
