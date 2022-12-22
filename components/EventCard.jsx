import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export default function ActionAreaCard() {
  return (
    <Card sx={{ flexBasis: {xs: "95%", sm: "45%", md: "30%", lg: "21%"} }} elevation={0}>
      <CardActionArea sx={{ borderRadius: 5 }}>
        <CardMedia
          component="img"
          height="180"
          image="/images/test-image-1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" sx={{ fontWeight: 750 }}>
            Spring showcase saturday April 30th 2022 at 7pm
          </Typography>
          <Box
            mt={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>AUD $75.00</Typography>
            <Typography sx={{ display: "flex", color: "grey.500" }}>
              <BookOnlineOutlinedIcon fontSize="small" /> 7 Remaining
            </Typography>
          </Box>
          <Box
            mt={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "grey.600"
              }}
            >
              <CalendarMonthOutlinedIcon /> 30 May . Sun, 4.30Pm
            </Typography>
            <Typography
            variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "grey.600"
              }}
            >
              <AccessTimeOutlinedIcon /> 1 hr
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
