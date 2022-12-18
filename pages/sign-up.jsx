import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
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
import { FcGoogle } from "react-icons/fc";

import EventLogo from "../components/EventLogo";

export default function login() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [visibilty, setVisibilty] = useState(false);
  const [values, setValues] = useState(initialValues);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClickShowPassword = () => setVisibilty((show) => !show);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  // copy right year
  const date = new Date();
  const year = date.getUTCFullYear();
  return (
    <>
      <Head>
        <title>sign up page</title>
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
              <EventLogo />
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
                Already have an account?
                <Link href="/login" legacyBehavior>
                  <a href="/login" className="link-style">
                    {" "}
                    sign in
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
                <EventLogo />
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
                  Sign up to Eventum
                </Typography>

                {/* form component */}
                <Box
                  component="form"
                  noValidate
                  autoComplete="off"
                  sx={{ position: "relative", color: "main.primary" }}
                  onSubmit={handleFormSubmit}
                >
                  <Box
                    mt={2}
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      rowGap: 3,
                      justifyContent: { sm: "space-between" },
                    }}
                  >
                    <TextField
                      required
                      label="First Name"
                      variant="filled"
                      size="small"
                      name="firstName"
                      value={values.fullName}
                      onInput={handleInput}
                      sx={{ width: { xs: "100%", sm: "40%" } }}
                    />
                    <TextField
                      required
                      label="Last Name"
                      variant="filled"
                      size="small"
                      name="lastName"
                      value={values.lastName}
                      onInput={handleInput}
                      sx={{ width: { xs: "100%", sm: "40%" } }}
                    />
                  </Box>

                  <TextField
                    type="email"
                    required
                    label="Email"
                    variant="filled"
                    size="small"
                    name="email"
                    value={values.email}
                    onInput={handleInput}
                    sx={{ width: "100%", marginTop: 3 }}
                  />

                  <TextField
                    type={visibilty ? "text" : "password"}
                    required
                    label="Password"
                    variant="filled"
                    size="small"
                    name="password"
                    value={values.password}
                    onInput={handleInput}
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
                    Sign Up
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
        .link-style{
          margin-left: .5rem;
      }
      `}</style>
    </>
  );
}
