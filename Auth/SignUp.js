const cookieParser = require("cookie-parser");
const con = require("../Connection/connection");
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
require('dotenv').config()
async function SignUp(req,res)
{
    console.log("Recevided")
    const{name,email,password}=req.body;
    
    const p=await bcrypt.hash(password,1);
    const values=[[
        email,name,p
    ]]
    
    con.query("select * from auth where email=?",[[email]],(err,results)=>
    {
        if(err)
            console.log(err)
        if(results.length===0)    
            con.query("insert into auth (email,username,password) values ?",[values],(error,results,fields)=>
            {
                if(error)
                    res.json(error)
                else
                {
                    var p=jwt.sign({email:email},process.env.jwt_token,{expiresIn:"1d"})
                    res.cookie("jwt",p,{httpOnly:true});
                    res.json({
                        status:true,
                        msg:"Registered Sucessfully"
                    })
                }   
            })  
        else
        {
            res.json({
                status:false,
                msg:"Account already exists with this Email"
            })
        }     
    })


}

module.exports=SignUp;