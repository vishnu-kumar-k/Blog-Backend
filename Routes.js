const express = require('express');
const Login = require('./Auth/Login');
const SignUp = require('./Auth/SignUp');
const routers = express.Router();

routers.route('/login').post(Login);
routers.route("/register").post(SignUp);

module.exports =routers;
