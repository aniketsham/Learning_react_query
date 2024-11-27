import { useSelector } from "react-redux";
import { RootState } from "../services/Reducers/store";
import { Chip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";

const Profile = () => {
  const { user, loading } = useSelector((state: RootState) => state.user); // Assuming loading state is available in your Redux store
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user && !loading) {
      setError("User not found");
    }
  }, [user, loading]); 

  if (error) {
    throw new Error(error); 
  }

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="pt-20">
      <h1 className="text-4xl">Profile</h1>
      <Chip
        avatar={<Avatar>{user?.email.toUpperCase().slice(0, 1)}</Avatar>}
        label={user?.email}
      />
      <h2>{user?.username}</h2>
    </div>
  );
};

export default Profile;
