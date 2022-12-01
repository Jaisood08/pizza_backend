module.exports.addToCart = async (req) => {
  const { pizzaId, quantity } = req.body;
  if (!pizzaId || !quantity) {
    return { error: "Submit all required parameters" };
  } else return { message: "Validation Pass" };
};

module.exports.MakePizza = async (req) => {
  const { ingredients } = req.body;
  if (!ingredients) {
    return { error: "Submit all required parameters" };
  }
  return { message: "Validation Pass" };
};
