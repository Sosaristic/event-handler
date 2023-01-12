import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { format, getTime } from "date-fns";

export default function CreateEventStep3({handleBack, getStep3Data}) {
  const [bookingStartImm, setBookingStartImm] = useState(true);
  const [bookingToEndTillEnd, setBooingToEndTillEnd] = useState(true);
  const [switchOpen3, setSwitchOpen3] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      bookingEndDate: null,
      bookingEndTime: null,
      continueBookingDate: null,
      contnueBookingTime: null,
      additionalInfo: "",
    
      
    },
  });
  return (
    <Container maxWidth="md" sx={{ backgroundColor: "white" }}>
      <Box sx={{ display: "flex", gap: 2, paddingBlockStart: 2 }}>
        <SettingsIcon />
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          Settings
        </Typography>
      </Box>
      <Divider sx={{ margin: "1rem 0" }} />

      <Typography sx={{ fontWeight: 700 }}>
        Let's Configure a few additional options for your event!
      </Typography>

      <Typography sx={{ color: "grey.700" }}>
        Change the following settings based on your preferences to customise
        your event accordingly.
      </Typography>
      {/* form component */}
      <Box mt={3} component="form" onSubmit={handleSubmit(getStep3Data)}>
        <Box sx={{ display: "flex" }}>
          <Switch
            checked={bookingStartImm}
            onChange={() => setBookingStartImm((prev) => !prev)}
          />
          <Box>
            <Typography sx={{ fontWeight: 700 }}>
              I want the bookings to start immediately.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "grey.700", marginTop: 1 }}
            >
              Disable this option if you want to start your booking from a
              specific date and time.
            </Typography>
          </Box>
        </Box>
        {/* booking to start immediately  */}
        {!bookingStartImm && (
          <Box>
            <Typography>Booking starts on</Typography>
            <Typography>
              Specify the date and time when you want the booking to start.
            </Typography>

            <Box mt={3} sx={{ display: "flex", gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <label htmlFor="Event-date">Event Date*</label>
                <Controller
                  name="bookingEndDate"
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
                              id="event-date"
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
              <Box sx={{ flex: 1 }}>
                <label htmlFor="event-time">Time</label>
                <Controller
                  name="bookingEndTime"
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
                              id="event-time"
                              {...params}
                              sx={{ marginTop: 2, flex: 1 }}
                            />
                          )}
                        />
                      </Stack>
                    </LocalizationProvider>
                  )}
                />
              </Box>
            </Box>
          </Box>
        )}

        <Divider sx={{ margin: "1.5rem 0" }} />

        <Box sx={{ display: "flex" }}>
          <Switch
            checked={bookingToEndTillEnd}
            onChange={() => setBooingToEndTillEnd((prev) => !prev)}
          />
          <Box>
            <Typography sx={{ fontWeight: 700 }}>
              I want the bookings to continue until my events ends
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "grey.700", marginTop: 1 }}
            >
              Disable this option if you want to end your booking from a
              specific date and time.
            </Typography>
          </Box>
        </Box>

        {!bookingToEndTillEnd && (
          <Box>
            <Typography>Booking starts on</Typography>
            <Typography>
              Specify the date and time when you want the booking to start.
            </Typography>

            <Box mt={3} sx={{ display: "flex", gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <label htmlFor="continue-booking-date">Event Date*</label>
                <Controller
                  name="continueBookingDate"
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
                              id="continue-booking-date"
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
              <Box sx={{ flex: 1 }}>
                <label htmlFor="continue-booking-time">Time</label>
                <Controller
                  name="continueBookingTime"
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
                              id="continue-booking-time"
                              {...params}
                              sx={{ marginTop: 2, flex: 1 }}
                            />
                          )}
                        />
                      </Stack>
                    </LocalizationProvider>
                  )}
                />
              </Box>
            </Box>
          </Box>
        )}

        <Divider sx={{ margin: "1.5rem 0" }} />

        <Box mb={2} sx={{ display: "flex" }}>
          <Switch
            checked={switchOpen3}
            onChange={() => setSwitchOpen3((prev) => !prev)}
          />
          <Box>
            <Typography sx={{ fontWeight: 700 }}>
              I do not require adding any special instructions on the tickets.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "grey.700", marginTop: 1 }}
            >
              Use this space to provide any last minute checklists your
              attendees must know in order to attend your event. Anything you
              provide here will be printed on your ticket.{" "}
            </Typography>
          </Box>
        </Box>

        {!switchOpen3 && (
          <Box mb={3}>
            <Box>
              <Controller
                name="additionalInfo"
                control={control}
                rules={{ required: "discount required" }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    autoComplete="off"
                    {...field}
                    label="About"
                    error={Boolean(errors.additionalInfo)}
                    helperText={errors.additionalInfo?.message}
                    sx={{ marginTop: 2 }}
                  />
                )}
              />
            </Box>
          </Box>
        )}

        <Box pb={2} sx={{display: "flex", justifyContent: "center", gap: 2}}>
            <Button variant="contained" onClick={()=>handleBack()} type="button">Previous</Button>
            <Button variant="contained" type="submit">Finish</Button>
        </Box>
      </Box>
    </Container>
  );
}
