/*
 * - Developer: Ryan Hatch
 * - Date of development: 2024/24/02
Date of last modification: 2024/24/10
Version: 3.0
*/

/* GET about view */
const about = (req, res) => {      // This is the function that will be called when the route is hit
    res.render('about', {         // This is the view that will be rendered
        title: 'Travlr Getaways' // This is the title of the page
    });
};

module.exports = {  // This exports the function so it can be used in the routes
    about
};