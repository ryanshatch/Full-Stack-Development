/*
 * - Developer: Ryan Hatch
 * - Date of development: 2024/24/11
Date of last modification: 2024/24/11
Version: 4.0
*/

/* GET contact view */
const contact = (req, res) => {
    res.render('contact', {
        title: 'Travlr Getaways'
    });
};

module.exports = {
    contact
};