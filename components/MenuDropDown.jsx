import React from "react";
import { useRouter } from "next/router";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useSideBar } from "../context/menuContext";
export default function MenuDropDown() {
  const router = useRouter()
    const {toogleSideBar} = useSideBar()
    const handleHomeRoute = ()=>{
      router.push("/")
      toogleSideBar()
    }
  return (
    <Box sx={{ minHeight: "100vh", position: "relative", }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 1rem",
        }}
      >
        <Avatar sx={{ backgroundColor: "primary.main" }}>E</Avatar>{" "}
        <IconButton onClick={toogleSideBar}>
          <CloseIcon />
        </IconButton>
      </Box>
      {/* create event   */}
      <Box
        sx={{
          height: "7rem",
          backgroundColor: "grey.100",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "0 2rem",
        }}
      >
        <Button
          size="large"
          color="secondary"
          sx={{
            backgroundColor: "primary.main",
            color: "grey.50",
            width: "100%",
            "&:hover": {backgroundColor: "primary.main"}
          }}
          startIcon={<CalendarMonthIcon />}
          
        >
          Create Event
        </Button>
      </Box>
          <Button sx={{marginTop: 3, marginLeft: 3}} onClick={handleHomeRoute}>Home</Button>
      <style jsx>{`
        a {
          color: #968176;
        }
        a:hover {
          text-decoration: underline;
        }
       
      
      `}</style>
    </Box>
  );
}
