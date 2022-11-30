const mongoose = require("mongoose");

// Creating the Schema of Database
const cartSchema = new mongoose.Schema({
  CartList: {
    type: Array,
    required: true,
    default: [],
  },
});

// Creating model named Employee based on schema we defined
const Cart = new mongoose.model(process.env.MONGO_SHOPPING_CART, cartSchema);

module.exports = Cart;
