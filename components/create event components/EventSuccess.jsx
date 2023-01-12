import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function EventSuccess() {

    const {push} = useRouter()
    useEffect(()=>{
      window.scrollTo(0, 0)
    }, [])
  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "14rem",
        gap: 3,
        padding: "1rem",
      }}
    >
      <Typography variant="h5">Success!</Typography>
      <Typography
        variant="body2"
        sx={{ textAlign: "center", fontWeight: 700, color: "grey.500" }}
      >
        You have created your Event Successfully
      </Typography>
      <Box>
        <CheckCircleOutlineIcon sx={{ color: "green", fontSize: "4rem" }} />
      </Box>
      <Button variant="contained" size="small" onClick={()=>push("/")}>
        Go Home
      </Button>
    </Container>
  );
}
