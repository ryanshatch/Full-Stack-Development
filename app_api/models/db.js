/*
 * - Developer: Ryan Hatch
 * - Date of development: 2024/24/11
Date of last modification: 2024/24/11
Version: 5.0
<><><><><><><>><><><><><><><><><><><><><><><><>><><><><><><><><><>
 * Description: This file is the database connection file for the Travlr app. 
It connects to the MongoDB database and sets up the connection events and listeners for graceful shutdowns.
<><><><><><><>><><><><><><><><><><><><><><><><>><><><><><><><><><>
*/

const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://ryanshatch:Rc2782765@cluster0.ohvap.mongodb.net/';
const readLine = require('readline');

//* Build the connection string and set the connection timeout.
// timeout is in milliseconds.
const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {
    }), 1000);
}

// Monitor connection events
mongoose.connection.on('connected', () => {
 console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
 console.log('Mongoose connection error: ', err);
});
mongoose.connection.on('disconnected', () => {
 console.log('Mongoose disconnected');
});

// Windows specific listner
if(process.platform === 'win32'){
    const r1 = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
 r1.on('SIGINT', () => {
    process.emit("SIGINT");
    });
}

// Configure for Graceful Shutdown
const gracefulShutdown = (msg) => {
    mongoose.connection.close(() => {
 console.log(`Mongoose disconnected through ${msg}`);
    });
};

//* Event Listeners to process graceful shutdowns
// Shutdown invoked by nodemon signal
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart');
    process.kill(process.pid, 'SIGUSR2');
});

// Shutdown invoked by app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination');
    process.exit(0);
});

// Shutdown invoked by container termination
process.on('SIGTERM', () => {
    gracefulShutdown('app shutdown');
    process.exit(0);
});

// Make initial connection to DB
connect();

// Import Mongoose schema
require('./travlr');
module.exports = mongoose;