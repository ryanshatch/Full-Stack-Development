/* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
*Developer: Ryan Hatch
Date of development: 11/24/2024
*Date of last modification: 12/12/2024
Version: 7.1
 * - Description: This is the controller for the Meals page.
                  It contains the logic for rendering the Meals page.  */
//* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* GET Meals View */
const meals = (req, res) => {
  res.render("meals", { title: "Travlr Getaways" });
};

module.exports = {
  meals,
};
