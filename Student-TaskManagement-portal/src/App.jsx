import Navbar from './components/Navbar';

import Dashboard from './components/Dashboard';
import { Routes,Route } from "react-router-dom";
import Tasks from './components/Tasks';

import Taskdetails from './components/Taskdetails';
import Register from './components/Register';
import Login from './components/Login';
import { useState,useEffect } from "react";


import './App.css'


function App(){
     
   const [tasks,setTasks]=useState([]);
    
  useEffect(()=>{
    fetch("http://localhost:5000/api/tasks")
    .then((response) => response.json())
    .then((data) =>{
      setTasks(data);
    });
  },[])

  return(
    <div>
    <Navbar />
  
  <Routes>
      <Route path="/" element={<Dashboard tasks={tasks} setTasks={setTasks}/>}/>
      <Route path="/tasks" element={<Tasks tasks={tasks} />}/>
      <Route path="/tasks/:id" element={<Taskdetails tasks={tasks}/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
  </Routes>
    </div>
  );
}
export default App;