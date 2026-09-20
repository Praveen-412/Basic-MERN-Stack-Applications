import { useState } from "react";

export default function AddTask(props){
    const [title,setTitle]= useState("");
    const [description,setDescription]= useState("");

    async function handleSubmit(e){
        e.preventDefault();
        const newTask={
            id:Date.now(),
            title: title,
            description: description,
            status:"Pending"
        };
      try{
      const response = await fetch("http://localhost:5000/api/tasks",{
        method:"POST",
        headers:{"Content-type":"application/json"},
           body:JSON.stringify(newTask)
    });

    const data = await response.json();
    props.onAddTask(data);

}   
catch(error){
    console.log(error);
}
}


    return(
        <div className="task-details">
            <h2 className="divaddtask">Add Task</h2>
            <form onSubmit={handleSubmit}>
            <label>Add Title: </label>
            <input type="Text" value={title} onChange= {(e)=>setTitle(e.target.value)}/><br></br><br></br>
            <label>Add Description:    </label> 
            <input type="Text" value={description} onChange= {(e)=>setDescription(e.target.value)}/><br></br>
            <button type="submit">Add Task</button>
            </form>
        </div>
    );

}
