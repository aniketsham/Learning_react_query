import { createTheme } from '@mui/material/styles';

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#757de8', //Blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d32f2f', //Red 
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212', // Dark 
      paper: '#1e1e1e', 
    },
    text: {
      primary: '#ffffff', // White text for primary content
      secondary: '#b0bec5', // Gray text for secondary content
    },
  },
});

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#002984', // Blue 
      contrastText: '#ffffff', 
    },
    secondary: {
      main: '#d32f2f', // Red
      contrastText: '#ffffff', 
    },
    background: {
      default: '#f5f5f5', // Light gray background
      paper: '#ffffff', // White background for paper
    },
    text: {
      primary: '#000000', // Black text for primary content
      secondary: '#757575', // Gray text for secondary content
    },
  },
});
