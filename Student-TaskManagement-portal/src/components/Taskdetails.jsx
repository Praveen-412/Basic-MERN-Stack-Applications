import {useState, useEffect} from "react";

import { useParams } from "react-router-dom";

function Taskdetails(){
        const {id} = useParams();
        const [task, setTasks] = useState(null);
        const [loading, setLoading]= useState(true);

        
        useEffect(()=>{
            fetch(`http://localhost:5000/api/tasks/${id}`)
                .then((response)=>{
                    if(!response.ok){
                        throw new Error ("Task Not Found !");
                    }
                    return response.json();
                })
                .then((data)=> {
                 setTasks(data); 
                }).catch((error) => {
                    console.log(error);     
                }).finally(()=>{
                    setLoading(false);
                })
    
        },[id]);
        if(loading){
            return <h2>
                Loading........
            </h2>
        }
        if(!task){
            return <h2 className="task-details"> Task Not Found ! </h2>
        }
        return (
        <div className="task-details">
    <h1>Task details :</h1> <div>
    <h2>{task.title}</h2><br></br>
    <p>{task.description}</p><br/>
    <p> Status: {task.status}</p> </div>
</div>
);
}
export default Taskdetails;