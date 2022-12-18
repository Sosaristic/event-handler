import React from "react";
import EventLogo from "../components/EventLogo";
import { Box, Container } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
export default function PasswordReset() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <Container>
        <Box>
          <EventLogo
            color="primary.main"
            backgroundColor="primary.main"
            avatarBackgroundColor="primary.main"
            
          />
        </Box>
      </Container>
    </div>
  );
}
