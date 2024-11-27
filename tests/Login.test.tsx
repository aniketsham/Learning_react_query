import {render,screen, fireEvent,waitFor} from "@testing-library/react";
import LoginPage from "../src/pages/login-page";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import store from "../src/services/Reducers/store";
import { Provider } from "react-redux";
import { QueryClientProvider,QueryClient } from "react-query";
import Profile from "../src/pages/profile";
const queryClient = new QueryClient();


describe("Login Component",()=>{
    it("here we are testing for the apperenace of the login button",async()=>{
      render(
      <MemoryRouter initialEntries={['/']}>
        <QueryClientProvider client={queryClient}>
        <Provider store={store}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        </Provider>
        </QueryClientProvider>
        </MemoryRouter>
      )
  
    
      const emailInput=screen.getByLabelText(/Email Address/i)
      const passwordInput=screen.getByLabelText(/Password/i)
      const loginButton = screen.getByRole("button")

      fireEvent.change(emailInput, { target: { value: "anikets2408@gmail.com" } });
      fireEvent.change(passwordInput, { target: { value: "12345678" } });

      expect(emailInput).toHaveValue("anikets2408@gmail.com");
      expect(passwordInput).toHaveValue("12345678")

      expect(screen.queryByText(/Profile/i)).not.toBeInTheDocument();
      fireEvent.click(loginButton)
      
      
      expect(screen.getByText(/Loading../i)).toBeInTheDocument();
      expect(screen.queryByText("Login Page")).not.toBeInTheDocument();
      

      await waitFor(() => {
        expect(screen.getByText(/Profile/i)).toBeInTheDocument();
    });
    })
  })