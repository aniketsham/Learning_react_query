import { useMutation,useQuery, useQueryClient } from "react-query";

import { TaskData } from "../utils/types";
import axios from "axios"
export const useAddTask = (url:string) => {
  const queryClient=useQueryClient()
  //const dispatch = useAppDispatch();

  const mutation = useMutation({
    mutationFn: async (task: TaskData) => {
      // API Calling if Needed
      const response = await axios.post(url, task);
      
      return response.data
     
    },
    onSuccess: (data) => {
      const task=data.task
      console.log(data)
      queryClient.setQueryData(["task"], (oldTodos) => {
        const todos=oldTodos as TaskData[]
        return [
        ...(todos || []),
        task,
      ]})
    },
    onError: (error) => {
      console.error("Failed to add task:", error);
    },
  });

  return mutation;
};


export const  useFetchTask=(url:string)=>{
    //const dispatch = useAppDispatch();
    const query=useQuery({
        queryKey:["task"],
        queryFn:async()=>{
            const response=await axios.get(url).then((res)=>res.data) // "http://localhost:4000/api/AllTask"
         
            return response.Tasks
        },
       

    })
    return query
}


export const useDeleteTask=(url:string)=>{
   // const dispatch = useAppDispatch();
   const queryClient=useQueryClient()
    const mutation=useMutation({

        mutationFn:async(id:string)=>{
            await axios.delete(url+"/"+id); //http://localhost:4000/api/Delete/
            return id
            //dispatch(deleteTask(id)); 
        },
        onSuccess: (id) => {
            queryClient.setQueryData<TaskData[]>(['task'], (oldTodos) => {
              const todos=oldTodos as TaskData[]
              return todos.filter((todo:TaskData) => todo._id !== id)
            })
          
          },
          onError: (error) => {
            console.error("Failed to delete task:", error);
          },
    })    

    return mutation
}


export const useUpdateTask=(url:string)=>{
    //const dispatch = useAppDispatch();
    const queryClient=useQueryClient()
   
    const mutation=useMutation({
        mutationFn:async(data:{id:string,task:TaskData})=>{
            const {id,task}=data

           const response= await axios.put(url+"/"+id,task); 
          return response.data
           //http://localhost:4000/api/Edit
            //dispatch(updateCheckedTask({id:id,completed:task.completed}))  // Redux dispatch reducer to update completed value in the state
        },

        onSuccess: (data) => {
         
            const task=data.task
          
            queryClient.setQueryData(['task'], (oldTodos) => {
              const todos=oldTodos as TaskData[]
              console.log(oldTodos)
              if (!todos) return [];
              return todos.map((todo:TaskData) =>
                todo._id === task._id ? task : todo
              );
            });
          },
          onError: (error:unknown) => {
            console.error("Failed to Update task:", error);
          },
    })

    return mutation
}



export const  usePaginatedFetch=(url:string,page:number,limit:number)=>{
  //const dispatch = useAppDispatch();
  const query=useQuery({
      queryKey:["paginatedTask"],
      queryFn:async()=>{
          const response=await axios.get(url+`/?page=${page}&limit=${limit}`).then((res)=>res.data) // "http://localhost:4000/api/AllTask"
       
          return response.Tasks
      },
     

  })
  return query
}