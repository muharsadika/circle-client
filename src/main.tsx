import './index.css';
import App from './App.tsx';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import RootReducer from './store/RootReducer.ts';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const client = new QueryClient();

const store = configureStore({
  reducer: RootReducer,
});

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'darkBackground',
      },
    },
  },
  colors: {
    darkBackground: '#222',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <ChakraProvider theme={theme}>
          <Router>
            <App />
          </Router>
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);