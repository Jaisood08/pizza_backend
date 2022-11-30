const User = require("../../models/user");
const Cart = require("../../models/cart");
const bcrypt = require("bcrypt");
var jsonwt = require("jsonwebtoken");

module.exports.add = async (req) => {
  const { name, email, password, areacode, address, mobile } = req.body;

  let checkUser = await User.find({ email: email });

  if (checkUser.length == 0) {
    const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT));
    const hashPassword = bcrypt.hashSync(password, salt);
    const CartId = await Cart.create({ CartList: [] });

    const userAdded = await User.create({
      name,
      email,
      password: hashPassword,
      areacode,
      address,
      mobile,
      cart_id: CartId.id,
    });
    console.log({
      name,
      email,
      password: hashPassword,
      areacode,
      address,
      mobile,
      cart_id: CartId.id,
    });
    console.log(userAdded);
    return { error: null, message: "Succesfully Added User" };
  } else {
    return { error: "User Already Exist Please Login" };
  }
};

module.exports.login = async (req) => {
  const { email, password } = req.body;

  const checkUser = await User.findOne({ email: email });

  if (checkUser.length == 0) {
    return { error: "User Does not Exist Please Signup" };
  } else {
    const Check = bcrypt.compareSync(password, checkUser.password);
    if (Check) {
      const payload = {
        id: checkUser.id,
        name: checkUser.name,
        email: checkUser.email,
      };
      const token = await jsonwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: parseInt(process.env.JWT_EXPIRE),
      });
      return {
        message: "Login Succesfull",
        name: checkUser.name,
        email: checkUser.email,
        areacode: checkUser.areacode,
        address: checkUser.address,
        mobile: checkUser.mobile,
        date: checkUser.data,
        token: token,
      };
    } else {
      return { error: "Incorrect Credientials" };
    }
  }
};
