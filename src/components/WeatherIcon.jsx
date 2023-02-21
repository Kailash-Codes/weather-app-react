import React from "react";

const WeatherIcon = ({ weatherIcon }) => {
  return (
    <div className=" h-28 overflow-hidden">
      <img
        src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
        alt="weather-icon"
        className="object-scale-down -mt-10"
      />
    </div>
  );
};

export default WeatherIcon;
