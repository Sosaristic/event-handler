import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, Button, Container, Divider, MenuItem, TextField, Typography } from "@mui/material";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import { categories, durationFormat } from "../componentData/data";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Stack from "@mui/material/Stack";
import { format, getTime } from "date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Country, State, City } from "country-state-city";

import TextEditor from "../TextEditor";

export default function CreateEventStep1({ getStep1Data }) {
  const time = getTime(new Date());

  const [value, setValue] = React.useState(format(new Date("2022, 04, 07"), "MM/dd/yyyy"));
  const [imageUrl, setImageUrl] = useState("/images/test-image-1.jpg");
  const [selectedImage, setSelecedImage] = useState(null);

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      eventName: "",
      eventCategory: "",
      eventDate: format(new Date(), "MM/dd/yyyy"),
      eventTime: time,
      eventDurationFormat: "hours",
      eventDurationValue: "",
      eventBanner: imageUrl,
      eventDescription: "",
      eventVenue: "",
      address1: "",
      address2: "",
      country: "",
      state: "",
      city: "",
      postalCode: "",
    },
  });
  const { eventDurationFormat, eventDurationValue, country, state, city } = watch();

  const handleImage = ({ target }) => {
    setSelecedImage(target.files[0]);
  };

  //handling image input
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  //setting rules for duration input
  const maxMin = (format, context) => {
    if (context == "min") {
      if (format == "mins" && eventDurationValue) {
        return { value: 30, message: "mins cant be lower than 30" };
      } else {
        return { value: 1, message: "hours or days cant be lower than 1" };
      }
    }
    if (context == "max") {
      if (format == "mins") {
        return { value: 60, message: "mins cant be higher than 60" };
      }
      if (format == "hours") {
        return { value: 24, message: "hours cant be higher than 24" };
      }
      if (format == "days") {
        return { value: 365, message: "mins cant be higher than 365" };
      }
    }
  };

  // setting the select value of states and city
  const countryData = Country.getAllCountries();
  const statesData = State.getAllStates();

  const filteredCountry = countryData?.filter((item) => item.name === country);

  const { isoCode } = filteredCountry[0] || {};

  const statesOfCountry = State.getStatesOfCountry(isoCode);

  const onSubmit = (data) => {
    getStep1Data(data);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "grey.50",
        padding: 2,
        marginTop: 4,
        position: "relative",
      }}
    >
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography
          sx={{
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            columnGap: 1,
          }}
        >
          <InfoRoundedIcon /> Details
        </Typography>
        <Divider sx={{ margin: "2rem 0" }} />

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: `clamp(1rem, -0.875rem + 8.333vw, 1.2rem)`,
          }}
        >
          Give your event a name*
        </Typography>
        {/* event name */}
        <Controller
          name="eventName"
          control={control}
          rules={{ required: "Event name is required" }}
          render={({ field }) => (
            <TextField
              variant="filled"
              autoComplete="off"
              {...field}
              label="Event name*"
              error={Boolean(errors.eventName)}
              helperText={errors.eventName?.message}
              sx={{ marginTop: 3 }}
            />
          )}
        />
        <Divider sx={{ margin: "2rem 0" }} />
        <Typography
          sx={{
            fontWeight: 700,
          }}
        >
          Choose a category for your event*
        </Typography>
        {/* event Category */}
        <Controller
          name="eventCategory"
          control={control}
          rules={{ required: "Event category is required" }}
          render={({ field }) => (
            <TextField
              variant="filled"
              select
              autoComplete="off"
              {...field}
              label="select category*"
              error={Boolean(errors.eventCategory)}
              helperText={errors.eventCategory?.message}
              sx={{ marginTop: 3 }}
            >
              {categories.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        <Divider sx={{ margin: "2rem 0" }} />
        <Typography
          sx={{
            fontWeight: 700,
          }}
        >
          When is your event?*
        </Typography>
        {/*        date picker  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            columnGap: 1,
          }}
        >
          <Controller
            name="eventDate"
            control={control}
            rules={{ required: "date is required" }}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DatePicker
                    label="date*"
                    openTo="year"
                    views={["year", "month", "day"]}
                    {...field}
                    renderInput={(params) => <TextField {...params} sx={{ marginTop: 3 }} />}
                  />
                </Stack>
              </LocalizationProvider>
            )}
          />
          {/* event time */}
          <Controller
            name="eventTime"
            control={control}
            rules={{ required: "Time is required" }}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <TimePicker
                    label="Time*"
                    {...field}
                    renderInput={(params) => <TextField {...params} sx={{ marginTop: 3 }} />}
                  />
                </Stack>
              </LocalizationProvider>
            )}
          />

          {/* date range picker           */}

          <Box mt={3} sx={{ display: "flex", coulumnGap: 1, position: "relative" }}>
            <Controller
              name="eventDurationValue"
              control={control}
              rules={{
                required: "Event duration is required",
                min: {
                  value: maxMin(eventDurationFormat, "min").value,
                  message: maxMin(eventDurationFormat, "min").message,
                },
                max: {
                  value: maxMin(eventDurationFormat, "max").value,
                  message: maxMin(eventDurationFormat, "max").message,
                },
              }}
              render={({ field }) => (
                <TextField
                  sx={{ flexGrow: 1 }}
                  type="number"
                  autoComplete="off"
                  {...field}
                  label="Duration in numbers*"
                  error={Boolean(errors.eventDurationValue)}
                  helperText={errors.eventDurationValue?.message}
                />
              )}
            />

            <Controller
              name="eventDurationFormat"
              control={control}
              rules={{ required: "Event category is required" }}
              render={({ field }) => (
                <TextField
                  sx={{ flexGrow: 1 }}
                  select
                  autoComplete="off"
                  {...field}
                  label="format"
                  error={Boolean(errors.eventDurationFormat)}
                  helperText={errors.eventDurationFormat?.message}
                >
                  {durationFormat.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Box>
        </Box>
        {/* event banner */}
        <Box mt={3} sx={{ display: "flex", flexDirection: "column" }}>
          <Typography mt={3} mb={2} sx={{ fontWeight: 700 }}>
            Add a few image as your Event Banner
          </Typography>

          <Box
            sx={{
              position: "relative",
              height: "20rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={imageUrl}
              style={{
                position: "absolute",
                maxHeight: "100%",
                width: "100%",
                objectFit: "fill",
              }}
            />

            <input
              type={"file"}
              accept="image/*"
              id="banner-image"
              style={{ display: "none" }}
              onChange={handleImage}
            />
            <label
              htmlFor="banner-image"
              style={{ alignSelf: "flex-end", marginTop: 4, marginRight: 4 }}
            >
              <Button
                disableRipple
                variant="contained"
                component="span"
                color="secondary"
                sx={{ textTransform: "capitalize" }}
              >
                Change Image
              </Button>
            </label>
          </Box>
        </Box>

        {/* description text */}
        <Typography mt={3} mb={2} sx={{ fontWeight: 700 }}>
          Add a description for your event
        </Typography>
        <Box>
          <Controller
            name="eventDescription"
            control={control}
            render={({ field }) => <TextEditor value={field.value} onChange={field.onChange} />}
          />
        </Box>
        {/* venue inputs */}
        <Typography mt={3} sx={{ fontWeight: 700 }}>
          Where is your Event Taking place
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Controller
            name="eventVenue"
            control={control}
            rules={{ required: "Event Place is required" }}
            render={({ field }) => (
              <TextField
                variant="filled"
                autoComplete="off"
                {...field}
                label="Event Venue*"
                error={Boolean(errors.eventVenue)}
                helperText={errors.eventVenue?.message}
                sx={{ marginTop: 3, flexGrow: 2 }}
              />
            )}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              columnGap: 8,
              flexWrap: "wrap",
            }}
          >
            <Controller
              name="address1"
              control={control}
              rules={{ required: "Address1 is required" }}
              render={({ field }) => (
                <TextField
                  variant="filled"
                  autoComplete="off"
                  {...field}
                  label="Address1*"
                  error={Boolean(errors.address1)}
                  helperText={errors.address1?.message}
                  sx={{ marginTop: 3, flex: 1, flexBasis: "45%" }}
                />
              )}
            />

            <Controller
              name="address2"
              control={control}
              render={({ field }) => (
                <TextField
                  variant="filled"
                  autoComplete="off"
                  {...field}
                  label="Address2"
                  error={Boolean(errors.address2)}
                  helperText={errors.address2?.message}
                  sx={{ marginTop: 3, flex: 1, flexBasis: "45%" }}
                />
              )}
            />

            <Controller
              name="country"
              control={control}
              rules={{ required: " required" }}
              render={({ field }) => (
                <TextField
                  variant="filled"
                  select
                  autoComplete="off"
                  {...field}
                  label="select Country*"
                  error={Boolean(errors.country)}
                  helperText={errors.country?.message}
                  sx={{ marginTop: 3, flexGrow: 1, flexBasis: "45%" }}
                >
                  <MenuItem>country</MenuItem>
                  {Country.getAllCountries()?.map((item) => (
                    <MenuItem key={item.name} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
            <Controller
              name="state"
              control={control}
              rules={{ required: "required" }}
              render={({ field }) => (
                <TextField
                  variant="filled"
                  select
                  autoComplete="off"
                  {...field}
                  label="select state*"
                  error={Boolean(errors.state)}
                  helperText={errors.state?.message}
                  sx={{ marginTop: 3, flexGrow: 1, flexBasis: "45%" }}
                >
                  <MenuItem>states</MenuItem>
                  {statesOfCountry?.map((item) => (
                    <MenuItem key={item.name} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
            <Controller
              name="city"
              control={control}
              rules={{ required: "Event city is required" }}
              render={({ field }) => (
                <TextField
                  variant="filled"
                  autoComplete="off"
                  {...field}
                  label="City*"
                  error={Boolean(errors.city)}
                  helperText={errors.city?.message}
                  sx={{ marginTop: 3, flexGrow: 2, flexBasis: "45%" }}
                />
              )}
            />
            <Controller
              name="postalCode"
              control={control}
              rules={{ required: "Postcode is required" }}
              render={({ field }) => (
                <TextField
                  variant="filled"
                  autoComplete="off"
                  {...field}
                  label="Post code*"
                  error={Boolean(errors.postalCode)}
                  helperText={errors.postalCode?.message}
                  sx={{ marginTop: 3, flex: 1, flexBasis: "45%" }}
                />
              )}
            />
          </Box>
        </Box>

        <Button
          type="button"
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          sx={{ width: "fit-content", alignSelf: "center", marginTop: 2 }}
        >
          Next
        </Button>
      </Box>
      <style jsx>{`
        .quill {
          height: 12rem;
        }
      `}</style>
    </Container>
  );
}
