import { Search } from "@mui/icons-material";
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import WeatherMainContainer from "../components/main-page/WeatherMainContainer";
import { ApiKey } from "../config/ApiKey";
import { useLocation } from "../hooks/useLocation";
import { useWeatherQueryData } from "../hooks/useWeatherQueryData";
const Homepage = () => {
  const [currentLocation, isLocationLoading, isLocationError] = useLocation();
  const [searchLocation, setSearchLocation] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    refetchWeatherData();
  }
  const [weatherData, isWeatherLoading, isWeatherError, refetchWeatherData] =
    useWeatherQueryData({
      url: searchLocation
        ? `  https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=${ApiKey}
  `
        : `https://api.openweathermap.org/data/2.5/weather?lat=${
            currentLocation?.coords ? currentLocation.coords.latitude : "0"
          }&lon=${
            currentLocation?.coords ? currentLocation.coords.longitude : "0"
          }&appid=${ApiKey}`,
      key: "weather-data",
    });
  useEffect(() => {
    refetchWeatherData();
  });
  return (
    <div>
      {isWeatherError ? "error to get weather" : null}
      {isLocationLoading || isWeatherLoading ? (
        "Loading"
      ) : weatherData ? (
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
            {/* //weather data if availabe => weatherData */}
            <div>
              {localStorage.setItem("location", weatherData.name)}
              {weatherData && weatherData.weather ? (
                <WeatherMainContainer
                  mainTemp={weatherData.main.temp}
                  weatherDesc={weatherData.weather[0].description}
                  placeName={weatherData.name}
                  weatherIcon={weatherData.weather[0].icon}
                  minAndMaxTemp={{
                    min: weatherData.main.temp_min,
                    max: weatherData.main.temp_max,
                  }}
                  windSpeed={weatherData.wind.speed}
                  feelsLikeTemp={weatherData.main.feels_like}
                  pressure={weatherData.main.pressure}
                />
              ) : (
                <center>
                  <p className="text-white mt-5">
                    The location is not available. Try another location.
                  </p>
                </center>
              )}
            </div>
          </div>
        </center>
      ) : (
        console.log("error")
      )}
    </div>
  );
};
export default Homepage;
