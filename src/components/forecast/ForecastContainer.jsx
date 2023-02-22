import { Container } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ForecastCard from "./ForecastCard";

const ForecastContainer = ({ forecasts }) => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center"}}>
      <Stack flexDirection="row" gap="30px" flexWrap="wrap">
        {forecasts.map((forecast) => (
          <ForecastCard
            key={forecast.dt}
            iconCode={forecast.weather[0].icon}
            mainTemp={forecast.main.temp}
            weatherDesc={forecast.weather[0].description}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default ForecastContainer;
