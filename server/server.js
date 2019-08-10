const path=require('path');

const publicPath=path.join(__dirname,'../public');

const express=require("express");
const port=process.env.PORT

var app=express();

app.use(express.static(publicPath));
app.listen(3000,()=>{
  console.log(`server is up on 3000`);
});
