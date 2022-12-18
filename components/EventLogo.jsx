import React from 'react'
import {Box, Avatar, Typography} from "@mui/material"
export default function EventLogo() {
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
        backgroundColor: {xs: "primary.main", sm: "white"} ,
        color: {xs: "white", sm: "primary.main"} ,
        fontWeight: "bold",
      }}
    >
      E
    </Avatar>
    <Typography
      sx={{ fontSize: 30, fontWeight: "bold", color: {xs: "black", sm: "white" }}}
    >
      Eventum
    </Typography>
  </Box>
  )
}
