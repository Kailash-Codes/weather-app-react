import React, { useEffect, useState } from "react";
import { useLocation } from "../hooks/useLocation";
import { ApiKey } from "../config/ApiKey";
import { Button, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import WeatherMainContainer from "../components/main-page/WeatherMainContainer";
import { useLocationDetails } from "../components/context/LocationDetailContext";
import { useFetchWeatherData } from "../hooks/fetch/useFetchWeatherData";
const Homepage = () => {
  //using context
  const [location, setLocation] = useLocationDetails();
  //creating new state for weatherData
  const [newWeatherData, setNewWeatherData] = useState("");
  //using useLocation hook
  const [currentLocation, isLocationLoading, isLocationError] = useLocation();
  const [searchLocation, setSearchLocation] = useState("");
  //url at first render taking data acc to current location
  const currentLocationUrl = `/weather?lat=${
    currentLocation?.coords ? currentLocation.coords.latitude : "0"
  }&lon=${
    currentLocation?.coords ? currentLocation.coords.longitude : "0"
  }&appid=${ApiKey}`;
  //search location url if user searches
  const searchLocationUrl = `weather/?q=${searchLocation}&appid=${ApiKey}`;
  const { data, isLoading, isError, refetch, error } = useFetchWeatherData({
    url: searchLocation ? searchLocationUrl : currentLocationUrl,
    key: "weather-data",
  });
  data;
  function handleSubmit(e) {
    e.preventDefault();
    refetch();
    if (searchLocation) {
      setLocation(searchLocation);
    }
  }
  useEffect(() => {
    if (data) {
      setNewWeatherData(data);
      setLocation(data.name);
    }
    refetch();
  }, [data]);
  return (
    <div>
      {isLocationLoading || isLoading ? (
        "Loading"
      ) : newWeatherData ? (
        <center>
          <div className="text-center bg-blend-luminosity bg-[url('./assets/images/background.webp')] bg-cover object-cover my-10 lg:w-[800px]  rounded-xl py-10 px-5 ">
            <form action="" onSubmit={handleSubmit}>
              <div className="flex gap-5">
                <TextField
                  placeholder="Enter location..."
                  variant="standard"
                  sx={{
                    padding: "0 10px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    height: "40px",
                  }}
                  inputProps={{
                    style: {
                      padding: "9px 0", // adjust this value to change the position of the underline
                    },
                  }}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  fullWidth
                />
                <Button type="submit" variant="contained" size="small">
                  <Search />
                </Button>
              </div>
            </form>
            {/* //weather data if availabe => data */}
            {isError ? (
              <p className="text-xl text-white mt-7">
                The location is unavailable. Try another one!
              </p>
            ) : (
              <div>
                <WeatherMainContainer
                  mainTemp={newWeatherData.main.temp}
                  weatherDesc={newWeatherData.weather[0].description}
                  placeName={newWeatherData.name}
                  weatherIcon={newWeatherData.weather[0].icon}
                  minAndMaxTemp={{
                    min: newWeatherData.main.temp_min,
                    max: newWeatherData.main.temp_max,
                  }}
                  windSpeed={newWeatherData.wind.speed}
                  feelsLikeTemp={newWeatherData.main.feels_like}
                  pressure={newWeatherData.main.pressure}
                />
              </div>
            )}
          </div>
        </center>
      ) : null}
    </div>
  );
};

export default Homepage;
