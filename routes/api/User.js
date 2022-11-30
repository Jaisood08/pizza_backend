const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");

// Sign up User
// @type    Get
// @route   /api/user/add
// @desc    return Addition of two number
// @access  PUBLIC
// @require { name, email, password, areacode, address, mobile }
router.post("/add", UserController.add);

router.post("/login", UserController.login);

router.get("/checkLogin", UserController.checkLogin);

module.exports = router;
