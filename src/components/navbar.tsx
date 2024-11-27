import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../services/Reducers/store';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
export default function Navbar({toggleDarkMode}:{toggleDarkMode:()=>void}) {
  const {user}=useSelector((state:RootState)=>state.user);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar data-testid="background" position="static">
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:"left" }}>
           React Query
          </Typography>
        <Link to="/" className="text-xl p-2">Home</Link>
          <Link to="/addtask" className="text-xl p-2"  >Addtask</Link>
          {
            user  ? (

              <>
               <Link to="/profile" className="text-xl p-2"  >Profile</Link>
               <Link to="/charts" className="text-xl p-2"  >Charts</Link>
              </>
            ) :(<>
             <Link to="/login" className="text-xl p-2"  >Login</Link>
             <Link to="/signup" className="text-xl p-2"  >SignUp</Link>
            </>   )

          }
      
          <Link to="/update" className="text-xl p-2"  >Update</Link>
          <Switch data-testid="switch" color='default' {...label} onClick={toggleDarkMode} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
