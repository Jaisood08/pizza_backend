const PizzaServices = require("../services/PizzaServices");
const PizzaValidation = require("../validators/PizzaValidatiors");
const { Authenticate } = require("../auth/auth");

module.exports.DisplayAll = async (req, res, next) => {
  const data = await PizzaServices.DisplayAll();
  if (data.length != 0) {
    res.status(200).send({ error: null, data: data });
  } else {
    res.status(500).send({ error: true });
  }
};

module.exports.DisplayAllIngredients = async (req, res, next) => {
  const data = await PizzaServices.DisplayAllIngredients();
  if (data.length != 0) {
    res.status(200).send({ error: null, data: data });
  } else {
    res.status(500).send({ error: true });
  }
};

module.exports.addToCart = async (req, res, next) => {
  const valid = await PizzaValidation.addToCart(req, res, next);
  if (valid.error) return res.status(401).send({ error: valid.error });

  const Auth = await Authenticate(req, res, next);
  if (Auth.error) return res.status(401).send({ error: Auth.error });

  const data = await PizzaServices.addToCart(req);
  if (data.length != 0) {
    res.status(200).send({ error: null, data: data });
  } else {
    res.status(500).send({ error: true });
  }
};

module.exports.showCart = async (req, res, next) => {
  const Auth = await Authenticate(req, res, next);
  if (Auth.error) return res.status(401).send({ error: Auth.error });

  const data = await PizzaServices.showCart(req);
  if (data.length != 0) {
    res.status(200).send({ error: null, data: data });
  } else {
    res.status(500).send({ error: true });
  }
};

module.exports.MakePizza = async (req, res, next) => {
  const valid = await PizzaValidation.MakePizza(req, res, next);
  if (valid.error) return res.status(401).send({ error: valid.error });

  const Auth = await Authenticate(req, res, next);
  if (Auth.error) return res.status(401).send({ error: Auth.error });

  const data = await PizzaServices.MakePizza(req);
  if (data.length != 0) {
    res.status(200).send({ error: null, data: data });
  } else {
    res.status(500).send({ error: true });
  }
};
