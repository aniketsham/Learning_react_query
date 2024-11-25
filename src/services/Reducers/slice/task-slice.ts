import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TaskData } from '../../../utils/types';


const initialState:TaskData[]=[]

const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        addTasks:(state,action:PayloadAction<TaskData>)=>{
            state.push(action.payload)
        },
        deleteTask:(state,action)=>{
            const index=state.findIndex((item)=>item._id===action.payload)
            state.splice(index,1)
            
        },
        updateCheckedTask:(state,action)=>{
 
            const index=state.findIndex((item)=>item._id===action.payload.id)
  
            state[index].completed=action.payload.completed
        }
    }
})

export const {addTasks,deleteTask,updateCheckedTask} = taskSlice.actions

export default taskSlice.reducer