//this is the main collection. the thing on which queries will run. this model will have all the CRUD operations
const Workout=require('../models/workoutmodel')
//we need mongoose to check the validity of an id wether it is mongoose type or not. it should be mongoose type or app crashes 
const mongoose=require('mongoose')

//get all workouts
const getWorkouts=async(req,res)=>{
    const workouts=await Workout.find({}).sort({createdAt:-1});
    res.status(200).json(workouts)
}

//get single workout

const getWorkout=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({errr:"No Such Workout Exist"})
    }

    const workout=await Workout.findById(id)

    if(!workout){
        //using return otherwise remaining code will also run
        return req.status(404).json({errr:"No Such Workout Exist"})
    }

    res.status(200).json(workout)
}

//create workout
const createWorkout=async(req,res)=>{

    const {title,load,reps}=req.body
    try{
      const workout=await Workout.create({title,reps,load})
      res.status(200).json(workout)

    }
    catch(error){
      res.status(400).json({error:error.message})
    }
}
//OR WE CAN USE PROMISES WITH .THEN AND .CATCH
  /*router.post('/', (req, res) => {
    const { title, load, reps } = req.body;

    Workout.create({ title, reps, load })
        .then(workout => res.status(200).json(workout))
        .catch(error => res.status(400).json({ error: error.message }));
});
 */


//delete workout

const deleteWorkout=async(req,res)=>{
    const{id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id))
    {
       return res.status(404).json({error:"no such workout exist"})
    }

    const workout=await Workout.findOneAndDelete({_id:id})

    if(!workout){
        return res.status(404).json({error:"NO such workout exist"})
    }
    res.status(200).json(workout)

}


// update workout

const updateWorkout=async(req,res)=>{
    const{id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
       return res.status(404).json({error:"no such workout exist"})
    }

    const workout=await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!workout)
    {
      return  res.status(404).json({error:"no such workout exist"})
    }

    res.status(200).json(workout)

}

module.exports={
    createWorkout,getWorkouts,getWorkout,deleteWorkout,updateWorkout

}