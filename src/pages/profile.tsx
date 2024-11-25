
import { useSelector } from "react-redux"
import { RootState } from "../services/Reducers/store"
import { Chip } from "@mui/material"
import Avatar from '@mui/material/Avatar';
const Profile = () => {
    const {user}=useSelector((state:RootState)=>state.user)
    if (!user) {
        throw new Error("user not found")
    }
  return (
    <div className="pt-20">
        <Chip avatar={<Avatar >{user.email.toUpperCase().slice(0,1)}</Avatar>} label={user.email}>
      </Chip>
      <h2>
        {user.username}
      </h2>
      
    </div>
  )
}

export default Profile
