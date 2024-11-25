import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../utils/types';




const initialState:{user:User | null}={
    user:null
}
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loginUser(state,action:PayloadAction<User>){
                state.user=action.payload
            
        }
    }
})

export const {loginUser}=userSlice.actions

export default userSlice.reducer