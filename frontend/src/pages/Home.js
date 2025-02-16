import { useEffect,useState } from "react"
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'



const Home=()=>{
    const [workouts,setWorkouts]=useState(null)
    useEffect(()=>{
        //i have made a fucntion because i want to create an async functionso that i can use await
        const fetchworkouts=async()=>{
            // we havent use localstate 4000 before /api/workouts because i have add a proxy field for the localhost4000 inside the package.json file in the FRONTEND.That proxy field redirects the request during development. that allows cross origin resource sharing(CORS) for current port(3000) to proxy port(4000)
            const response=await fetch('/api/workouts')
            //this parse the json
            //so basically when we post data (in controllers) we convert and send that data as json. now that we need to retrieve it we need to parse it which converts the data into array of objects
            const json=await response.json()
            if(response.ok)
            {
                setWorkouts(json)
            }

          //this is the logic using then and promises
            /* fetch('http://localhost:4000/api/workout/')
            .then(res=>{
                return res.json()
            })
            .then((data)=>{
                setWorkouts(data)
            })
            .catch((error) => console.error("Error fetching workouts:", error));*/
        }
        fetchworkouts()
    },[])
    return(
        <div className="home">
            <div className="workouts">
                
              {//we use normal parenthesis inside the .map fucntipn because we are returning a template
              workouts&&workouts.map((parameter)=>(
                <WorkoutDetails key={parameter.id} workout={parameter}/>

              ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}
export default Home