import { isError, useQuery } from "@tanstack/react-query";
import React from "react";
import ForecastContainer from "../components/forecast/ForecastContainer";
import { ApiKey } from "../config/ApiKey";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useWeatherQueryData } from "../hooks/useWeatherQueryData";

const FiveDaysForecast = () => {
  const { location } = useLocalStorage();
  const [weatherData, isWeatherLoading, isWeatherError] = useWeatherQueryData({
    url: `https://api.openweathermap.org/data/2.5/forecast/?q=${location}&appid=${ApiKey}`,
    key: "forecast-data",
  });
  return (
    <div>
      {isWeatherLoading ? (
        "loading"
      ) : (
        <div className="flex min-h-[70vh] items-center">
          <ForecastContainer
          locationName={weatherData.city.name}
          forecasts = {weatherData.list.filter((forecast)=>forecast.dt_txt.includes("12:00:00"))} />
        </div>
      )}
    </div>
  );
};

export default FiveDaysForecast;