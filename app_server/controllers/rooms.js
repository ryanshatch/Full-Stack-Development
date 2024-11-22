/*
 * - Developer: Ryan Hatch
 * - Date of development: 2024/24/02
Date of last modification: 2024/24/10
Version: 3.0
*/

var fs = require('fs');
var room = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));


/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', {
        title: 'Travlr Getaways',
        room
    });
};

module.exports = {
    rooms
};