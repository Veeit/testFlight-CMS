// Require some things
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose');

// Setup some things
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.listen(process.env.PORT || 8081)

// Set Database
mongoose.connect('mongodb://localhost:27017/');
const db = mongoose.connection;
const dbPosts = db.useDb('posts');
const dbModules = db.useDb('modules');

// Try to connect to Database
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
  console.log("Connection Succeeded");
});

// Import routes
require('./routes/page.js')(app, dbModules);
