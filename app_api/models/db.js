/* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
*Developer: Ryan Hatch
Date of development: 11/24/2024
*Date of last modification: 12/12/2024
Version: 7.1
 * - Description: This is the database connection file for the application.
   - JSON Web Token (JWT):
   
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzY0ZWRjMWRlMGNkZThmMjIyOGRjYjIiLCJlbWFpbCI6InJ5YW5zaGF0Y2hAZ21haWwuY29tIiwibmFtZSI6InJ5YW4iLCJpYXQiOjE3MzQ2Njc3MTMsImV4cCI6MTczNDY3ODUxM30.1hM7EZL5wXTetYRLUCEmO4VYl-rlFnVclqP8GvIYzLU"

   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzY0ZWRjMWRlMGNkZThmMjIyOGRjYjIiLCJlbWFpbCI6InJ5YW5zaGF0Y2hAZ21haWwuY29tIiwibmFtZSI6InJ5YW4iLCJpYXQiOjE3MzQ2Njg0NzMsImV4cCI6MTczNDY3OTI3M30.42h5yCr28-GdI6rWJZ_x7GXyiKwsXcX4uG5ULigPwUk
   
//* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

const mongoose = require("mongoose");
const readLine = require("readline");
const Trip = require('./travlr');
const path = require('path');

const tripsFilePath = path.join(__dirname, '../data/trips.json');

const uri = "mongodb+srv://ryanshatch:banana404@cluster0.ohvap.mongodb.net/travlr?retryWrites=true&w=majority";
const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

const connect = async () => {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error("Mongoose connection error: ", err);
  }
};

mongoose.connection.on("connected", () => {
  console.log(`Mongoose connected to ${uri}`);
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error: ", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

if (process.platform === "win32") {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("SIGINT", () => {
    process.emit("SIGINT");
  });
}

const gracefulShutdown = (msg) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    process.exit(0);
  });
};

// Nodemon restarts
process.once("SIGUSR2", () => {
  gracefulShutdown("nodemon restart");
});

// App termination
process.on("SIGINT", () => {
  gracefulShutdown("app termination");
});

process.on("SIGTERM", () => {
  gracefulShutdown("app shutdown");
});

// Connect to the database
connect();

// Bring in schema
require("./travlr");

module.exports = mongoose;

/*
// const mongoose = require("mongoose");
// const host = process.env.DB_HOST || "cluster0-shard-00-02.ohvap.mongodb.net:27017";
// const dbURI = `mongodb+srv://ryanshatch:<db_password>@cluster0.ohvap.mongodb.net/travlr?retryWrites=true&w=majority&appName=Cluster0`;
// const readLine = require("readline");

// const connect = () => {
//   setTimeout(() => mongoose.connect(dbURI, {}), 1000);
// };

// mongoose.connection.on("connected", () => {
//   console.log(`Mongoose connected to ${dbURI}`);
// });

// mongoose.connection.on("error", (err) => {
//   console.log("Mongoose connection error: ", err);
// });

// mongoose.connection.on("disconnected", () => {
//   console.log("Mongoose disconnected");
// });

// if (process.platform == "win32") {
//   const rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   rl.on("SIGINT", () => {
//     process.emit("SIGINT");
//   });
// }

// const gracefulShutdown = (msg) => {
//   mongoose.connection.close(() => {
//     console.log(`Mongoose disconnected through ${msg}`);
//   });
// };

// // nodemon restarts
// process.once("SIGUSR2", () => {
//   gracefulShutdown("nodemon restart", () => {
//     process.kill(process.pid, "SIGUSR2");
//   });
// });

// // app termination
// process.on("SIGINT", () => {
//   gracefulShutdown("app termination", () => {
//     process.exit(0);
//   });
// });

// process.on("SIGTERM", () => {
//   gracefulShutdown("app shutdown", () => {
//     process.exit(0);
//   });
// });

// connect();

// // bring in schema
// require("./travlr");

// module.exports = mongoose; */