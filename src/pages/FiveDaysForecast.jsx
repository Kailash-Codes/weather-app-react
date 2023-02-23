import { Search } from "@mui/icons-material";
import { Button, CircularProgress, TextField } from "@mui/material";
import React from "react";
import { useLocationDetails } from "../components/context/LocationDetailContext";
import ForecastContainer from "../components/forecast/ForecastContainer";
import { ApiKey } from "../config/ApiKey";
import { useFetchWeatherData } from "../hooks/fetch/useFetchWeatherData";

const FiveDaysForecast = () => {
  const [locationSearched, setLocationSearched] = useLocationDetails();

  function handleSubmit(e) {
    e.preventDefault();
    setLocationSearched(e.target[0].value);
    refetch();
  }
  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    isError: isWeatherError,
    refetch,
    error,
  } = useFetchWeatherData({
    url: `forecast?q=${locationSearched}&appid=${ApiKey}`,
    key: "forecast-data",
  });
  return (
    <div>
      {isWeatherLoading ? (
        <div className="flex justify-center items-center min-h-[70vh]">
          <CircularProgress />
        </div>
      ) : weatherData && weatherData.city ? (
        <div className="flex min-h-[70vh] items-center">
          <ForecastContainer
            locationName={weatherData.city.name}
            forecasts={weatherData.list.filter((forecast) =>
              forecast.dt_txt.includes("12:00:00")
            )}
          />
        </div>
      ) : isWeatherError ? (
        <div className="text-center bg-blend-luminosity bg-[url('./assets/images/background.webp')] bg-cover object-cover my-10 lg:w-[800px] lg:ml-[50%] lg:translate-x-[-50%] rounded-xl py-10 px-5 ">
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
                onChange={(e) => setLocationSearched(e.target.value)}
                fullWidth
              />
              <Button type="submit" variant="contained" size="small">
                <Search />
              </Button>
            </div>
          </form>
          {/* //weather data if availabe => data */}
          <p className="text-xl text-white mt-7">
            Select location to view five days forecast.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default FiveDaysForecast;
