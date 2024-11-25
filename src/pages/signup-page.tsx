import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../services/Reducers/store';
const SignupPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
      });
      const [error, setError] = useState('');
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          return;
        }
        console.log('Form Submitted:', formData);
        // Add your signup logic here
      };

      const {user}=useSelector((state:RootState)=>state.user)
      if (user) {
        throw new Error("User found already")
      }
    
      return (
        <Container maxWidth="sm" sx={{ marginTop: 8 }}>
          <Paper elevation={3} sx={{ padding: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Sign Up
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
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              {error && (
                <Typography
                  variant="body2"
                  color="error"
                  sx={{ marginTop: 1, marginBottom: 1 }}
                >
                  {error}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ marginTop: 2, padding: 1 }}
              >
                Sign Up
              </Button>
            </Box>
          </Paper>
        </Container>
      );
}

export default SignupPage
