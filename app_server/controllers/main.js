/*
 * - Developer: Ryan Hatch
 * - Date of development: 2024/24/11
Date of last modification: 2024/24/11
Version: 5.0
 * - Description: this file contains the controller functions for the main routes of the application. 
        - The index function is used to render the homepage view.
*/

var fs = require('fs');
var blogposts = JSON.parse(fs.readFileSync('./data/blog-posts.json', 'utf8'));
var pages = JSON.parse(fs.readFileSync('./data/pages.json', 'utf8'));
var testimonials = JSON.parse(fs.readFileSync('./data/testimonials.json', 'utf8'));


/* GET homepage*/
const index = (req, res) => {
    res.render('index', { 
        title: 'Travlr Getaways',
        blogposts,
        pages,
        testimonials
    });
};

module.exports = {
    index
};

// /* GET HOMEPAGE FUNCTION */

// const index = (req, res) => {
//     res.render('index', { title: 'Travlr Getaways' });
// };

// module.exports = {
//     index
// };