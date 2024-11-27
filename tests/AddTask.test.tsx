import {render,screen,fireEvent} from "@testing-library/react";

import store from "../src/services/Reducers/store";
import { Provider } from "react-redux";
import { MemoryRouter} from "react-router-dom";
import { QueryClientProvider,QueryClient } from "react-query";
import AddTask from "../src/pages/add-task";
const queryClient = new QueryClient();
describe("Testing the Add the task feature",()=>{

    it("checking if it renders",()=>{
        render(<MemoryRouter initialEntries={['/addtask']}>
            <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <AddTask/>
                </Provider>
                </QueryClientProvider>
                </MemoryRouter>)

            screen.debug()

            const button=screen.getByRole("button")
            expect(button).toHaveTextContent(/add task/i)
        })

    
        it("checking for if input values are there and adding task",()=>{
            
            render(<MemoryRouter initialEntries={['/addtask']}>
                <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <AddTask/>
                    </Provider>
                    </QueryClientProvider>
                    </MemoryRouter>)

            const taskNameInput=screen.getByPlaceholderText(/taskName/i)
            const taskDetailsInput=screen.getByPlaceholderText(/taskdetails/i)
            const addTaskButton=screen.getByRole("button")
            fireEvent.change(taskNameInput,{target:{value:"lets get it done"}})
            fireEvent.change(taskDetailsInput,{target:{value:"lets get it done"}})
            
            fireEvent.click(addTaskButton)
           
        })

        
})