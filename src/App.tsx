import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import store from "./services/Reducers/store"
import {QueryClient,QueryClientProvider} from 'react-query'
import Layout from './components/layout'
import LoginPage from './pages/login-page'
import SignupPage from './pages/signup-page'
import { ReactQueryDevtools } from 'react-query/devtools'
import AddTask from './pages/add-task'
import { Provider } from 'react-redux'
import UpdateTask from './pages/update-task'
import Profile from './pages/profile'
import ChartsPage from './pages/charts-page'
import '@progress/kendo-theme-default/dist/all.css';
import PageNotFound from './components/Error/PageNotFound'
import { ErrorBoundary } from 'react-error-boundary'
import ForbiddenPage from './components/Error/forebbiden-link'


  function App() {
    const queryClient=new QueryClient()
    
    const router = createBrowserRouter(
      [
        
      {
        path: "/",
      element: <ErrorBoundary fallbackRender={() => <h1>Something went wrong from App.tsx</h1>}>
        <Layout />
      </ErrorBoundary>, 
      errorElement:<PageNotFound/>,
      children: [
        {
          path: "/",
          element: <Home />,
          
        },
        {
          path: "/addtask",
          element: <AddTask/>,
        },
        {
          path: "/login",
          element:<ErrorBoundary fallback={<ForbiddenPage/>}><LoginPage/></ErrorBoundary>
        },
        {
          path: "/signup",
          element:<ErrorBoundary fallback={<ForbiddenPage/>}><SignupPage/></ErrorBoundary> ,
        },
        {
          path: "/update/:id",
          element: <UpdateTask/>,
        },
        {
          path: "/profile",

          element: <Profile/>,
          errorElement:<ForbiddenPage/>
        },
        {
          path: "/charts",
          element: <ChartsPage/>,
          
        },
        

      ]
      }
    ])
  return (
    <>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>

      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  </Provider>
      
    </>
  )
}

export default App
