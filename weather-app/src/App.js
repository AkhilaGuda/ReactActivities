import React from 'react';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import Weather from './components/Weather.js';
function App() {
  const queryClient=new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Weather />
    </QueryClientProvider>
  );
}

export default App;
