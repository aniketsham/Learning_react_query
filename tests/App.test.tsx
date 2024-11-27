import { render,screen } from "@testing-library/react";

import { Provider } from 'react-redux';
import store from '../src/services/Reducers/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from "./../src/App";





const queryClient = new QueryClient();


describe('App Component', () => {
  it('inital Check', () => {
    render(<><QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App/>
        </Provider></QueryClientProvider></>)
  })
  
  screen.debug()

});

