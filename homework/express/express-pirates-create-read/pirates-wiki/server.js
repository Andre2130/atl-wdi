var express     = require('express');
var hbs         = require('hbs');
const bodyParser = require('body-parser');

var app         = express();
var port        = process.env.PORT || 3000;

const piratesController = require('./controllers/pirates.js')


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set("view engine", 'hbs');


app.use("/pirates", piratesController);

app.get('/', function(req,res) {
    res.send('This is our Home Page');
  });

app.listen(port, function() {
    console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
  });