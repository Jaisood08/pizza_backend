const UserValidation = require("../validators/UserValidator");
const UserServices = require("../services/UserServices");

module.exports.add = async (req, res, next) => {
  const valid = await UserValidation.add(req, res, next);
  if (valid.error) {
    res.status(401).send({ error: valid.error });
  } else {
    const data = await UserServices.add(req);
    res.status(200).send(data);
  }
};

module.exports.login = async (req, res, next) => {
  const valid = await UserValidation.login(req, res, next);
  if (valid.error) {
    res.status(401).send({ error: valid.error });
  } else {
    const data = await UserServices.login(req);
    res.status(200).send(data);
    // res.cookie("token", data.token, { httpOnly: true });
    // res.redirect("/");
  }
};
