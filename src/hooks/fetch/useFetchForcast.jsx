import { useQuery } from "@tanstack/react-query";
import { fetchValue } from "./fetch";

export const useFetchForecast = (url) => {
  return useQuery(["weather-forecast",url], () => fetchValue(url));
};
