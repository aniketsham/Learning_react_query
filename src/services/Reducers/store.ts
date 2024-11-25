import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user-slice"
import chartReducer from "./slice/chart-slice"
const store=configureStore({
    reducer:{
        user:userReducer,
        chart:chartReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch