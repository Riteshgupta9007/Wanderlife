const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userComtroller = require("../controllers/user.js");


router.route("/signup")
.get(userComtroller.renderSignupForm)
.post(wrapAsync(userComtroller.signup));


router.route("/login")
.get(userComtroller.renderLoginForm)
.post(saveRedirectUrl, passport.authenticate("local",{failureRedirect: "/login", failureFlash: true}),userComtroller.login);


router.get("/logout",userComtroller.logout);

module.exports = router;