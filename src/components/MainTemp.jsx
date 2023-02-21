import { Button, Switch, Typography } from "@mui/material";
import React, { useState } from "react";

const MainTemp = ({ mainTemp }) => {
  const [isInCelsius, setIsInCelsius] = useState(true);
  return (
    <div>
      <Typography variant="h1" sx={{ display: "flex" }}>
        {isInCelsius
          ? Math.round(mainTemp - 273.15)
          : Math.round(1.8 * (mainTemp - 273.15)) + 32}
        <p className="text-5xl ">
          <Button
            onClick={() => setIsInCelsius(!isInCelsius)}
            sx={{ fontSize: "30px",padding:"3px !important",color:"white" }}
>
            {" "}
            {isInCelsius ? "°c" : "°f"}
          </Button>
        </p>
      </Typography>
    </div>
  );
};

export default MainTemp;
