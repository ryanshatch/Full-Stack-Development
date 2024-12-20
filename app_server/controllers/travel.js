/* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
*Developer: Ryan Hatch
Date of development: 11/24/2024
*Date of last modification: 12/12/2024
Version: 6.4
 * - Description: This is the controller for the Travel page.
                  It contains the logic for rendering the Travel page.  */
//* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

// GET Travel View
const tripsEndpoint = "http://localhost:3000/api/trips"; // API endpoint for trips
const options = {
  method: "GET", // GET request to the API
  headers: {
    Accept: "application/json", // Accept JSON response
  },
};

const travel = async function (req, res, next) {
  // console.log('TRAVEL CONTROLLER BEGIN");
  await fetch(tripsEndpoint, options)
    .then((res) => res.json())
    .then((json) => {
      let message = null;
      if (!(json instanceof Array)) {
        message = "API lookup error";
        json = [];
      } else {
        if (!json.length) {
          message = "No trips exist in our database!";
        }
      }
      res.render("travel", { title: "Travlr Getaways", trips: json, message });
    })
    .catch((err) => res.status(500).send(err.message));
};

module.exports = {
  travel,
};
