// npm install dotenv for env
require('dotenv').config()
//npm install mongoose
const mongoose=require('mongoose');
const express=require('express');

const workoutRoutes=require('./routes/workout')
//express app
const app=express();

//middlewear

//when we are using post or patch request we are sending data through request object but for that to happen we need to use this.any request that comes in it looks if there is some data with the request and if there is data it passes that data to the request object. we can access it in request handler by req.body  
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
//this is also a middle wear
//this basically attaches all the routes present in the workoutRoutes 
//this only works if this url is present in the start
app.use('/api/workouts',workoutRoutes)

//connect to db and listen to server
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
//listen for request
app.listen(4000,()=>{
    console.log("listening to port",process.env.PORT);
})
})
.catch((error)=>{
    console.log(error);
})

