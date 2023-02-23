import React from "react";
import { useLocationDetails } from "../components/context/LocationDetailContext";
import ForecastContainer from "../components/forecast/ForecastContainer";
import { ApiKey } from "../config/ApiKey";
import { useFetchWeatherData } from "../hooks/fetch/useFetchWeatherData";

const FiveDaysForecast = () => {
  const [locationSearched] = useLocationDetails();
  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    isError: isWeatherError,
    error,
  } = useFetchWeatherData({
    url: `forecast?q=${locationSearched}&appid=${ApiKey}`,
    key: "forecast-data",
  });
  return (
    <div>
      {isWeatherLoading || isWeatherError ? (
        "loading"
      ) : weatherData && weatherData.city ? (
        <div className="flex min-h-[70vh] items-center">
          <ForecastContainer
            locationName={weatherData.city.name}
            forecasts={weatherData.list.filter((forecast) =>
              forecast.dt_txt.includes("12:00:00")
            )}
          />
        </div>
      ) : (
        "error"
      )}
    </div>
  );
};

export default FiveDaysForecast;
