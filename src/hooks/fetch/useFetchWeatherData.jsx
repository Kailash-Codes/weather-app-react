import { useQuery } from "@tanstack/react-query";
import { fetchValue } from "./fetch";

export const useFetchWeatherData = ({ url, key }) => {
  return useQuery([key], () => fetchValue(url));
};
