var jsonwt = require("jsonwebtoken");
const User = require("../../models/user");

module.exports.Authenticate = async (req, res, next) => {
  console.log(req.headers.authorization);
  if (req.headers.authorization) {
    try {
      const decode = jsonwt.verify(
        req.headers.authorization.substring(7),
        process.env.JWT_SECRET
      );
      console.log(decode);
      const findUser = await User.findById(decode.id);
      if (!findUser) return { error: "Authentication Failed" };
      req.user = findUser;
      console.log("USER", findUser);
    } catch (e) {
      return { error: e };
    }

    return { message: "Authetication Sucess" };
  } else {
    return { error: "Authentication key not found" };
  }
};
