import React from "react";

const FeelsLike = ({ feelsLikeTemp }) => {
  return <div>FeelsLike : <br/>{Math.round(feelsLikeTemp-273.15)}°c</div>;
};

export default FeelsLike;
