import React, { useEffect, useState } from "react";
import WeatherMainContainer from "../components/WeatherMainContainer";
import { useWeatherQueryData } from "../hooks/useWeatherQueryData";
import { useLocation } from "../hooks/useLocation";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { ApiKey } from "../config/ApiKey";

const Homepage = () => {
  const [newWeatherData, setNewWeather] = useState("");
  const [currentLocation, isLocationLoading, isLocationError] = useLocation();
  const [searchLocation, setSearchLocation] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    refetchWeatherData();
  }
  const [weatherData, isWeatherLoading, isWeatherError, refetchWeatherData] =
    useWeatherQueryData(
      searchLocation
        ? `  https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=${ApiKey}
    `
        : `https://api.openweathermap.org/data/2.5/weather?lat=${
            currentLocation?.coords ? currentLocation.coords.latitude : "0"
          }&lon=${
            currentLocation?.coords ? currentLocation.coords.longitude : "0"
          }&appid=${ApiKey}`
    );
  useEffect(() => {
    if (weatherData) {
      setNewWeather(weatherData);
    }

    refetchWeatherData();
  }, [weatherData, isWeatherLoading]);
  return (
    <div>
      <>
        {isLocationLoading ? (
          <Box mt={20}>
            <center>
              <CircularProgress size="5rem" />
            </center>
          </Box>
        ) : isLocationError ? (
          "location error"
        ) : isWeatherLoading ? (
          <Box mt={20}>
            <center>
              <CircularProgress size="5rem" />
            </center>
          </Box>
        ) : isWeatherError ? (
          "Weather Error"
        ) : (
          <div>
            {!newWeatherData?.main ? (
              console.log("weather not found")
            ) : (
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
                    <WeatherMainContainer
                      mainTemp={newWeatherData.main.temp}
                      weatherDesc={newWeatherData.weather[0].description}
                      placeName={newWeatherData.name}
                      weatherIcon={newWeatherData.weather[0].icon}
                      minAndMaxTemp={{
                        min: weatherData.main.temp_min,
                        max: weatherData.main.temp_max,
                      }}
                      windSpeed={newWeatherData.wind.speed}
                      feelsLikeTemp={newWeatherData.main.feels_like}
                      pressure={newWeatherData.main.pressure}
                    />
                  </div>
                </div>
              </center>
            )}
          </div>
        )}
      </>
    </div>
  );
};

export default Homepage;
