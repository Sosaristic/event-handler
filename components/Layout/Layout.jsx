import React from "react";
import { useRouter } from "next/router";
import ResponsiveAppBar from "./NavBar";
import Footer from "./Footer";
import { Box } from "@mui/material";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const addPaddingTop = (pathname) => {
   return pathname === "/login" || pathname === "/sign-up" ? 0 : "4rem";
  };
  return (
    <Box
      sx={{ position: "relative", backgroundColor: "#f5f5f5", paddingTop: addPaddingTop(pathname) }}
    >
      {pathname === "/login" || pathname === "/sign-up" ? null : <ResponsiveAppBar />}

      {children}
      {pathname === "/login" || pathname === "/sign-up" ? null : <Footer />}
    </Box>
  );
}

