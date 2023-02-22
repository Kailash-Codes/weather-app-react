import React from "react";

const MinAndMaxTemp = ({ minAndMaxTemp }) => {
  return (
    <div className="text-xl">
      <b>min:</b> {Math.floor(minAndMaxTemp.min - 273.15)} /<b>max: </b>
      {Math.floor(minAndMaxTemp.max - 273.15)} &deg; C
    </div>
  );
};

export default MinAndMaxTemp;
