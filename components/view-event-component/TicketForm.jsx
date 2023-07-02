import React, { useMemo, } from "react";
import { useRouter } from "next/router";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
export default function TicketForm() {
  const router = useRouter()
  console.log(router.asPath);
  const ticketNames = useMemo(() => {
    return [
      { type: "regular", id: 1, price: 1000 },
      { type: "VIP", id: 2, price: 3000 },
      { type: "VVIP", id: 3, price: 5000 },
      { type: "Table of 4", id: 4, price: 8000 },
      { type: "Table of 6", id: 5, price: 10000 },
      { type: "Table of 8", id: 6, price: 12000 },
      { type: "Dorime", id: 7, price: 15000 },
    ];
  }, []);
const quantity = [1,2,3,4,5,6,7,8,9,10]

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ticketType: ticketNames[0].type,
      qty: 1
    },
  });

  const { ticketType, qty } = watch();

  // update the ticket price
  const getTicketPrice = (name, quantity) => {
    const singleTicket = ticketNames.filter((item) => item.type === name);
    const { price } = singleTicket[0] || {};
    return price * qty;
  };

  const getSubmittedValues = (e) => {
    router.push({pathname: `/venue-event-view/checkout`, query: {path: router.asPath}})
    
  };
  return (
    <Box my={2} component="form" px={{xs: 1, sm: 2}} onSubmit={handleSubmit(getSubmittedValues)}>
      <Box sx={{display: "flex"}}>
        <Box sx={{flex: 3}}>
        <Controller
          name="ticketType"
          control={control}
          rules={{ required: "Event name is required" }}
          render={({ field }) => (
            <TextField
              id="ticket-type"
              label="select ticket"
              select
              fullWidth
              autoComplete="off"
              sx={{ marginTop: 2 }}
              {...field}
            >
              {ticketNames?.map((option) => (
                <MenuItem key={option.id} value={option.type}>
                  {option.type}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        </Box>
      <Box>
        <Controller
          name="qty"
          control={control}
          rules={{ required: "quantity is required is required" }}
          render={({ field }) => (
            <TextField
              id="quantity"
              label="Qty"
              select
              fullWidth
              autoComplete="off"
              sx={{ marginTop: 2 }}
              {...field}
            >
              {quantity?.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        </Box>

      </Box>


      <Box mt={2}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.2rem", lg: "1.5rem" },
            border: "1px solid gray",
            padding: "12px 8px",
            backgroundColor: "grey",
            color: "white",
          }}
        >
          &#8358; {getTicketPrice(ticketType).toLocaleString("en-US")}
        </Typography>
      </Box>
      <Button
        fullWidth
        type="submit"
        sx={{
          padding: "12px 8px",
          fontSize: { xs: "1rem", lg: "1.2rem" },
          marginTop: "1rem",
          backgroundColor: "primary.main",
          color: "white",
          "&:hover": { backgroundColor: "primary.main" },
          textTransform: "capitalize",
        }}
      >
        Book Now
      </Button>
    </Box>
  );
}
