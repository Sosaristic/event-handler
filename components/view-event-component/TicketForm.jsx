import React, { useState } from "react";
import { Box, MenuItem, TextField } from "@mui/material";

export default function TicketForm() {
    const [chosenTicket, setChosenTicket] = useState("regular")
    const ticketNames = ["Regular", "VIP", "VVIP", "Table of 4", "Table of 6 - Gold", "Table of 8 - Diamond", "Dorime"]
const handleChange = (e)=>{
console.log(e);
}
  return (
    <Box my={2} component="form">
      <label htmlFor="ticket-type">Ticket type</label>
      <TextField id="ticket-type" select fullWidth autoComplete="off" sx={{ marginTop: 2 }} onChange={handleChange}>
        {ticketNames.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
