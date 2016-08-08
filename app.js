var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var upload = require('./routes/upload.js');

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5000'
    // allowedHeaders: ['Cookie', 'Content-Type']
}));

app.use(bodyParser.json());
app.use('/', upload);

module.exports = app;
