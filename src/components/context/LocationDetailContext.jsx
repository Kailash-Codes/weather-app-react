import { createContext, useContext, useState } from "react";

export const LocationDetailContext = createContext(null);
export const useLocationDetails = () => useContext(LocationDetailContext);

export const LocationProvider = ({ children }) => {
  const locationDetail = useState("");

  return (
    <LocationDetailContext.Provider value={locationDetail}>
      {children}
    </LocationDetailContext.Provider>
  );
};
