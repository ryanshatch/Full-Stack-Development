// FILE: models/trip.js
const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  // Define your schema fields here
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
  // Add other fields as needed
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;