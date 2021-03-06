var express = require('express');
var hbs = require('hbs');
const bodyParser  =require('body-parser');
var methodOverride = require('method-override');



/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
const todontsController = require('./controller/todonts')
app.use(bodyParser.urlencoded({extended: true}))

/**Logs */
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}))


/* VIEWS */
app.set("view engine", 'hbs')

/* controllers */ 
app. use("/todonts", todontsController);

/**Home */
app.get('/', function(req,res) {
    res.send('This is our Home Page');
  });

// Start server
app.listen(port, function() {
    console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
  });