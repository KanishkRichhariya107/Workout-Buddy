import { useState } from "react";

const WorkoutForm=()=>{
    const[title,setTitle]=useState('')
    const[load,setLoad]=useState('')
    const[reps,setreps]=useState('')
    const[error,setError]=useState(null)


    const submitHandler=async(e)=>{
        e.preventDefault();

        const workout={title,load,reps}

        const response=await fetch("/api/workouts",{
            method:"POST",
            body:JSON.stringify(workout),
            headers:{
                'content-Type':'application/json'
            }

        })
        // when we were adding data in post request in the controller  we were returning some json if successful then the data itself  if not then the error
        const json=await response.json()

        if(!response.ok)
        {
            //because our json has an error property  can check it in controller
            setError(json.error)
        }
        if(response.ok)
        {
            setTitle('')
            setLoad('')
            setreps('')
            setError(null)
            console.log("new workout added",json)
        }
        

    }
    return(
        <form  className="create" onSubmit={submitHandler}>
            <h3>Add A New Workout</h3>

            <label >Exercise Name</label>
            <input 
            type="text"
            onChange={(e)=>{setTitle(e.target.value)}}
            value={title}
             />

            <label >Load in kg</label>
            <input 
            type="text"
            onChange={(e)=>{setLoad(e.target.value)}}
            value={load}
             />

            <label >reps</label>
            <input 
            type="text"
            onChange={(e)=>{setreps(e.target.value)}}
            value={reps}
             />

             <button >Add Workout</button>
             {error&&<div className="error">{error}</div>}

        </form>
    )
}
export default WorkoutForm