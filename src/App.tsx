import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Navigation } from '#navigation/Navigation';
import { axiosInit } from '#config/axios';

axiosInit();

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
};
