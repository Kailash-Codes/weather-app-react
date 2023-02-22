import { Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ForecastCard from "./ForecastCard";

const ForecastContainer = ({ forecasts, locationName }) => {
  return (
    <Container>
      <p className="text-center mb-10 mt-7 text-white text-2xl">The five days weather forecast for {locationName}</p>
      <div className="grid lg:grid-cols-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {forecasts.map((forecast) => (
          <ForecastCard
            key={forecast.dt}
            iconCode={forecast.weather[0].icon}
            mainTemp={forecast.main.temp}
            weatherDesc={forecast.weather[0].description}
            date={forecast.dt_txt}
          />
        ))}
      </div>
    </Container>
  );
};

export default ForecastContainer;
