import React,{useState} from 'react'

const TaskManger = () => {
  const [task,setTask]=useState([]);
  const [newTask,setNewTask]=useState("");

  const HandleButton=()=>{
    if (newTask.trim() !== ''){
    setTask([...task,newTask]);
    setNewTask("");
    }
  }
  return (
    <div>
      <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
      <button onClick={HandleButton}>Add Task</button>

      <ul>

        

        {
            task.map((tasks,index) => {
                return <li key={index} >{tasks}</li>
            })
        }
      </ul>
    </div>
  )
}

export default TaskManger
