const express = require("express");
const router = express.Router();
const PizzaController = require("../controller/PizzaController");
const { Authenticate } = require("../auth/auth");

// Get list of all pizzas from DB
// @type    Get
// @route   /api/pizza/getAll
// @desc    return all pizzas from db
// @access  PUBLIC
// @require
router.get("/getAll", PizzaController.DisplayAll);

// Get list of all pizzas from DB
// @type    Get
// @route   /api/pizza/getAll
// @desc    return all pizzas from db
// @access  PUBLIC
// @require
router.get("/getAllIngredients", PizzaController.DisplayAllIngredients);

// Get list of all pizzas from DB
// @type    Get
// @route   /api/pizza/addToCart
// @desc    return all pizzas from db
// @access  PRIVATE
// @require
router.post("/addToCart", PizzaController.addToCart);

// Get list of all pizzas from DB
// @type    Get
// @route   /api/pizza/showCart
// @desc    return all pizzas from db
// @access  PRIVATE
// @require
router.get("/showCart", PizzaController.showCart);

// Get list of all pizzas from DB
// @type    post
// @route   /api/pizza/MakePizza
// @desc    return all pizzas from db
// @access  PRIVATE
// @require
router.get("/MakePizza", PizzaController.MakePizza);

router.post("/removeCart", PizzaController.removeCart);

router.post("/addIngredients", PizzaController.addIngredients);

module.exports = router;
