import React from "react";
import EventLogo from "../components/EventLogo";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
export default function PasswordReset() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Container
        maxWidth={"sm"}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box mt={3} sx={{ alignSelf: "center" }}>
          <EventLogo
            avatarColor={"white"}
            avatarBackgroundColor="primary.main"
          />
        </Box>
        <Typography
          mt={3}
          variant="h6"
          sx={{ alignSelf: "center", fontWeight: 700 }}
        >
          Forgot Password
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "required",
            pattern: {
              value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[\.]+[com || org]+$/i,
              message: "invalid email",
            },
          }}
          render={({ field }) => (
            <TextField
              type="email"
              label=" Email"
              variant="filled"
              size="small"
              {...field}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              sx={{ width: "100%", marginTop: 3 }}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            width: "100%",
            marginTop: 3,
            textTransform: "capitalize",
          }}
        >
          Reset Password
        </Button>
        </Box>
        
        <Box mt={2} sx={{alignSelf: "center"}}>
        <Link href="/login" legacyBehavior><a href="/login"><KeyboardBackspaceIcon />Back to sign in</a></Link>
        </Box>
      </Container>
      <style jsx>{`
       a {
        color: #968176;
        display: flex;
        align-items: center;
        column-gap: 1rem;
      }
      a:hover {
        text-decoration: underline;
      }
      `}</style>
    </div>
  );
}
