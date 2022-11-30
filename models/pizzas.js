const mongoose = require("mongoose");

// Creating the Schema of Database
const pizzasSchema = new mongoose.Schema({
  id: String,
  type: String,
  price: Number,
  name: String,
  image: String,
  description: String,
  ingredients: Array,
  topping: Array,
});

// Creating model named Employee based on schema we defined
const Pizzas = new mongoose.model(process.env.MONGO_PIZZAS, pizzasSchema);

module.exports = Pizzas;
