exports.Blog=async(req,res)=>{
    try{
    console.log(req.headers.cookie );
     res.send("Success");
    }catch(err)
    {
        console.log("error");
        res.status(400).send("internal error");
    }


}