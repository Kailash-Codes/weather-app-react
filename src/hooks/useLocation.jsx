import { useState, useEffect } from "react";
export const useLocation = () => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [isLocationLoading, setIsLocationLoading] = useState(true);
  const [isLocationError, setIsLocationError] = useState(false);
  useEffect(() => {
    setIsLocationLoading(true);
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation(position);
          setIsLocationLoading(false);
        },
        (error) => {
          alert(error.message);
          setIsLocationError(true);
          setIsLocationLoading(false);
        }
      );
    } else {
      setIsLocationError(true);
      setIsLocationLoading(false);
    }
  }, []);

  return [currentLocation, isLocationLoading, isLocationError];
};
