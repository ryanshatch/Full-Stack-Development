/*
 * - Developer: Ryan Hatch
 * - Date of development: 2024/28/11
Date of last modification: 2024/2/12
Version: 5.0
 * - Description: This file is the main entry point for the API routes. 
 *   It defines the routes for the trips API.  */

const express = require('express');
const tripsController = require('../controllers/trips');

const router = express.Router();

// Define routes
router
  .route('/trips')
  .get(tripsController.getTrips);

router
  .route('/trips/:code')
  .get(tripsController.getTripByCode);

module.exports = router;

// const express = require('express');
// const tripsController = require('../controllers/trips');

// const router = express.Router();

// // Define routes
// // router.get('/trips', tripsController.getTrips);

// // module.exports = router;
// router 
//     .route('/trips')
//     .get(tripsController.getTrips);

// module.exports = router;