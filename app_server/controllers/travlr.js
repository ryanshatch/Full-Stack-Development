/*
 * - Developer: Ryan Hatch
 * - Date of development: 2024/24/11
Date of last modification: 2024/24/11
Version: 5.0
 * - Description: this file contains the controller functions for the travel routes, which is used to render the travel page view.
*/

// Use Get method with API to get the trips data
const tripsEndpoint = 'http://localhost:3000/api/trips'; // Define the endpoint for the trips API
const options = {                                                  // Define the options for the fetch request
    method: 'GET',
    headers: { 
        'Accept': 'application/json'
    }                        
};

//* Uncomment the code below to use the fs module to read the trips.json file and parse it into a JavaScript object instead of using the fetch API.
// var fs = require('fs');                                                 // Require the fs module
// var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));  // Read the trips.json file and parse it into a JavaScript object

const travel = (req, res) => {
    fetch(tripsEndpoint, options)
        .then(res => res.json())
        .then(json => {
            res.render('travel', { title: 'Travlr Getaways', trips: json });
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
        });
};

module.exports = {
    travel
};

/* GET travel view */
// const travel = async (req, res) => {  // Create an async function called travel that takes in a request and response object
//     try {
//         const response = await fetch(tripsEndpoint, options);  // Await the fetch request to the trips API
//         const trips = await response.json();  // Await the response and parse it as JSON
//         res.render('travel', {                // Render the travel view
//             title: 'Travlr Getaways',         // Set the title of the view
//             trips                             // Pass the trips object to the view
//         });
//     } catch (error) {
//         console.error(error);                 // Log any errors
//         res.status(500).send('Error fetching trips data');  // Send a 500 status and error message
//     }
// };

// module.exports = {
//     travel
// };

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