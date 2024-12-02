/*
 * - Developer: Ryan Hatch
 * - Date of development: 2024/24/11
Date of last modification: 2024/24/11
Version: 5.0
<><><><><><><>><><><><><><><><><><><><><><><><>><><><><><><><><><>
 * Description: This file defines the schema for the trips collection in the database.
 * Schema properties:
    -  code: A string that represents the code of the trip.
    -  name: A string that represents the name of the trip.
    -  length: A string that represents the length of the trip.
    -  start: A date that represents the start date of the trip.
    -  resort: A string that represents the specific resort of the trip.
    -  perPerson: A string that represents the cost per person of the trip.
    -  image: A string that represents the image of the trip.
    -  description: A string that represents the description of the trip.
<><><><><><><>><><><><><><><><><><><><><><><><>><><><><><><><><><>
*/

const mongoose = require('mongoose');

// Define the trip schema
const tripSchema = new mongoose.Schema({
 code: { type: String, required: true, index: true },
 name: { type: String, required: true, index: true },
 length: { type: String, required: true },
 start: { type: Date, required: true },
 resort: { type: String, required: true },
 perPerson: { type: String, required: true },
 image: { type: String, required: true },
 description: { type: String, required: true }
});

const Trip = mongoose.model('trips', tripSchema);

module.exports = Trip;