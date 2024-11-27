import { render,screen,fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"

import store from "../src/services/Reducers/store"
import { QueryClientProvider, QueryClient } from "react-query"
import ChartsPage from "../src/pages/charts-page"
import { error } from "console"

const queryClient= new QueryClient()

describe("Card Section Render",()=>{

    it("rednerig a basic Page where charts are displayed",()=>{

        render(
            <MemoryRouter initialEntries={['/']}>
                <Provider store={store}>
                    <QueryClientProvider client={queryClient}>
                        <ChartsPage/>
                    </QueryClientProvider>
                </Provider>
            </MemoryRouter>
        )
    
        

        const columnButton=screen.getByRole("button",{ name: /Column/i })
        const areaButton=screen.getByRole("button",{ name: /Area/i })
        const lineButton=screen.getByRole("button",{ name: /Line/i })
        const barButton=screen.getByRole("button",{ name: /bar/i })
        
        expect(columnButton).toBeInTheDocument()
        expect(areaButton).toBeInTheDocument()
        expect(lineButton).toBeInTheDocument()
        expect(barButton).toBeInTheDocument()


    })

    it("Checking chart cards renders",async()=>{
        render(<MemoryRouter initialEntries={['/']}>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <ChartsPage/>
                </QueryClientProvider>
            </Provider>
        </MemoryRouter>)

        const errorsButton=screen.getAllByRole("button",{ name: /Show Error/i })

        fireEvent.click(errorsButton[0])
    
        

    })
})