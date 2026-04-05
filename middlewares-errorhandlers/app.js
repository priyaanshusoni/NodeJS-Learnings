 const express = require("express");

 const app = express()


 app.use("/user", (req,res,next)=>{
    // res.send("First response")
    next()

    res.send("First response")
 },(req,res)=>{ 
    res.json({
        msg : "Second route handler called !"
    })
 })
 app.use("/chaining", (req,res,next)=>{
    // res.send("First response")
    console.log('Handeling First route handler');
    
    next()

   
 },(req,res,next)=>{ 
    console.log('Handeling Second route Handeler');
    
   next()
 }  ,(req,res)=>{
    console.log("Handeling Third Route Handler");
    
    res.send("Third Route Handlere")
 })



 // We can also wrap our controller functions in an array .



 app.use("/arraychaining", [(req,res,next)=>{
    // res.send("First response")
    console.log('Handeling First route handler');
    
    next()

   
 },(req,res,next)=>{ 
    console.log('Handeling Second route Handeler');
    
   next()
 }  ,(req,res)=>{
    console.log("Handeling Third Route Handler");
    
    res.send("Third Route Handlere")
 }
])




 app.listen(7777, ()=>{
    console.log("Server is succesfully listening on port 7777");
    
 })   