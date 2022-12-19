import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

export default function ProfileDropDown() {
  const profileLinks = ["My Organisation", "My Profile", "Sign Out"];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "14rem",
        alignItems: "center",
      }}
    >
      <Box
        mt={1}
        sx={{
          border: "3px solid #968176",
          borderRadius: "50%",
          padding: ".1rem",
        }}
      >
        <Avatar
          src="/images/Anderson.png"
          sx={{ width: "3rem", height: "3rem" }}
        />
      </Box>
      <Typography mt={2} variant="subtitle1" sx={{ fontWeight: "600" }}>
        Sunday Omena
      </Typography>
      <Typography mt={1} variant="body2" sx={{ color: "grey.700" }}>
        sundayomena9@gmail.com
      </Typography>
      <Divider
        sx={{
          bgcolor: "grey.200",
          marginTop: 4,
          marginBottom: 2,
          width: "100%",
          position: "relative",
        }}
      />

      {profileLinks.map((item) => {
        return (
          <Button
            sx={{
              alignSelf: "flex-start",
              color: "grey.900",
              textTransform: "capitalize",
              marginLeft: 1,
            }}
          >
            {item}
          </Button>
        );
      })}
    </Box>
  );
}
