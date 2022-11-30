module.exports.add = async (req, res, next) => {
  const { name, email, password, areacode, address, mobile } = req.body;
  if (!name || !email || !password || !areacode || !address || !mobile) {
    return { error: "Submit all required parameters" };
  }
  return true;
};

module.exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return { error: "Submit all required parameters" };
  }
  return true;
};
