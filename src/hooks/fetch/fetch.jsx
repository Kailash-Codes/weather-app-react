import { request } from "../../utils/axios-utils";

export const fetchValue = (url) => {
  return request({ url: url, method: "GET" })
    .then((data) => data.data)
    .catch((e) => console.log(e));
};
