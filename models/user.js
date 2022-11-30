const mongoose = require("mongoose");

// Creating the Schema of Database
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  areacode: {
    type: String,
  },
  address: {
    type: String,
  },
  mobile: {
    type: String,
  },
  cart_id: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Creating model named Employee based on schema we defined
const User = new mongoose.model(process.env.MONGO_USERS, userSchema);

module.exports = User;
