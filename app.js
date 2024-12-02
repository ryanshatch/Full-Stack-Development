//* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
/*
*Developer: Ryan Hatch
Date of development: 2024/24/11
*Date of last modification: 2024/27/11
Version: 5.0
*Description: The app.js file serves as the entry point for the application. 
              It is responsible for setting up the Express application,
              configuring the view engine, adding middleware, and adding routes to the application. 
//* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

var createError = require('http-errors'); // Add createError
var express = require('express');        // Add Express framework
var path = require('path');             // Add path module to work with file and directory paths
var hbs = require('hbs');              // Add Handlebars
var cookieParser = require('cookie-parser'); 
var logger = require('morgan');

//* Add routes to the application
var aboutRouter = require('./app_server/routes/about');         // Add routes to the about
var contactRouter = require('./app_server/routes/contact');    // Add routes to the contact
var indexRouter = require('./app_server/routes/index');       // Add routes to the index
var mealsRouter = require('./app_server/routes/meals');      // Add routes to the meals
var newsRouter = require('./app_server/routes/news');       // Add routes to the news
var roomsRouter = require('./app_server/routes/rooms');    // Add routes to the rooms
var travelRouter = require('./app_server/routes/travel'); // Add routes to the travel
var usersRouter = require('./app_server/routes/users');  // Add routes to the users
var apiRouter = require('./app_server/app_api/routes'); // Add routes to the API

// Repoint the db module
require('./app_server/app_api/models/db');

var app = express(); // Create an Express application

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views')); // Make sure views are in app_server/views
app.set('view engine', 'hbs');                                // Set Handlebars as the view engine

hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials')); 
hbs.registerPartials(path.join(__dirname, 'app_server', 'views/partials')); // Register partials directory

app.use(logger('dev'));                                       // Add logger helper function
app.use(express.json());                                     // Add helper function to parse JSON data
app.use(express.urlencoded({ extended: false }));           // Add middleware to parse URL-encoded data
app.use(cookieParser());                                   // Add cookie parser helper function
app.use(express.static(path.join(__dirname, 'public')));  // Add middleware to serve static files

app.use('/about', aboutRouter);         // Add about route to the application
app.use('/contact', contactRouter);    // Add contact route
app.use('/', indexRouter);            // Add index route
app.use('/meals', mealsRouter);      // Add meals route
app.use('/news', newsRouter);       // Add news route
app.use('/rooms', roomsRouter);    // Add rooms route
app.use('/travel', travelRouter); // Add travel route
app.use('/users', usersRouter);  // Add users route
app.use('/api', apiRouter);     // Add API route

// catch 404 and forward to error handler
app.use(function(req, res, next) { // Add error handler
  next(createError(404));         // Forward to error handler with 404 status
});

// error handler
app.use(function(err, req, res, next) {                                 // Add error handler
  res.locals.message = err.message;                                    // Set message
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // Set error

  res.status(err.status || 500); // Set status code to 500
  res.render('error');          // Render error page
});

module.exports = app;

//* Version 2.0 below:

// var createError = require('http-errors'); // Add createError
// var express = require('express');        // Add Express framework
// var path = require('path');             // Add path module to work with file and directory paths
// var hbs = require('hbs');              // Add Handlebars
// var cookieParser = require('cookie-parser'); 
// var logger = require('morgan');

// //* Add routes to the application
// var aboutRouter = require('./app_server/routes/about');         // Add routes to the about
// var contactRouter = require('./app_server/routes/contact');    // Add routes to the contact
// var indexRouter = require('./app_server/routes/index');       // Add routes to the index
// var mealsRouter = require('./app_server/routes/meals');      // Add routes to the meals
// var newsRouter = require('./app_server/routes/news');       // Add routes to the news
// var roomsRouter = require('./app_server/routes/rooms');    // Add routes to the rooms
// var travelRouter = require('./app_server/routes/travel'); // Add routes to the travel
// var usersRouter = require('./app_server/routes/users');  // Add routes to the users

// var app = express(); // Create an Express application

// // view engine setup
// app.set('views', path.join(__dirname, 'app_server', 'views')); // Make sure views are in app_server/views
// app.set('view engine', 'hbs');                                // Set Handlebars as the view engine

// hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials')); 
// hbs.registerPartials(path.join(__dirname, 'app_server', 'views/partials')); // Register partials directory

// app.use(logger('dev'));                                       // Add logger helper function
// app.use(express.json());                                     // Add helper function to parse JSON data
// app.use(express.urlencoded({ extended: false }));           // Add middleware to parse URL-encoded data
// app.use(cookieParser());                                   // Add cookie parser helper function
// app.use(express.static(path.join(__dirname, 'public')));  // Add middleware to serve static files

// app.use('/about', aboutRouter);         // Add about route to the application
// app.use('/contact', contactRouter);    // Add contact route
// app.use('/', indexRouter);            // Add index route
// app.use('/meals', mealsRouter);      // Add meals route
// app.use('/news', newsRouter);       // Add news route
// app.use('/rooms', roomsRouter);    // Add rooms route
// app.use('/travel', travelRouter); // Add travel route
// app.use('/users', usersRouter);  // Add users route

// // catch 404 and forward to error handler
// app.use(function(req, res, next) { // Add error handler
//   next(createError(404));         // Forward to error handler with 404 status
// });

// // error handler
// app.use(function(err, req, res, next) {                                 // Add error handler
//   res.locals.message = err.message;                                    // Set message
//   res.locals.error = req.app.get('env') === 'development' ? err : {}; // Set error

//   res.status(err.status || 500); // Set status code to 500
//   res.render('error');          // Render error page
// });

// module.exports = app;

//* VERSION ONE BELOW USING MODULE 01

// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;