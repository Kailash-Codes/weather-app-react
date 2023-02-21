import axios from "axios";

const getWeather = (url) => {
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((e) => e.message);
};
export default getWeather;
