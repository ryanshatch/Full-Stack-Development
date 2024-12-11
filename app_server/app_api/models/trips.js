/*
 * - Developer: Ryan Hatch
 * - Date of development: 2024/28/11
Date of last modification: 2024/2/12
Version: 5.0
 * - Description: This is the model for the trips API. It defines the schema for the trips collection.  */

//* Schema for the trips collection
const mongoose = require('mongoose');

//* Defining the collection via the name, destination, and date fields along with their types and requirements.
const tripSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

//* Exporting the model to use in the controller and routes.
const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;