import React from 'react'
import {Box, Avatar, Typography} from "@mui/material"
export default function EventLogo({backgroundColor, color, avatarColor, avatarBackgroundColor}) {
  return (
    <Box
   
    sx={{
      display: "flex",
      alignItems: "center",
      height: "fit-content",
      position: "relative",
      justifyContent: "space-around",
      width: "12rem",
    }}
  >
    <Avatar
      sx={{
        backgroundColor: `${avatarBackgroundColor && avatarBackgroundColor}` ,
        color: `${avatarColor && avatarColor}` ,
        fontWeight: 900,
      }}
    >
      E
    </Avatar>
    <Typography
      sx={{ fontSize: 30, fontWeight: "bold", color: `${color}`}}
    >
      Eventum
    </Typography>
  </Box>
  )
}
