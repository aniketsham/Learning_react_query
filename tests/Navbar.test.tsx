import {fireEvent, render,screen} from "@testing-library/react";
import { useState } from "react";
import { MemoryRouter} from "react-router-dom";
import store from "../src/services/Reducers/store";
import { Provider } from "react-redux";
import { QueryClientProvider,QueryClient } from "react-query";
import Navbar from "../src/components/navbar";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "../src/styles/theme";
const queryClient = new QueryClient();


describe("checking navbar",()=>{
    const NavbarWrapper = () => {
        const [isDarkMode, setIsDarkMode] = useState(true);
        const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
    
        return (  
            <MemoryRouter initialEntries={['/']}>
            <QueryClientProvider client={queryClient}>
            <Provider store={store}>
            <ThemeProvider theme={ isDarkMode ? darkTheme : lightTheme } >
            <Navbar  toggleDarkMode={toggleDarkMode} />
            </ThemeProvider>
            </Provider>s
            </QueryClientProvider>
            </MemoryRouter>
            );
      };

    
      

    it("check for switch theme",()=>{
        render(<NavbarWrapper/>)
        
        screen.getByText(/React Query/i)
        screen.getByText(/Home/i)
        screen.getByText(/Update/i)
        screen.getByText(/AddTask/i)

        const themeSwitch = screen.getByRole('checkbox');

        const background = screen.getByTestId("background");
        const computedStyle = window.getComputedStyle(background);
       

        fireEvent.click(themeSwitch);
        console.log(computedStyle.getPropertyValue('--AppBar-background'))

        expect(computedStyle.getPropertyValue('--AppBar-background')).toBe("#1976d2")
    })

})