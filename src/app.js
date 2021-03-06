const express = require("express");
const path = require('path');
const morgan = require('morgan');
// const { format } = require('timeago.js');
const dateFormat = require("dateformat");

const IndexRoutes = require("./routes/index");
const InfoRoutes = require("./routes/getinfo");

const app = express();

// Initialize...
app.set('port', 4698);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + "/views"));

// middlewares... function those ejects before become the routes 
app.use(morgan('dev'));
// Que express() pueda entender datos enviados por form. (extended:false Without images)
app.use(express.urlencoded({ extended: false }));

// Globals variables
app.use((req, res, next) => {
    // app.locals.format = format;
    app.locals.dformat = dateFormat;
    next();
});

// importing routes
app.use('/', IndexRoutes);
app.use('/', InfoRoutes);

// local variables
require('./database');

// Starting...
app.listen(app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}`);
});
