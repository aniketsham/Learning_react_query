import { Button } from "@mui/material"
import { useState } from "react"
import { TaskData } from "../utils/types"

import { useAddTask } from "../hooks/react-query-hooks"
const AddTask = () => {
    const [taskName,setTaskName]= useState("")
    const [taskDetails,setTaskDetails]= useState("")
    const { mutateAsync: addTask, isLoading } = useAddTask("http://localhost:4000/api/Add");
    const handleAddtask=()=>{
        const newTask: TaskData = {
      
          taskName,
          taskDetails,
          completed: false,
        };
        addTask(newTask)
        setTaskName('')
        setTaskDetails('')
    }

  return (
    <div className="">
     <h1 className="text-3xl">
     Add TAsk
     </h1>
      
      <div className="flex flex-row justify-center items-center gap-4 pt-10">
        <input type="text" className="text-black" value={taskName} placeholder="taskname" onChange={(e)=>setTaskName(e.target.value)}>
        </input>
        <input type="text" className="text-black" value={taskDetails} placeholder="taskDetails" onChange={(e)=>setTaskDetails(e.target.value)}>
        </input>
        <Button onClick={handleAddtask} disabled={isLoading}>
            {isLoading ? "Adding..." : "Add Task"}
        </Button>
      </div>
    </div>
  )
}

export default AddTask
