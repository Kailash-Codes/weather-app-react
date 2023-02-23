import api from ".";

export const request = ({ ...options }) => {
  api.defaults.headers["Content-Type"] = "application/json";
  console.log(api.defaults);
  return api(options)
    .then((response) => {
      return response; //response is from the query
    })
    .catch((e) => {
      return e; //error from query
    });
};
