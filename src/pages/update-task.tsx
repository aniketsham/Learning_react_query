import { Button } from "@mui/material"
import { useState } from "react"
import { TaskData } from "../utils/types"
import { useQueryClient } from "react-query"
import { useUpdateTask } from "../hooks/react-query-hooks"
import { useParams } from "react-router-dom"

const UpdateTask = () => {
    const {id}=useParams()
    const queryClient=useQueryClient()
    const todoData=queryClient.getQueryData<TaskData[]>(["task"])
    

    const index=todoData?.findIndex((item)=>item._id===id) || 0
    const [taskName,setTaskName]=useState(todoData && todoData[index]?.taskName || "")
    const [taskDetails,setTaskDetails]=useState(todoData && todoData[index]?.taskDetails || "")
    

    const {mutateAsync:UpdateTask,isLoading}=useUpdateTask("http://localhost:4000/api/Edit")


    const handleUpdatetask=()=>{
      
      const newTask: TaskData = {
        
        taskName:taskName,
        taskDetails:taskDetails,
        
      
      };
      if (id){
        UpdateTask({id,task:newTask})
      }
    }
    


  return (
    <div className="">
     <h1 className="text-3xl">
     Update Task
     </h1>
      
      <div className="flex flex-row justify-center items-center gap-4 pt-10">
        <input type="text" className="text-black" value={taskName} onChange={(e)=>setTaskName(e.target.value)}>
        </input>
        <input type="text" className="text-black" value={taskDetails} onChange={(e)=>setTaskDetails(e.target.value)}>
        </input>
        <Button onClick={handleUpdatetask} disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Task"}
        </Button>
      </div>
    </div>
  )
}

export default UpdateTask
