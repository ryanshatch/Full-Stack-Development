/* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
*Developer: Ryan Hatch
Date of development: 11/24/2024
*Date of last modification: 12/12/2024
Version: 6.4
 * - Description: This is the seed file for the application. 
                  It is responsible for seeding the database with the initial data set.
//* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

// Bring in the DB connection and the Trip schema
const Mongoose = require("./db");
const Trip = require("./travlr");

//Read seed data from json file
var fs = require("fs");
var trips = JSON.parse(fs.readFileSync("./data/trips.json", "utf8"));

// delete any existing records, then insert seed data
const seedDB = async () => {
  await Trip.deleteMany({});
  await Trip.insertMany(trips);
};

//Close the MongoDB connection and exit
seedDB().then(async () => {
  await Mongoose.connection.close();
  process.exit(0);
});
