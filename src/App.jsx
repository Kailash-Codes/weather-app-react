import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FiveDaysForecast from "./pages/FiveDaysForecast";
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="border px-4 sm:px-auto bg-gradient-to-b to-red-300 from-blue-300 min-h-screen ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/forecast" element={<FiveDaysForecast />} />
            <Route path="*" element={<p>route not found</p>} />
          </Routes>
        </BrowserRouter>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
