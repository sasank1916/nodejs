const express = require("express");
const app = express();
const path = require("path");

app.get("/html",(req,res)=>{
  res.sendFile(path.join(__dirname,"index1.html"));
})
app.get("/virat",(req,res)=>{
  res.sendFile(path.join(__dirname,"virat.html"));
})
app.get("/ff",(req,res)=>{
  res.sendFile(path.join(__dirname,"freefire1.html"));
})
app.listen(3978,()=>{                                 //call back function in js
    console.log("server is running");
})