import React from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useSideBar } from "../context/menuContext";

export default function CreateEventButton({ size }) {
    const router = useRouter()
    const {sideBar, toogleSideBar} = useSideBar()

    const handleRoute = ()=>{
        router.push("/create/create-event")
    }

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
      onClick={handleRoute}
    >
      Create Event
    </Button>
  );
}
