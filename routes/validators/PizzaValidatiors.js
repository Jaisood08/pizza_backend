module.exports.addToCart = async (req) => {
  const { pizzaId, quantity } = req.body;
  if (!pizzaId || !quantity) {
    return { error: "Submit all required parameters" };
  } else return { message: "Validation Pass" };
};

module.exports.MakePizza = async (req) => {
  const { ingredients, price, quantity = 1 } = req.body;
  if (!ingredients || !price || price < 0) {
    return { error: "Submit all required parameters" };
  }
  return { message: "Validation Pass" };
};
