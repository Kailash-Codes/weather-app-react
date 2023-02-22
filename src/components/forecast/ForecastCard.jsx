import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ForecastCard = ({ iconCode, mainTemp ,weatherDesc}) => {
  return (
    <Card variant="outlined" sx={{backgroundColor:"transparent",borderRadius:"20px",padding:"20px 0" , textAlign:"center",color:"white"}}>
      <h1 className="text-4xl">{Math.round(mainTemp-273.14)}°C</h1>
      <img src={`https://openweathermap.org/img/wn/${iconCode}@4x.png`} /><br/>
      <Typography variant="p">{weatherDesc}</Typography>
    </Card>
  );
};

export default ForecastCard;
