
//requirements: require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

//create your donut schema:
var DonutSchema = new Schema({
    //write your schema fields here
    name: "Chocolate Donut",
    description: "I am a chocolate donut.",
    img: "http://cdn.phillymag.com/wp-content/uploads/2013/09/donut.png",
    price: 5,
    qty: 99
    });

//export your donut with module.exports()

var DonutModel = mongoose.model("Donut", DonutSchema);


module.exports = {
    Donut: DonutModel
  };