import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocationDetails } from "../components/context/LocationDetailContext";
import ForecastContainer from "../components/forecast/ForecastContainer";
import { ApiKey } from "../config/ApiKey";
import { useFetchForecast } from "../hooks/fetch/useFetchForcast";

const FiveDaysForecast = () => {
  const navigate = useNavigate();
  const [locationSearched] = useLocationDetails();
  console.log(locationSearched);
  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    isError: isWeatherError,
  } = useFetchForecast(`forecast?q=${locationSearched}&appid=${ApiKey}`);
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
