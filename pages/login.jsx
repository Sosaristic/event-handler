import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LoginIcon from "@mui/icons-material/Login";
import { FcGoogle } from "react-icons/fc";

import EventLogo from "../components/EventLogo";

export default function login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  const [visibilty, setVisibilty] = useState(false);

  const handleClickShowPassword = () => setVisibilty((show) => !show);

  // copy right year
  const date = new Date();
  const year = date.getUTCFullYear();
  return (
    <>
      <Head>
        <title>login page</title>
      </Head>
      <main>
        <Grid container>
          <Grid
            item
            xs={0}
            sm={5}
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              position: "relative",
              minHeight: "100vh",
              backgroundImage: `url("/images/wallpaper.jpg")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Box mt={3} ml={4} sx={{ width: "fit-content" }}>
              <EventLogo color={"white"} avatarBackgroundColor="white" avatarColor={"primary.main"}/>
            </Box>
            <Typography
              variant="h4"
              sx={{
                width: "70%",
                color: "white",
                position: "relative",
                top: "70%",
                alignSelf: "center",
              }}
            >
              The Easiest way to create Events and sell more tickets Online
            </Typography>
          </Grid>
          {/*      second grid      */}
          <Grid item xs={12} sm={7}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                mt={4}
                mr={3}
                sx={{
                  position: "relative",
                  alignSelf: "flex-end",
                  display: { xs: "none", sm: "flex" },
                }}
              >
                New to Eventum?
                <Link href="/sign-up" legacyBehavior>
                  <a href="/sign-up" className="link-style">
                    {" "}
                    Sign up
                  </a>
                </Link>
              </Typography>

              <Box
                mt={3}
                sx={{
                  display: { sm: "none" },
                  width: "fit-content",
                  position: "relative",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                }}
              >
                <EventLogo  avatarBackgroundColor="primary.main"/>
              </Box>

              <Box
                mt={4}
                sx={{
                  width: { xs: "100%", sm: "80%", lg: "50%" },
                  position: "relative",
                  left: { sm: "50%" },
                  transform: { sm: "translate(-50%, 0)" },
                  padding: { xs: "0 2rem", sm: "0" },
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Sign in to Eventum
                </Typography>

                {/* form component */}
                <Box
                  component="form"
                  noValidate
                  autoComplete="off"
                  sx={{ position: "relative", color: "main.primary" }}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[\.]+[a-zA-Z.]+$/i,
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

                  <Controller
                    name="password"
                    control={control}
                    rules={{ required: "password is required" }}
                    render={({ field }) => (
                      <TextField
                        type={visibilty ? "text" : "password"}
                        label=" Password"
                        variant="filled"
                        size="small"
                        {...field}
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                        sx={{ width: "100%", marginTop: 3 }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={handleClickShowPassword}>
                                {visibilty ? (
                                  <VisibilityIcon />
                                ) : (
                                  <VisibilityOffIcon />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                  <Box mt={1}>
                  <Link href="/password-reset" legacyBehavior >
                    <a href="/password-reset" >forgot password?</a>
                  </Link>
                  </Box>

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      width: "100%",
                      marginTop: 3,
                      textTransform: "capitalize",
                    }}
                    endIcon={<LoginIcon />}
                  >
                    Sign in
                  </Button>
                </Box>

                {/*  outstide form */}
                <Typography mt={2}>
                  By clicking "Sign Up" you agree to Eventum{" "}
                  <Link href="/termsCondition" legacyBehavior>
                    <a href="/termsCondition">terms and Conditions</a>
                  </Link>{" "}
                  and have read the{" "}
                  <Link href="/privacy-policy" legacyBehavior>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </Link>{" "}
                </Typography>
                <Divider sx={{ marginTop: 3 }}>or</Divider>
                <Button
                  size="large"
                  variant="outlined"
                  startIcon={<FcGoogle />}
                  sx={{ textTransform: "none", width: "100%", marginTop: 3 }}
                >
                  Sign in with Google
                </Button>
                <Button
                  size="large"
                  variant="outlined"
                  startIcon={<FacebookOutlinedIcon />}
                  sx={{ textTransform: "none", width: "100%", marginTop: 3 }}
                >
                  Sign in with Facebook
                </Button>
                <Typography
                  mt={4}
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                    display: { xs: "flex", sm: "none" },
                    textAlign: "center",
                  }}
                >
                  Already have an account?
                  <Link href="/login" legacyBehavior>
                    <a href="/login" className="link-style">
                      sign in
                    </a>
                  </Link>
                </Typography>
              </Box>
              <Typography
                mt={6}
                p={2}
                variant="body2"
                sx={{
                  position: "relative",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  textAlign: "center",
                }}
              >
                &copy; {year} Eventum. All rights reserved
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </main>
      <style jsx>{`
        a {
          color: #968176;
        }
        a:hover {
          text-decoration: underline;
        }
        .link-style {
          margin-left: 0.5rem;
        }
      
      `}</style>
    </>
  );
}
