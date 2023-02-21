import { Typography } from "@mui/material";
import React from "react";

const MainTemp = ({ mainTemp }) => {
  return (
    <div>
      <Typography variant="h1" sx={{ display: "flex" }}>
        {Math.round(mainTemp - 273.15)}
        <p className="text-5xl">&deg;c</p>
      </Typography>
    </div>
  );
};

export default MainTemp;
