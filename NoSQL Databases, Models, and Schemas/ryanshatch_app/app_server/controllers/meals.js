/*
 * - Developer: Ryan Hatch
 * - Date of development: 2024/24/02
Date of last modification: 2024/24/10
Version: 3.0
*/

var fs = require('fs');
var mealposts = JSON.parse(fs.readFileSync('./data/meal-posts.json', 'utf8'));


/* GET meals view */
const meals = (req, res) => {
    res.render('meals', {
        title: 'Travlr Getaways',
        mealposts
    });
};

module.exports = {
    meals
};