import React,{useState} from "react";
import Task from "./Task";

export default function App(){
    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState("");
    
    const handleAddTask=()=>{
        if(newTask.trim()){
            setTasks([...tasks,newTask]);
            setNewTask("");
        }
    };
    return(
        <div>
            <h1>To-Do List</h1>
            <input type="text" value={newTask}
            onChange={(e)=>setNewTask(e.target.value)} 
            placeholder="Enter task " />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task,index)=>(
                    <Task key={index} task={task} />
                ))}
            </ul>
        </div>
    )
}