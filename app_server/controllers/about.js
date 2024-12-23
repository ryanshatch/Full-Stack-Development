/* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
*Developer: Ryan Hatch
Date of development: 11/24/2024
*Date of last modification: 12/12/2024
Version: 7.1
 * - Description: This is the controller for the About page.
                  It contains the logic for rendering the About page.  */
//* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* GET About View */
const about = (req, res) => {
  res.render("about", { title: "Travlr Getaways" });
};

module.exports = {
  about,
};
