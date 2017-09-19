//require express package
const express = require('express');
//save an express module as 'app'
const app     = express();
const hbs = require('hbs');

app.get('/', (req, res) => {
    res.send("Welcome to Pizza Express!")
})
app.get('/topping/:type', (req, res, next) => {
    const type = req.params.type;
        res.send(`${type} pizza! Good choice.`);

 });
 app.get("/order/:amount/:size", (req, res, next) => {
    const amount = req.params.amount;
    const size = req.params.size;
    res.send(`${amount} ${size} pizza will be ready in 1 minute`)
 })


// assigning 3000 as our port
const port    = 3000;


// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});