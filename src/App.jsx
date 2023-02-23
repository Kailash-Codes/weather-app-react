import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FiveDaysForecast from "./pages/FiveDaysForecast";
import { LocationProvider } from "./components/context/LocationDetailContext";
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="border px-4 sm:px-auto bg-gradient-to-b to-red-300 from-blue-300 min-h-screen ">
        <LocationProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/forecast" element={<FiveDaysForecast />} />
              <Route path="*" element={<p>route not found</p>} />
            </Routes>
          </BrowserRouter>
        </LocationProvider>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
