/*
Developer: Ryan Hatch
Date of development: 2024/24/02
Date of last modification: 2024/24/10
Description: Main entry point for the application. This file is used to set up the Express application and configure the routes and middleware that the application will use.
*/

/* GET HOMEPAGE FUNCTION */

const index = (req, res) => {
    res.render('index', { title: 'Travlr Getaways' });
};

module.exports = {
    index
};