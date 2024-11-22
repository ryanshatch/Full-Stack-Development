/*
 * - Developer: Ryan Hatch
 * - Date of development: 2024/24/02
Date of last modification: 2024/24/10
Version: 3.0
*/

var fs = require('fs');
var newsposts = JSON.parse(fs.readFileSync('./data/news-posts.json', 'utf8'));
var vacationTips = JSON.parse(fs.readFileSync('./data/vacation-tips.json', 'utf8'));
var latest = JSON.parse(fs.readFileSync('./data/latest.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', {
        title: 'Travlr Getaways',
        newsposts,
        vacationTips,
        latest
    });
};

module.exports = {
    news
};