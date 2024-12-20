/* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
*Developer: Ryan Hatch
Date of development: 11/24/2024
*Date of last modification: 12/12/2024
Version: 6.4
 * - Description: This is the controller for the Rooms page.
                  It contains the logic for rendering the Rooms page.  */
//* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* GET Rooms View */
const rooms = (req, res) => {
  res.render("rooms", { title: "Travlr Getaways" });
};

module.exports = {
  rooms,
};
