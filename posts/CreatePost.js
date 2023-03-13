var jwt=require('jsonwebtoken');
const con = require('../Connection/connection');
require("dotenv").config();
const CreatePost=async(req,res)=>
{
    console.log("Add Posts")
    const {tittle,des,img,date,category}=req.body;
    try{
        var  t=await jwt.verify(req.cookies.jwt,process.env.jwt_token);
        await con.query(`select * from auth where email=?`,[t.email],(error,result)=>
        {
            id=result[0].id;
            console.log(id)
        })
        var values=[[tittle,des,img,date,id,category]];
        con.query("insert into posts(tittle,des,img,date,uid,catagory) values ?",[values],(error,result,fields)=>{
            if(error)
            {
                res.json(error)
            }
            else
            {
                res.json("Suceess")
            }
        })
    }
    catch(err)
    {
        res.json(err);
    }   
}

module.exports=CreatePost;