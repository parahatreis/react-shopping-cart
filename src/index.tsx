import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
   QueryClient,
   QueryClientProvider,
} from 'react-query';

 // Create a client
 const queryClient = new QueryClient()

ReactDOM.render(
   <QueryClientProvider client={queryClient}>
       <App />
   </QueryClientProvider>
   , document.getElementById('root'));

