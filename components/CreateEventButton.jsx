import { Button } from "@mui/material";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function CreateEventButton({ size }) {
  return (
    <Button
      startIcon={<CalendarMonthIcon />}
      size={size}
      color="secondary"
      sx={{
        backgroundColor: "primary.main",
        color: "grey.50",
        textTransform: "capitalize",
        "&:hover": { backgroundColor: "primary.main" },
      }}
    >
      Create Event
    </Button>
  );
}
