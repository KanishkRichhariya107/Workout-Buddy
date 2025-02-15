const mongoose=require('mongoose')
// capital S of schema. this is function which is used to create schemas

const Schema=mongoose.Schema
//schema is like a generalised blueprint on which diff models can be based. its just a structure. here i have created a workoutschema. timestamp true just logs the details.
const workoutSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    }
},{timestamps:true})

//use singular workout because mongodb will create collection with plular workouts
module.exports=mongoose.model('Workout',workoutSchema)