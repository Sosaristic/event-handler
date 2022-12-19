import React from "react";
import { useRouter } from "next/router";
import { useSideBar } from "../context/menuContext";

import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function MenuDropDown() {
  const router = useRouter();
  const { toogleSideBar } = useSideBar();
  const handleRoute = (url) => {
    router.push(url);
    toogleSideBar();
  };

  const dropDownList = [
    { title: "Home", url: "/" },
    { title: "Explore Events", url: "/sign-up" },
    { title: "Pricing", url: "/login" },
    { title: "Help", url: "/password-reset"},
  ];

  return (
    <Box sx={{ minHeight: "100vh", position: "relative", display: "flex", flexDirection: "column", }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 1rem",
        }}
      >
        <Avatar sx={{ backgroundColor: "primary.main", fontWeight: 900 }}>E</Avatar>{" "}
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
            "&:hover": { backgroundColor: "primary.main" },
          }}
          startIcon={<CalendarMonthIcon />}
        >
          Create Event
        </Button>
      </Box>

      {dropDownList.map((item) => {
        const {title, url} = item
        return (
          <Button
            fullWidth
            key={url}
            sx={{
              marginTop: 3,
              textTransform: "capitalize",
              display: "block",
              textAlign: "left",
              paddingLeft: 5,
              color: "grey.800",
            }}
            onClick={()=>handleRoute(url)}
          >
            {title}
          </Button>
        );
      })}
      
      <Box sx={{marginTop: "auto", padding: ".5rem 2.5rem"}}>
        <Typography variant="subtitle1" sx={{fontWeight: 700, color: "grey.900"}}>Follow Us</Typography>
        <Box mt={1} mb={3} sx={{display: "flex", columnGap: 2}}>
          <IconButton sx={{border: "1px solid #968176"}}><FacebookRoundedIcon/></IconButton>
          <IconButton sx={{border: "1px solid #968176"}}><InstagramIcon/></IconButton>
          <IconButton sx={{border: "1px solid #968176"}}><TwitterIcon/></IconButton>
          <IconButton sx={{border: "1px solid #968176"}}><LinkedInIcon/></IconButton>
          <IconButton sx={{border: "1px solid #968176"}}><YouTubeIcon/></IconButton>


        </Box>
      </Box>
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
