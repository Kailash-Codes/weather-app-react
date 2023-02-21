import React, { useEffect, useState } from "react";
import { ApiKey } from "../config/ApiKey";
import getWeather from "../feature/getWeather";
import { useLocation } from "../hooks/useLocation";
import WeatherMainContainer from "../components/WeatherMainContainer";
import { Button, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { isError, useQuery } from "@tanstack/react-query";
import axios from "axios";

const Homepage = () => {
  const [currentLocation, isLocationLoading, isLocationError] = useLocation();
  const [searchLocation, setSearchLocation] = useState("thapathali");
  function handleSubmit(event) {
    event.preventDefault();
    refetch();
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
    onError:()=>showError(),
    queryKey: ["weather-data"],
    queryFn: (condition) => {
      return axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=${ApiKey}`
        )
        .then((response) => response.data)
        .catch((e) => e.message);
    },
  });

  return (
    <>
      {isLocationLoading ? (
        "Loading"
      ) : (
        <center>
          {isWeatherError ? "fetching" : null}
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
            {weatherData ? (
              //weather data if availabe => weatherData
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
            ) : (
              "loading failed"
            )}
          </div>
        </center>
      )}
    </>
  );
};

export default Homepage;
