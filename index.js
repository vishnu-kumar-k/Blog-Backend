 const express=require('express')
const cors=require('cors');
const  routers  = require('./Routes');
const app = express();

app.use(express.json());
app.use(
  cors()
);


app.use("",routers)





app.listen(8000, () => {
  console.log("Running");
});