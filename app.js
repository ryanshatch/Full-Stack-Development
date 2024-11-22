//* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
/*
*Developer: Ryan Hatch
Date of development: 2024/24/02
*Date of last modification: 2024/24/10
Version: 2.0
*Description: Main entry point for the application. This file is used to set up the Express application-
* and configure the routes and middleware that the application will use.
//* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

- Restructure the application to use the MVC pattern by creating a new folder tree structure and organizing existing files as the following tree structure:
*   - app.js
  | - The main entry point for the application.
*   - app_server
  | - Contains server-side code for the application.
* |   - controllers
  |   | - Holds controller functions for the application.
* |   - models
  |   | - Contains data models for the application.
* |   - routes
  |   | - Defines route handlers for the application.
* |   - views
  |   | - Stores view templates for server-side rendering.

* - public
  | - Contains static files like CSS, JavaScript, and images.
* - views
  | - Stores view templates for client-side rendering.
* - routes
  | - Defines the route definitions for the application.
*/
//* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

var createError = require('http-errors');        // Add createError
var express = require('express');               // Add Express framework
var path = require('path');                    // Add path for file paths
var hbs = require('hbs');                     // Add Handlebars
var cookieParser = require('cookie-parser'); // Add cookie parser
var logger = require('morgan');             // Add Morgan for logging


var indexRouter = require('./app_server/routes/index');  // Add routes for index
var usersRouter = require('./app_server/routes/users'); // Add routes for users

var app = express();                                  // Create Express app

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));   // Make sure the views are in app_server/views
app.set('view engine', 'hbs');                                  // Set Handlebars as the view engine

// app.set('views', path.join(__dirname, 'app_server', 'views')); 
// app.set('view engine', 'hbs');

// Register partials for Handlebars in app_server/views/partials folder
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

app.use(logger('dev'));                                       // Use Morgan for logging
app.use(express.json());                                     // Use JSON
app.use(express.urlencoded({ extended: false }));           // Use URL encoding
app.use(cookieParser());                                   // Use cookie parser
app.use(express.static(path.join(__dirname, 'public')));  // Use public folder for static files

app.use('/', indexRouter);       // Use index router for /
app.use('/users', usersRouter); // Use users router for /users

// catch 404 and forward to error handler
app.use(function(req, res, next) {  // Catch 404 errors
  next(createError(404));          // Create 404 error
});

// error handler
app.use(function(err, req, res, next) {                                 // Error handler function
  res.locals.message = err.message;                                    // Set message to error message
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // Set error to error message

  res.status(err.status || 500);  // Set status to error status or 500
  res.render('error');           // Render error page with the error message
}); 

module.exports = app;

// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
//*                         VERSION ONE BELOW USING MODULE 01
// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

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
//   // set locals
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
