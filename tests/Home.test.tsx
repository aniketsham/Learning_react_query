import {render,screen, waitFor} from "@testing-library/react";
import { MemoryRouter} from "react-router-dom";
import store from "../src/services/Reducers/store";
import { Provider } from "react-redux";
import { QueryClientProvider,QueryClient } from "react-query";
import Home from "../src/pages/home";

const queryClient = new QueryClient();

describe("testing out Home Page",()=>{

        it("Checking if Home page renders properly",async()=>{

            render(
                <MemoryRouter initialEntries={['/']}>
                    <QueryClientProvider client={queryClient}>
                        <Provider store={store}>
                            <Home/>
                        </Provider>
                    </QueryClientProvider>
                </MemoryRouter>

            )
        
            await waitFor(()=>{
                const hasTableData=screen.getAllByTestId("custom-element")
                console.log(hasTableData)
            })
        })

})