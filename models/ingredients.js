const mongoose = require("mongoose");

// Creating the Schema of Database
const ingedientsSchema = new mongoose.Schema({
  tname: String,
  price: Number,
  image: String,
});

// Creating model named Employee based on schema we defined
const Ingedients = new mongoose.model(
  process.env.MONGO_INGREDIENTS,
  ingedientsSchema
);

module.exports = Ingedients;
