import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useWeatherQueryData = (url) => {
  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    isWeatherError,
  } = useQuery({
    queryKey: ["weather-data"],
    queryFn: () => {
      return axios
        .get(url)
        .then((res) => res.data)
        .catch((e) => e.message);
    },
  });
  return [weatherData, isWeatherLoading, isWeatherError];
};
