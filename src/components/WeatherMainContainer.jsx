import { Divider } from "@mui/material";
import React from "react";
import CurrentTime from "./CurrentTime";
import MainTemp from "./MainTemp";
import MinAndMaxTemp from "./MinAndMaxTemp";
import PlaceName from "./PlaceName";
import WeatherDescription from "./WeatherDescription";
import WeatherIcon from "./WeatherIcon";
import './weather.css'

const WeatherMainContainer = (props) => {
  return (
    <div className=" sm:gap-10 items-center sm:items-start justify-center sm:justify-between text-white container flex sm:flex-row flex-col  px-5  py-10 rounded-lg">
      <div className="">
        <PlaceName placeName={props.placeName} />
        <CurrentTime />
        <Divider sx={{ borderColor: "white" }} />
        <WeatherIcon weatherIcon={props.weatherIcon} />
        <Divider sx={{borderColor:"white"}}/>
        <WeatherDescription weatherDesc={props.weatherDesc} />
      </div>
      <div className="flex flex-col">
        <MainTemp mainTemp={props.mainTemp} />
        <Divider sx={{ borderColor: "white" }} />

        <MinAndMaxTemp minAndMaxTemp={props.minAndMaxTemp} />
      </div>
    </div>
  );
};

export default WeatherMainContainer;
