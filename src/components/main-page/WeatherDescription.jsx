import { Typography } from "@mui/material";
import React from "react";

const WeatherDescription = ({ weatherDesc }) => {
  return <Typography variant="p">{weatherDesc}</Typography>;
};

export default WeatherDescription;
