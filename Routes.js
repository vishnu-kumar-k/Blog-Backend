const express = require('express');
const Login = require('./Auth/Login');
const SignUp = require('./Auth/SignUp');
const { Blog } = require('./Routing/Blog');
const routers = express.Router();

routers.route('/login').post(Login);
routers.route("/register").post(SignUp);
routers.route("/getblogs").post(Blog);
module.exports =routers;
