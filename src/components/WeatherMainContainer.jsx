import { Divider } from "@mui/material";
import React from "react";
import CurrentTime from "./CurrentTime";
import MainTemp from "./MainTemp";
import MinAndMaxTemp from "./MinAndMaxTemp";
import PlaceName from "./PlaceName";
import WeatherDescription from "./WeatherDescription";
import WeatherIcon from "./WeatherIcon";
import "./weather.css";
import Wind from "./Wind";
import { Stack } from "@mui/system";
import FeelsLike from "./FeelsLike";
import Pressure from "./Pressure";

const WeatherMainContainer = (props) => {
  return (
    <div>
      <div className=" sm:gap-10 items-center sm:items-start justify-center sm:justify-between text-white container flex sm:flex-row flex-col  pt-10 rounded-lg">
        <div className="">
          <PlaceName placeName={props.placeName} />
          <CurrentTime />
          <Divider sx={{ borderColor: "white" }} />
          <WeatherIcon weatherIcon={props.weatherIcon} />
          <Divider sx={{ borderColor: "white" }} />
          <WeatherDescription weatherDesc={props.weatherDesc} />
        </div>
        <div className="flex flex-col">
          <MainTemp mainTemp={props.mainTemp} />
          <Divider sx={{ borderColor: "white" }} />
          <MinAndMaxTemp minAndMaxTemp={props.minAndMaxTemp} />
        </div>
      </div>
      <Stack
        flexDirection="row"
        gap="50px"
        className="justify-center md:justify-between"
        flexWrap="wrap"
        color="white"
        fontSize="30px"
        mt={5}
      >
        <FeelsLike feelsLikeTemp={props.feelsLikeTemp} />
        <Wind windSpeed={props.windSpeed} />
        <Pressure pressure={props.pressure} />
      </Stack>
    </div>
  );
};

export default WeatherMainContainer;
