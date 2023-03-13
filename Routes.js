const express = require("express");
const Login = require("./Auth/Login");
const SignUp = require("./Auth/SignUp");
const Logout = require("./Auth/Logout");
const { Blog } = require("./Routing/Blog");
const Posts = require("./posts/Posts");
const CreatePost = require("./posts/CreatePost");
const routers = express.Router();

routers.route("/login").post(Login);
routers.route("/register").post(SignUp);
routers.route("/getblogs").post(Blog);
routers.route("/logout").get(Logout);
routers.route("/posts").get(Posts)
routers.route("/addposts").post(CreatePost);
module.exports = routers;
