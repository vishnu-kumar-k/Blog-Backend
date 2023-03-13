const jwt = require("jsonwebtoken");
  require("dotenv").config();

exports.Blog = async (req, res) => {
  try{
    var t=jwt.verify(req.cookies.jwt,process.env.jwt_token);
    console.log(t)
    if(t)
    {
      res.send("Running")
    }
    else
    {
      res.send(">>>>>>>>")
    }
  }
  catch(err)
  {
    res.json(err);
  }
};
