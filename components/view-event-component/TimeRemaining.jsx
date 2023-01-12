import React, { useEffect, useState } from "react";
import { intervalToDuration, formatDuration } from "date-fns";

import { Box, Typography } from "@mui/material";
const style = {
  flex: 1,
  width: "20%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  height: "5rem",
  backgroundColor: "#968176",
  borderRadius: "3px",
  color: "white",
  padding: "6px",
};
export default function TimeRemaining() {
  const [time, setTime] = useState([{
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }]);
 

  useEffect(() => {
     const interval = setInterval(()=>{
        const newDate = new Date(2024, 4, 15);
        const currentDate = new Date(Date.now());
        const duration = intervalToDuration({
            start: currentDate,
            end: newDate,
          });
          
          
          setTime({...duration})

     }, 1000)
     return ()=>{
        clearInterval(interval)
     }
   
  }, []);

  return (
    <Box sx={{ display: "flex", width: "100%", gap: 0.5 }}>
      <Box sx={style}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          {time?.days}
        </Typography>
        <Typography sx={{ fontWeight: 700, fontSize: { xs: ".6rem", md: "1rem" } }}>
          Days
        </Typography>
      </Box>
      <Box sx={style}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          {time?.hours}
        </Typography>
        <Typography sx={{ fontWeight: 700, fontSize: { xs: ".6rem", md: "1rem" } }}>
          Hours
        </Typography>
      </Box>
      <Box sx={style}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          {time?.minutes}
        </Typography>
        <Typography sx={{ fontWeight: 700, fontSize: { xs: ".6rem", md: "1rem" } }}>
          Minutes
        </Typography>
      </Box>
      <Box sx={style}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          {time?.seconds}
        </Typography>
        <Typography sx={{ fontWeight: 700, fontSize: { xs: ".6rem", md: "1rem" } }}>
          Seconds
        </Typography>
      </Box>
    </Box>
  );
}
