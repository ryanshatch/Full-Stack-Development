/*
 * - Developer: Ryan Hatch
 * - Date of development: 2024/28/11
Date of last modification: 2024/2/12
Version: 5.0
 * - Description: This is the controller for the trips API. It contains the functions to retrieve all trips and a single trip by code.  */

const mongoose = require('mongoose');
const Trip = require('../models/trips');

// Controller to retrieve all trips
exports.getTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to retrieve a single trip by code
exports.getTripByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.code });
    if (trip) {
      res.status(200).json(trip);
    } else {
      res.status(404).json({ message: 'Trip not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// // Controller to retrieve all trips
// exports.getTrips = async (req, res) => {
//   try {
//     const trips = await Trip.find();
//     res.status(200).json(trips);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };