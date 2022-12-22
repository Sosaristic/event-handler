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

import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb"

export default function CreateEvent() {
  const router = useRouter();
  console.log(router);
  return (
    <Layout>
      <Head>
        <title>Create Event</title>
      </Head>
      <Box
        
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Box sx={{ height: "20%" }}>
          <Breadcrumb>
          <Link href="/" legacyBehavior><a href="/">Home</a></Link>
          <Typography>Create</Typography>
          </Breadcrumb>
        </Box>
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
          <Card
            sx={{
              minWidth: 100,
              alignSelf: "center",
              padding: "1rem 1.5rem",
              marginTop: "3rem",
            }}
          >
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ alignSelf: "center", marginTop: 1 }}>
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
    </Layout>
  );
}
