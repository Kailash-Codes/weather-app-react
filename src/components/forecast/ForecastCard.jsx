import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ForecastCard = ({ iconCode, mainTemp, weatherDesc, date }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "transparent",
        color: "white",
        borderRadius: "20px",
      }}
      className="pt-10 text-center w-full sm:w-auto flex flex-col justify-center"
    >
      <h1 className="text-5xl">{Math.round(mainTemp - 273.14)}°C</h1>
      <img src={`https://openweathermap.org/img/wn/${iconCode}@4x.png`} />
      <br />
      <Typography variant="h6" mb={3}>
        {weatherDesc}
      </Typography>
      <p className="bg-[#fc9e67] py-3">{date.slice(0, 10)}</p>
    </Card>
  );
};

export default ForecastCard;
