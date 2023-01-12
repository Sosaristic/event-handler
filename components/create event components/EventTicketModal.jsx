import React, { useState, useId } from "react";
import { useForm, Controller } from "react-hook-form";

import {
  Box,
  Button,
  Switch,
  Divider,
  IconButton,
  TextField,
  Typography,
  FormControlLabel,
  Paper,
  MenuItem,
  Stack,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { format, getTime } from "date-fns";

export default function EventTicketModal({ ticketType, handleModalClose, handleTicketCardDetails }) {
  const ticketNames = ["Regular", "VIP", "VVIP", "Table of 4", "Table of 6 - Gold", "Table of 8- Diamond", "Dorime"]

const id = useId()
 
  const time = getTime(new Date());

  const [switchOpen1, setSwitchOpen1] = useState(true);
  const [switchOpen2, setSwitchOpen2] = useState(true);
  const [switchOpen3, setSwitchOpen3] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id,
      ticketName: "Regular",
      totalTickets: 0,
      maxOrderOfTickets: 0,
      discount: 0,
      discountFormat: "percentage(%)",
      discountEndDate: null,
      discountEndTime: null,
      ticketPrice: 0,
    },
  });

  const onSubmit = (data) =>{
    
     handleTicketCardDetails(data)
    handleModalClose()
  }
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      py={1}
      sx={{
        position: "absolute",
        top: "5%",
        left: "50%",
        transform: "translate(-50%, 0)",
        width: { xs: "90vw", md: "60%" },
        bgcolor: "background.paper",
        boxShadow: 24,
        overflowY: "scroll",
        maxHeight: "90vh",
      }}
    >
      <Box
        px={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>Create Ticket</Typography>
        <IconButton onClick={handleModalClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ margin: "1rem 0" }} />
      <Box px={4}>
      
        <label htmlFor="ticket name">Ticket Name</label>
        <Controller
              name="ticketName"
              control={control}
              rules={{ required: " required" }}
              render={({ field }) => (
                <TextField
                 
                  id="ticket name"
                  select
                  fullWidth
                  autoComplete="off"
                  {...field}
                  label="Ticket name"
                  error={Boolean(errors.ticketName)}
                  helperText={errors.ticketName?.message}
                  sx = {{marginTop: 2}}
                >
                  {ticketNames.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
        <Paper>
          <Box px={2} py={2} mt={3} sx={{ border: "1px solid lightgrey" }}>
            <Typography>Ticket Restrictions</Typography>
            <Box
              mt={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  color: "grey.700",
                  // fontSize: `clamp(.2rem, -0.875rem + 8.333vw, 1.2rem)`,
                }}
              >
                Total Number of Tickets Available
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    label="Test"
                    onChange={() => setSwitchOpen1(!switchOpen1)}
                    name="totalTickets"
                    checked={switchOpen1}
                  />
                }
                label="Unlimited"
              />
            </Box>
            {!switchOpen1 && (
              <Controller
                name="totalTickets"
                control={control}
                rules={{ required: "required" }}
                render={({ field }) => (
                  <TextField
                    type="number"
                    fullWidth
                    placeholder="Enter Number of Tickets"
                    autoComplete="off"
                    {...field}
                    label="Enter Total Number of Tickets"
                    error={Boolean(errors.totalTickets)}
                    helperText={errors.totalTickets?.message}
                    sx={{ marginTop: 2 }}
                  />
                )}
              />
            )}

            <Divider sx={{ margin: 2 }} />
            {/* numbers of tickets per customer */}
            <Box
              mt={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  color: "grey.700",
                  // fontSize: `clamp(.2rem, -0.875rem + 8.333vw, 1.2rem)`,
                }}
              >
                Maximum Number of Tickets for each Customer
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    onChange={() => setSwitchOpen2(!switchOpen2)}
                    checked={switchOpen2}
                    name="ticketPerCustomer"
                  />
                }
                label="Unlimited"
              />
            </Box>
            {!switchOpen2 && (
              <Controller
                name="maxOrderOfTickets"
                control={control}
                rules={{ required: "required" }}
                render={({ field }) => (
                  <TextField
                    type="number"
                    fullWidth
                    autoComplete="off"
                    {...field}
                    label="Enter max per order"
                    error={Boolean(errors.maxOrderOfTickets)}
                    helperText={errors.maxOrderOfTickets?.message}
                    sx={{ marginTop: 2 }}
                  />
                )}
              />
            )}
          </Box>
        </Paper>

        {/* ticket price */}
        
          <Box mt={3} sx={{display: "flex", flexDirection: "column",}}>
            <label htmlFor="ticketPrice">Price</label>
          
            <Controller
                name="ticketPrice"
                control={control}
                rules={{ required: "required" }}
                render={({ field }) => (
                  <TextField
                    type="number"
                    id="ticketPrice"
                    variant="outlined"
                    fullWidth
                    autoComplete="off"
                    {...field}
                    label="Ticket Price"
                    error={Boolean(errors.ticketPrice)}
                    helperText={errors.ticketPrice?.message}
                    sx={{ marginTop: 2, }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">&#8358;</InputAdornment>,
                    }}
                  />
                )}
              />
              
          </Box>


        {/* early bird discount */}
        <Paper>
          <Box mt={3} px={2} py={2} sx={{ border: "1px solid lightgrey" }}>
            <FormControlLabel
              control={<Switch onChange={()=>setSwitchOpen3(!switchOpen3)} checked={switchOpen3}/>}
              label="I want to offer early bird discount"
            />
            <Typography sx={{ color: "grey.500" }}>
              Enabling this discount lets your attendees get all the regular
              tickets features at a discounted price.
            </Typography>
            {switchOpen3 && (
              <Box
                mt={3}
                sx={{
                  display: "flex",
                  alignItems: "stretch",
                  gap: 2,
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Box>
                  <label htmlFor="discount">Discount*</label>
                  <Controller
                    name="discount"
                    control={control}
                    rules={{ required: "discount required" }}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        type="number"
                        id="discount"
                        autoComplete="off"
                        {...field}
                        label="Discount"
                        error={Boolean(errors.discount)}
                        helperText={errors.discount?.message}
                        sx={{ marginTop: 2 }}
                      />
                    )}
                  />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="discountFormat">Format*</label>
                  <Controller
                    name="discountFormat"
                    control={control}
                    rules={{ required: "price" }}
                    render={({ field }) => (
                      <TextField
                        id="discountFormat"
                        select
                        autoComplete="off"
                        {...field}
                        label="Price*"
                        error={Boolean(errors.price)}
                        helperText={errors.price?.message}
                        sx={{ marginTop: 2, width: "8rem" }}
                      >
                        <MenuItem value="percentage(%)" selected={true}>
                          {" "}
                          Percent(%)
                        </MenuItem>
                        <MenuItem value="fixed">Fixed</MenuItem>
                      </TextField>
                    )}
                  />
                </Box>
                <Box>
                  <label htmlFor="discountEndDate">Date ends on*</label>
                  <Controller
                    name="discountEndDate"
                    control={control}
                    rules={{ required: " required" }}
                    render={({ field }) => (
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                          <DatePicker
                            label="date*"
                            openTo="year"
                            views={["year", "month", "day"]}
                            {...field}
                            renderInput={(params) => (
                              <TextField
                                id="discountEndDate"
                                {...params}
                                sx={{ marginTop: 2 }}
                              />
                            )}
                          />
                        </Stack>
                      </LocalizationProvider>
                    )}
                  />
                </Box>
                <Box>
                  <label htmlFor="discountEndTime">Time</label>
                  <Controller
                    name="discountEndTime"
                    control={control}
                    rules={{ required: "required" }}
                    render={({ field }) => (
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                          <TimePicker
                            label="Time*"
                            {...field}
                            renderInput={(params) => (
                              <TextField
                                id="discountEndTime"
                                {...params}
                                sx={{ marginTop: 2 }}
                              />
                            )}
                          />
                        </Stack>
                      </LocalizationProvider>
                    )}
                  />
                </Box>
              </Box>
            )}
          </Box>
        </Paper>
      </Box>
      <Divider sx={{margin: "2rem 0"}}/>
      <Box p={2} sx={{display: "flex", justifyContent: "flex-end", gap: 2}}>
      <Button size="large" variant="outlined" type="button" onClick={handleModalClose}>Cancel</Button>
      <Button size="large" variant="contained" type="submit">Save</Button>
      </Box>
      
    </Box>
  );
}
