//===========================
// REQUIREMENTS
//===========================
var express = require("express");
var app = express();
//var logger = require("morgan");
var bodyParser = require("body-parser");
var hbs = require('hbs');
var methodOverride = require('method-override');


//===========================
// MIDDLEWARE
//===========================
//this is for morgan
//app.use(logger("dev"));
//these are for bodyParser
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//set handlebars as view engine
app.set("view engine", "hbs");
app.set('views', './views');

//===========================
// CONTROLLERS
//===========================

//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);

app.get('/', function(req,res) {
    res.send('This is our Home Page');
  });
//===========================
// LISTENERS
//===========================
app.listen(3000, function(req, res){
	console.log("listening");
});