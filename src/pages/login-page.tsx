
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
} from '@mui/material';
import { useLoginHook } from '../hooks/auth-hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../services/Reducers/store';
import { useFormValidation } from '../hooks/common-hooks';
import { useToast } from '../hooks/common-hooks';

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigateTo=useNavigate()
    const {mutateAsync:loginUser}=useLoginHook()

    const {showToast}=useToast()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    const {formError,setFormError}=useFormValidation()
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      loginUser(formData)
      showToast("success","Login Success")
        navigateTo("/profile")
      
    };
    
    useEffect(()=>{
      if(formData.email.length>0 && formData.password.length>0){
        setFormError("Invalid Form")
      }
    })
    const {user}=useSelector((state:RootState)=>state.user)
    if (user) {
        navigateTo("/profile")
    }
  
    return (
      <Container maxWidth="sm" sx={{ marginTop: 8 }}>
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <p className='text-red-500'>{formError &&(<>{formError} sjdnkjcnd</>)}</p>
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <p className='text-red-500'>{formError &&(<>{formError}</>)}</p>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: 2, padding: 1 }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Container>
    );
}

export default LoginPage
