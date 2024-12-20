/* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
*Developer: Ryan Hatch
Date of development: 11/24/2024
*Date of last modification: 12/12/2024
Version: 6.4
 * - Description: This file defines the schema for the trips collection in the MongoDB database:
                  It exports the Trip model, which is used to interact with the database.
                  The schema defines the fields for each trip record. 
                  *The code field is a string that holds the unique code for the trip to be searched.
                  The name, length, start, resort, perPerson, image, and descriptions are required for each trip.   
//* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

const mongoose = require("mongoose");

// Define the trip schema
const tripSchema = new mongoose.Schema({
  code: { type: String, required: true, index: true },
  name: { type: String, required: true, index: true },
  length: { type: String, required: true },
  start: { type: Date, required: true },
  resort: { type: String, required: true },
  perPerson: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});
const Trip = mongoose.model("trips", tripSchema);
module.exports = Trip;
