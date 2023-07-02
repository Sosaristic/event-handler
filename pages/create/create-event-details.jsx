import React, { useState } from "react";
import { Box, Container, Step, StepLabel, Stepper, Typography } from "@mui/material";
import Link from "next/link";
import dynamic from "next/dynamic";
import Breadcrumb from "../../components/Breadcrumb";
import CreateEventStep1 from "../../components/create event components/CreateEventStep1";
const CreateEventStep2 = dynamic(() =>
  import("../../components/create event components/CreateEventStep2")
);
const CreateEventStep3 = dynamic(() =>
  import("../../components/create event components/CreateEventStep3")
);
const AlertDialog = dynamic(() => import("../../components/create event components/Dialog"));
const EventSuccess = dynamic(() => import("../../components/create event components/EventSuccess"));

export default function CreateEventDetails() {
  const [ticketDetails, setTicketDetails] = useState({
    step1: null,
    step2: null,
    step3: null,
  });
  const [activeStep, setActiveStep] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  const steps = ["Details", "Tickets", "setting"];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStep1Data = (data) => {
    setTicketDetails({
      ...ticketDetails,
      step1: data,
    });
    handleNext();
  };
  const getStep2Data = (data) => {
    setTicketDetails({
      ...ticketDetails,
      step2: data,
    });
    handleNext();
  };
  const getStep3Data = (data) => {
    setTicketDetails({
      ...ticketDetails,
      step3: data,
    });
    setOpenDialog(true);
  };

  const handleCreateTicket = () => {
    console.log(ticketDetails);
    setOpenDialog(false);
    handleNext();
  };

  return (
    <section>
      <Box
        sx={{
          minHeight: "80vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "grey.300",
        }}
      >
        <Breadcrumb>
          <Link
            href="/"
            legacyBehavior
          >
            <a href="/">Home</a>
          </Link>
          <Link
            href="/create/create-event"
            legacyBehavior
          >
            <a href="/create/create-event">Create Event</a>
          </Link>
          <Typography>Create Event Details</Typography>
        </Breadcrumb>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            alignSelf: "center",
            marginTop: 4,
            fontSize: `clamp(1rem, -0.875rem + 8.333vw, 1.5rem)`,
          }}
        >
          Create Venue Event
        </Typography>

        <Container
          maxWidth="xs"
          sx={{ marginTop: "3rem", padding: 1 }}
        >
          <Stepper
            activeStep={activeStep}
            sx={{ xs: "100%" }}
          >
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step
                  key={label}
                  {...stepProps}
                >
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: `${activeStep == 0 ? "block" : "none"}`,
              minWidth: "100%",
            }}
          >
            <CreateEventStep1 getStep1Data={getStep1Data} />
          </Box>
          {/* step 2 */}
          <Box
            sx={{
              display: `${activeStep == 1 ? "block" : "none"}`,
              minWidth: "100%",
            }}
          >
            <CreateEventStep2
              getStep2Data={getStep2Data}
              handleBack={handleBack}
            />
          </Box>
          <Box
            sx={{
              display: `${activeStep == 2 ? "block" : "none"}`,
              minWidth: "100%",
            }}
          >
            <CreateEventStep3
              getStep3Data={getStep3Data}
              handleBack={handleBack}
            />
          </Box>

          <Box
            sx={{
              display: `${activeStep == 3 ? "block" : "none"}`,
              minWidth: "100%",
            }}
          >
            <EventSuccess />
          </Box>

          {/* dialog box */}
          <AlertDialog
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            handleCreateTicket={handleCreateTicket}
          />
        </Box>
      </Box>
      </section>
  );
}
