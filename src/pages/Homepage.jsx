import React, { useEffect, useState } from "react";
import { ApiKey } from "../config/ApiKey";
import getWeather from "../feature/getWeather";
import { useLocation } from "../hooks/useLocation";
import WeatherMainContainer from "../components/WeatherMainContainer";
import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { isError, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Box } from "@mui/system";

const Homepage = () => {
  const [currentLocation, isLocationLoading, isLocationError] = useLocation();
  const [searchLocation, setSearchLocation] = useState("thapathali");
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await refetch();
    } catch (error) {
      alert("Unknown location. Please enter a valid location.");
    }
  }
  function showError() {
    alert("location error");
  }
  const {
    refetch,
    data: weatherData,
    isLoading: isWeatherLoading,
    isError: isWeatherError,
  } = useQuery({
    queryKey: ["weather-data"],
    queryFn: () => {
      return axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=${ApiKey}`
        )
        .then((res) => res.data)
        .catch((e) => e.message);
    },
  });

  return (
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
          
          {!weatherData?.main ? (
            <center>
              
            <div className="text-center bg-blend-luminosity bg-[url('./assets/images/background.webp')] bg-cover object-cover my-10 lg:w-[800px] py-10 rounded-xl  px-5 ">
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
              <Box p={5}>
                <Typography variant="h4" color={"white"}>
                  The location is not available. Try searching for another
                </Typography>
              </Box>
            </div>
            </center>

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
                    mainTemp={weatherData.main.temp}
                    weatherDesc={weatherData.weather[0].description}
                    placeName={weatherData.name}
                    weatherIcon={weatherData.weather[0].icon}
                    minAndMaxTemp={{
                      min: weatherData.main.temp_min,
                      max: weatherData.main.temp_max,
                    }}
                  />
                </div>
              </div>
            </center>
          )}
        </div>
      )}
    </>
  );
};

export default Homepage;
