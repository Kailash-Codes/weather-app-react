import { Typography } from "@mui/material";
import React from "react";

const CurrentTime = () => {
  const currentTime = new Date().toString().slice(0, 15);
  return <Typography variant="p">{currentTime}</Typography>;
};

export default CurrentTime;
