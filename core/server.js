// const library
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const chalk = require('chalk');
// const ejs = require('ejs');
// const favicon = require('serve-favicon');
const port = 3000,
  app = express();

// Connect Database
require('./database.js');

// Set favicon
// app.use(favicon(path.join(__dirname, '../dist', 'favicon.ico')));

// View Engine
// app.set('views', path.join(__dirname, '../dist'));
// app.set('view engine', 'ejs');
// app.engine('html', ejs.renderFile);

// Set static folder
// app.use(express.static(path.join(__dirname, '../dist')));
// app.use(express.static(path.join(__dirname, '../src')));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(morgan('dev'));

// Define Route
app.use('/api', require('../routes/api'));

// Server connect
app.listen(port, () => {
    console.log(chalk.green(`Server started on port ${port}`));
});

module.exports = app;