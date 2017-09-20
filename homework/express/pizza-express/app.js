//require express package
const express = require('express');
//save an express module as 'app'
const app     = express();
const hbs = require('hbs');
app.set('view engine', 'hbs')

const welcomeControler = require('./controller/welcome.js')
app.use('/', welcomeControler)
const toppingsControler = require('./controller/topping.js')
app.use('/topping', toppingsControler)
const orderControler = require('./controller/order.js')
app.use('/order', orderControler)


// assigning 3000 as our port
const port    = 3000;


// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});