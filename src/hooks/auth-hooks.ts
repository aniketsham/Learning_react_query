import { useMutation } from "react-query"
import { useAppDispatch } from "./redux-hooks";
import { loginUser } from "../services/Reducers/slice/user-slice";
import axios from "axios";
import { User } from "../utils/types";
import { useSelector } from "react-redux";
import { RootState } from "../services/Reducers/store";
export const useLoginHook=()=>{
    const dispatch = useAppDispatch();

    const mutation=useMutation({
        mutationFn:async(data:{email:string,password:string})=>{
            console.log(data)
            const response=await axios.post('https://dummyjson.com/auth/login', {
                username: "emilys",
                password: "emilyspass",
                expiresInMins: 30, 
              }, {
                headers: { 'Content-Type': 'application/json' },
              
              })
              return response.data
            //console.log(response.data)
            // return new Promise<void>((resolve)=>{
            //     const {email,password}=data
            //     setTimeout(()=>{
            //        
            //     },1000)

            //     resolve()
            // })
        },

        onSuccess:(data:User)=>{
            console.log(data)
            dispatch(loginUser(data))
            alert("login Success")
        },
        onError:(error)=>{

            alert("Login Failed"+error)
        }

    
    })

    return mutation
}


export const useCurrentUser=()=>{
    const {user}=useSelector((state:RootState)=>state.user)
    return user
}


