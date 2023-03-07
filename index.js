 const express=require('express')
const cors=require('cors');
const  routers  = require('./Routes');
const app = express();
const cookieParser=require('cookie-parser')
app.use(express.json());
app.use(cookieParser())
app.use(


    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  
  
);


app.use("",routers)





app.listen(8000, () => {
  console.log("Running");
});