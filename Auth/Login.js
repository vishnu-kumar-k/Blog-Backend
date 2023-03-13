const jwt = require("jsonwebtoken");
const con = require("../Connection/connection");
const bcrypt = require("bcrypt");
require("dotenv").config();
const Login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  con.query(
    "select username,password from auth where email=?",
    [email],
    async function (err, result, fields) {
      if (result.length !== 0) {
        p = await bcrypt.compare(password, result[0].password);
        
        if (p) {
          var j = jwt.sign({ email: email }, process.env.jwt_token, {
            expiresIn: "1d",
          });
          res.cookie("jwt", j, { httpOnly: true });
          res.json({
            name: result[0].username,
            status: true,
            msg: "Login Successful",
          });
        } else {
          res.json({
            status: false,
            msg: "Wrong Password",
          });
        }
      } else {
        res.send({
          status: false,
          msg: "Account Not Found !! Please Register",
        });
      }
    }
  );
};

module.exports = Login;
