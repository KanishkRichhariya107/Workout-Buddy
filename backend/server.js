// npm install dotenv for env
require('dotenv').config()
const express=require('express');

//express app
const app=express();

//middlewear
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//listen for request
app.listen(4000,()=>{
    console.log("listening to port 4000")
})

//routes
//this is also a middle wear
app.get('/',(req,res)=>{
    res.json({mssg:'chal rha hai'})
})