const con = require("../Connection/connection");

const Posts = (req, res) => {
  if (req.query.id) {
    var q = `select * from posts where id=${req.query.id}`;
    console.log("processing");
    con.query(q, (error, result, fields) => {
      res.json({ result: result[0] });
    });
  } 
  else if(req.query.cat)
  {
    console.log("Data")
    var q="select * from posts where catagory=?";
    con.query(q,[req.query.cat],(err,result,fields)=>{
      res.json({results:result});
    })

  }
  else {
    var q = "select * from posts join auth ";
    console.log("recevied");
    con.query(q, (error, result, fields) => {
      console.log(result)
      res.json({ result: result });
    });
  }
};

module.exports = Posts;
