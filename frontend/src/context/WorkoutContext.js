// this is  afunction
import { createContext, useReducer } from "react";

//this creates us a context
export const WorkoutContext=createContext()
//state is the previous state of theworkouts and action is basically what we want to do 
export const workoutReducer = (state, action) => {
    switch (action.type) {
      case 'SET_WORKOUTS':
        return { 
          workouts: action.payload 
        }
      case 'CREATE_WORKOUT':
        return { 
          workouts: [action.payload, ...state.workouts] 
        }
        
    case 'DELETE_WORKOUT':
      return { 
        workouts: state.workouts.filter(w => w._id !== action.payload._id) 
      }
      default:
        return state
    }
  }

//context provider component is just a component which wraps our context provides to parts which need it
export const WorkoutContextProvider=({children})=>{
    //two arguments are passed inside userReducer one is reducerfunction and other is initial value of state
    const [state,dispatch]=useReducer(workoutReducer,{
        workouts:null
    })

    return(
        <WorkoutContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WorkoutContext.Provider>
    )
}

