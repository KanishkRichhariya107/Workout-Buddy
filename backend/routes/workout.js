const express=require('express')
//this express.router creates a instance for us
const router=express.Router()
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout }=require('../controllers/workoutController')

//WE USE THIS TO INTERACT WITH THE DATABASE
const Workout=require('../models/workoutmodel')

// GET all workouts
router.get('/', getWorkouts)
  
  // GET a single workout
  router.get('/:id', getWorkout)
  
  // POST a new workout
  router.post('/', createWorkout)

  
  // DELETE a workout
  router.delete('/:id',deleteWorkout)
  
  // UPDATE a workout
  router.patch('/:id', updateWorkout)
  
module.exports=router;