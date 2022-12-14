const Pizzas = require("../../models/pizzas");
const Ingredients = require("../../models/ingredients");
const Cart = require("../../models/cart");

module.exports.DisplayAll = async () => {
  const Data = await Pizzas.find({});
  return Data;
};

module.exports.DisplayAllIngredients = async () => {
  const Data = await Ingredients.find({});
  return Data;
};

module.exports.addToCart = async (req) => {
  const { pizzaId, quantity } = req.body;
  let FindCart = await Cart.findById(req.user.cart_id);
  if (!FindCart) {
    FindCart = await Cart.create({ _id: req.user.cart_id, CartList: [] });
  }

  const pizza = FindCart.CartList.findIndex((e) => e.pizzaId == pizzaId);
  if (pizza != -1) {
    FindCart.CartList[pizza].quantity = quantity;
  } else {
    FindCart.CartList.push({ pizzaId: pizzaId, quantity: quantity });
  }
  console.log("CartSaved", FindCart);
  FindCart.markModified("CartList");
  const CartSaved = await FindCart.save();
  console.log("CartSaved", CartSaved);
  return CartSaved;
};

module.exports.removeCart = async (req) => {
  const { pizzaId } = req.body;
  let FindCart = await Cart.findById(req.user.cart_id);
  if (!FindCart) {
    FindCart = await Cart.create({ _id: req.user.cart_id, CartList: [] });
  }
  const pizza = FindCart.CartList.findIndex((e) => e.pizzaId == pizzaId);
  if (pizza != -1) {
    FindCart.CartList.splice(pizza, 1);
  } else {
  }
  const CartSaved = await FindCart.save();
  console.log("CartSaved", CartSaved);
  return CartSaved;
};

module.exports.showCart = async (req) => {
  let FindCart = await Cart.findById(req.user.cart_id);
  if (!FindCart) {
    FindCart = await Cart.create({ _id: req.user.cart_id, CartList: [] });
  }
  let data = [];

  for (let i = 0; i < FindCart.CartList.length; i++) {
    if (!FindCart.CartList[i].pizzaId) {
      data.push({
        pizza: FindCart.CartList[i].pizza,
        quantity: FindCart.CartList[i].quantity,
        customize: FindCart.CartList[i].customize || [],
      });
    } else {
      const pizza = await Pizzas.findById(FindCart.CartList[i].pizzaId);
      data.push({
        pizza,
        quantity: FindCart.CartList[i].quantity,
        customize: FindCart.CartList[i].customize || [],
      });
    }
  }
  return data;
};

module.exports.MakePizza = async (req) => {
  const { ingredients, price, quantity = 1 } = req.body;

  let FindCart = await Cart.findById(req.user.cart_id);
  if (!FindCart) {
    FindCart = await Cart.create({ _id: req.user.cart_id, CartList: [] });
  }

  FindCart.CartList.push({
    pizza: { name: "Custom Pizza", ingredients, price },
    quantity: quantity,
  });
  const CartSaved = await FindCart.save();
  console.log("CartSaved", CartSaved);
  return CartSaved;
};

module.exports.addIngredients = async (req) => {
  const { pizzaId, ingredients } = req.body;
  let FindCart = await Cart.findById(req.user.cart_id);
  if (!FindCart) {
    FindCart = await Cart.create({ _id: req.user.cart_id, CartList: [] });
  }

  const pizza = FindCart.CartList.findIndex((e) => e.pizzaId == pizzaId);
  if (pizza != -1) {
    FindCart.CartList[pizza].customize = ingredients;
  } else {
    FindCart.CartList.push({
      pizzaId: pizzaId,
      quantity: 1,
      customize: ingredients,
    });
  }
  console.log("CartSaved", FindCart);
  FindCart.markModified("CartList");
  const CartSaved = await FindCart.save();
  console.log("CartSaved", CartSaved);
  return CartSaved;
};
