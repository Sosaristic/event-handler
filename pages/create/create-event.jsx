import React from "react";
import Head from "next/head"
import Link from "next/link";
import { useRouter } from "next/router";

import {
  Box,
  Typography,
  Divider,
  Card,
  CardContent,
  Avatar,
  CardActions,
  Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Breadcrumb from "../../components/Breadcrumb"

export default function CreateEvent() {
  const router = useRouter();
  
  return (
    <section>
      <Head>
        <title>Create Event</title>
      </Head>
      <Box
        pb={1}
        sx={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          
        }}
      >
       
          <Breadcrumb>
          <Link href="/" legacyBehavior><a href="/">Home</a></Link>
          <Typography>Create</Typography>
          </Breadcrumb>
       
        <Box
          sx={{
            height: "80%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              alignSelf: "center",
              marginTop: "5rem",
              fontSize: `clamp(1rem, -0.875rem + 8.333vw, 3.5rem)`,
            }}
          >
            Create New Event
          </Typography>
          <Divider variant="middle" sx={{ margin: "1.5rem 0" }} />
          <Box sx={{position: "relative", display: "flex", alignSelf: "center", }}>
          <Card
            sx={{
              minWidth: 100,
              
              

            
            }}
          >
            <CardContent sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Box sx={{  marginTop: 1, display: "flex", alignItems: "center", }}>
                <Avatar>
                  <LocationOnIcon />
                </Avatar>
              </Box>
              <Typography
                mt={2}
                sx={{
                  fontWeight: 700,
                  fontSize: `clamp(1rem, -0.875rem + 8.333vw, 1.5rem)`,
                }}
              >
                Create a Venue Event
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={()=>router.push("/create/create-event-details")}
              >
                Create
              </Button>
            </CardActions>
          </Card>
          </Box>
        </Box>
      </Box>
      </section>
  );
}
