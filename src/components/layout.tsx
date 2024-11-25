
import { useState } from 'react'
import { ThemeProvider,CssBaseline } from '@mui/material'
import { darkTheme,lightTheme } from '../styles/theme'
import Navbar from './navbar'
import {Outlet} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
const Layout = () => {
    const [isDarkMode,setIsDarkMode]=useState(true)

    const toggleDarkMode=()=>setIsDarkMode(!isDarkMode)
  return (
    <div>
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      
      <CssBaseline/>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <main>
        <Outlet /> 
      </main>

      <ToastContainer autoClose={3000} position='top-right' />
      </ThemeProvider>
    
    </div>
  )
}

export default Layout
