import { useQuery } from "@tanstack/react-query";
import { fetchValue } from "./fetch";

export const useFetchWeather = (url) => {
  return useQuery(["weather-data"], () => fetchValue(url));
};
