/*
 * - Developer: Ryan Hatch
 * - Date of development: 2024/24/11
Date of last modification: 2024/24/11
Version: 4.0
<><><><><><><>><><><><><><><><><><><><><><><><>><><><><><><><><><>
 * Description: This file is used to seed the database with the data from the 'trips.json' file.
    - Import the database connection and the Trip model.
    - Read the seed data from a file being 'trips.json'.
    - Delete any existing records and then insert the seed data.
    - Close the database connection when done.
<><><><><><><>><><><><><><><><><><><><><><><><>><><><><><><><><><>
*/

//* Import the database connection and the Trip model.
const mongoose = require('./db');
const Trip = require('./travlr'); // The Trip model is imported from the 'travlr.js' file.

//* Read seed data from a file
const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8')); // The seed data is read from the 'trips.json' file.

//* Delete any existing records and then insert seed data.
const seedDB = async () => {
        await Trip.deleteMany({});     // Delete any existing records from the database.
        await Trip.insertMany(trips); // Insert the seed data into the database.
        console.log('Database seeded successfully'); 
        //* Log a message to the console showing that the database was seeded successfully.
}

//* Delete any existing records and then insert seed data to the database.
seedDB().then(async () => {             // 'seedDB()' is called and then the connection is closed.
    await mongoose.connection.close(); // Close the database connection.
    process.exit(0);                  // Exit the process.
}
//* If there is an error, it gets logged to the console and then the connection closes.
).catch(error => {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
});