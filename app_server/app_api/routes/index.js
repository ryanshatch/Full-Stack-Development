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