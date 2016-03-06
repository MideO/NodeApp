'use strict';
var express = require('express');
var routes = require('./routes.js');


var app = express();

app.set('view engine', 'ejs');
app.use('/', routes);
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.listen(3000, function () {console.log('App is running on port 3000');});
//require('request').get("http://0.0.0.0:3000",function callback(){});
module.exports.getNodeApp = app;


