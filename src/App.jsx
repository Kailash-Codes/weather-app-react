import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import Homepage from "./pages/Homepage";
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="border px-4 sm:px-auto bg-gradient-to-b to-red-300 from-blue-300 min-h-screen ">
        <Homepage />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
