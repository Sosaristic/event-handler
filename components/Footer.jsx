import React from "react";
import Link from "next/link";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  const date = new Date();
  const year = date.getUTCFullYear();

  const LinkStyles = {
    padding: "1rem 4rem",
    display: "flex",
    flexDirection: "column",
    rowGap: 2,
    color: "#868686",
    "& a": { textDecoration: "none", color: "#868686" },
  };
  return (
    <footer>
     
      <Grid container sx={{backgroundColor: "#1c2131", display: "flex",}}>
        <Grid xs={12} sm={4} item sx={LinkStyles}>
          <Typography sx={{ color: "white" }}> Company</Typography>
          <Link href="#" legacyBehavior>
                  <a href="#" >               
                    About Us
                  </a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a href="#" >
                   
                    Help Center
                  </a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a href="#" >
                   
                    FAQ
                  </a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a href="#" >
                   
                Contact Us
                  </a>
                </Link>
        </Grid>
        <Grid xs={12} sm={4} item p={4} sx={LinkStyles}>
        <Typography sx={{ color: "white" }}> Useful Links</Typography>

        <Link href="#" legacyBehavior>
                  <a href="#" >               
                    Create Event
                  </a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a href="#" >
                   
                Sell Tickets Online
                  </a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a href="#" >
                   
                    Privacy Policy
                  </a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a href="#" >
                   
                Terms & Condition
                  </a>
                </Link>
        </Grid>
        <Grid xs={12} sm={4} item p={4} sx={LinkStyles}>
          <Typography sx={{ color: "white" }}>Follow us</Typography>
          <Box mt={1} mb={3} sx={{display: "flex", columnGap: 2}}>
          <IconButton sx={{border: "1px solid white"}}><FacebookRoundedIcon/></IconButton>
          <IconButton sx={{border: "1px solid white"}}><InstagramIcon/></IconButton>
          <IconButton sx={{border: "1px solid white"}}><TwitterIcon/></IconButton>
          <IconButton sx={{border: "1px solid white"}}><LinkedInIcon/></IconButton>
          <IconButton sx={{border: "1px solid white"}}><YouTubeIcon/></IconButton>


        </Box>
        </Grid>
        <Grid item xs={12}><Divider sx={{backgroundColor: "grey.600", margin: "2rem 0"}}/></Grid>
        <Grid
          item
          pb={3}
          xs={12}
          sx={{ display: "flex", color: "grey.600", justifyContent: "center",}}
        >
          <Typography variant="body2">
            &copy; {year} Music360. All rights reserved
          </Typography>
        </Grid>
      </Grid>
      <style jsx>{`
        a {
          color: #757575;
        }
        a:hover {
            color: white;
            }
       
      
      `}</style>
    </footer>
  );
}
