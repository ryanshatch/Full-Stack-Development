/* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
*Developer: Ryan Hatch
Date of development: 11/24/2024
*Date of last modification: 12/12/2024
Version: 7.1
*Description: The app.js file serves as the entry point for the application. 
              It is responsible for setting up the Express application,
              configuring the view engine, adding middleware, and adding routes to the application. 
//* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/
require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var handlebars = require("hbs");

var passport = require("passport");
require("./app_api/models/db");
require("./app_api/config/passport");

var indexRouter = require("./app_server/routes/index");
var usersRouter = require("./app_server/routes/users");
var travelRouter = require("./app_server/routes/travel");
var roomsRouter = require("./app_server/routes/rooms");
var newsRouter = require("./app_server/routes/news");
var mealsRouter = require("./app_server/routes/meals");
var contactRouter = require("./app_server/routes/contact");
var aboutRouter = require("./app_server/routes/about");
var apiRouter = require("./app_api/routes/index");

// require("./app_api/models/db");

var app = express();

// setting up view engine using handlebars and express
app.set("views", path.join(__dirname, "app_server", "views"));
handlebars.registerPartials(__dirname + "/app_server/views/partials");
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());

//* CORS  |  Cross-Origin Resource Sharing
// Defining the /api route for the web application to allow CORS
// app.use((req, res, next) => {
//   res.header(
//     "Content-Security-Policy",
//     "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self' http://localhost:4200;"
//   );
//   next();
// });

app.use("/api", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});


//* Second Try:
// app.use('/api', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   next();
// });

// app.use("/api", (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:4200");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   next();
// });

// Defining the routes for the web application using the Express Router
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/travel", travelRouter);
app.use("/rooms", roomsRouter);
app.use("/news", newsRouter);
app.use("/meals", mealsRouter);
app.use("/contact", contactRouter);
app.use("/about", aboutRouter);
app.use("/api", apiRouter);

// catch and forward 404 errors to the error handler
app.use(function (req, res, next) {
  next(createError(404));
});

//* error handler for the web application
app.use(function (err, req, res, next) {
  // set the local variables and render the error page for development and production environments
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Catch unauthorized error and create 401
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ message: err.name + ": " + err.message });
  }
});

// start the server by exporting the app module
module.exports = app;
