import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../utils/types';

interface UserState {
    user: { email: string; username: string } | null;
    loading: boolean;
  }


const initialState:UserState={
    user:null,
    loading: true
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loginUser(state,action:PayloadAction<User>){
                state.user=action.payload
                state.loading = false;
            
        }
    }
})

export const {loginUser}=userSlice.actions

export default userSlice.reducer