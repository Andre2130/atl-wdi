
//requirements: require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

//create your donut schema:
const DonutSchema = new Schema({
    //write your schema fields here
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
    });

//export your donut with module.exports()

const DonutModel = mongoose.model("Donut", DonutSchema);


module.exports = DonutModel;
  