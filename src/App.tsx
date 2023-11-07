import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Layout from 'pages/layout';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );
}
