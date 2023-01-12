import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  ClickAwayListener,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import GroupsIcon from "@mui/icons-material/Groups";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CreateEventTicketCard({ item, handleDelete }) {
  const {
    ticketName,
    totalTickets,
    maxOrderOfTickets,
    ticketPrice,
    discount,
    discountFormat,
    id,
  } = item;
  console.log(ticketPrice);
  const colorType = (type) => {
    return type === "regular"
      ? "#717171"
      : type === "VIP"
      ? "#6b63ff"
      : type === "VVIP"
      ? "#7C0A02"
      : type === "Table of 4"
      ? "#FF3800"
      : type === "Table of 6 - Gold"
      ? "#BD33A4"
      : type === "Table of 8- Diamond"
      ? "#5DADEC"
      : "#4A646C";
  };

  return (
    <Paper>
      <Box
        mt={2}
        py={2}
        px={2}
        sx={{ border: "5px solid lightgrey", borderWidth: "thin" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: `clamp(.7rem, -0.875rem + 8.333vw, 1.2rem)`,
            }}
          >
            <Avatar sx={{ backgroundColor: "#f5edfc" }}>
              <BookOnlineIcon
                sx={{
                  transform: "rotate(45deg)",
                  color: colorType(ticketName),
                }}
              />
            </Avatar>

            <Box>
              <Typography
                variant="body2"
                component="span"
                sx={{
                  backgroundColor: colorType(ticketName),
                  borderRadius: 5,
                  padding: ".2rem 1rem",
                  marginLeft: 0.5,
                  color: "white",
                }}
              >
                {ticketName}
              </Typography>

              <Typography sx={{ color: "grey.600" }}>
                {ticketPrice == 0 ? "Free" : <span>&#8358; {ticketPrice}</span>}
              </Typography>
            </Box>
          </Box>
          <Box id={id} sx={{ position: "relative" }}>
            <IconButton size="small" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
        <Divider sx={{ margin: "1rem 0" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            rowGap: 2,
          }}
        >
          {/* total ticket box */}
          <Box sx={{ display: "flex", gap: 1, flex: 1 }}>
            <Avatar>
              <BookOnlineIcon sx={{ transform: "rotate(90deg)" }} />
            </Avatar>
            <Box>
              <Typography variant="body2" sx={{ color: "grey.500" }}>
                Total Tickets
              </Typography>
              <Typography>
                {totalTickets != "" ? totalTickets : "Unlimited"}
              </Typography>
            </Box>
          </Box>
          {/* ticket per customer box */}
          <Box sx={{ display: "flex", gap: 1, flex: 1 }}>
            <Avatar>
              <GroupsIcon fontSize="small" />
            </Avatar>
            <Box>
              <Typography
                variant="body2"
                sx={{ color: "grey.500", fontWeight: 700 }}
              >
                Ticket limit per customer
              </Typography>
              <Typography>
                {maxOrderOfTickets != "" ? maxOrderOfTickets : "Unlimited"}
              </Typography>
            </Box>
          </Box>
          {/* discount box */}
          <Box sx={{ display: "flex", gap: 1, flex: 1 }}>
            <Avatar>
              <ShoppingCartIcon />
            </Avatar>
            <Box>
              <Typography variant="body2" sx={{ color: "grey.500" }}>
                Discount
              </Typography>
              <Typography>
                {discountFormat == "percentage(%)" ? (
                  `${discount}%`
                ) : (
                  <span>&#8358; {discount}</span>
                )}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
