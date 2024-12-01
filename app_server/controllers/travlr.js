/*
 * - Developer: Ryan Hatch
 * - Date of development: 2024/24/11
Date of last modification: 2024/24/11
Version: 4.0
 * - Description: this file contains the controller functions for the travel routes, which is used to render the travel page view.
*/

var fs = require('fs');                                                 // Require the fs module
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));  // Read the trips.json file and parse it into a JavaScript object

/* GET travel view */
const travel = (req, res) => {        // Create a function called travel that takes in a request and response object
    res.render('travel', {           // Render the travel view
        title: 'Travlr Getaways',   // Set the title of the view
        trips                      // Pass the trips object to the view
    });
};

module.exports = {
    travel
};

//* Version 2.0 old version below

// /* GET 'travel' page */
// const fs = require('fs');
// const path = require('path');

// const travel = (req, res) => {
//     const tripsFilePath = path.join(__dirname, '../../data/trips.json');
//     fs.readFile(tripsFilePath, 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Error reading trips data');
//             return;
//         }
//         const trips = JSON.parse(data);
//         res.render('travel', { title: 'Travlr Getaways', trips });
//     });
// };

// module.exports = {
//     travel
// };

//* <><><><><><><><><><>
//* Version 1.0.0 Below:

// const travel = (req, res) => {
//     res.render('travel', { title: 'Travlr Getaways' });
// };

// module.exports = {
//     travel
// };