import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EventLogo from "./EventLogo";
import MenuDropDown from "./MenuDropDown";
import { useSideBar } from "../context/menuContext";
export default function NavBar() {
  const { sideBar, toogleSideBar } = useSideBar();
  const [windowSize, setWindowSize] = useState(null);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <AppBar position="static" color="custom">
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <EventLogo avatarBackgroundColor={"primary.main"} />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={toogleSideBar}>
              <MenuIcon />
            </IconButton>
            {windowSize <= 900 && (
              <Drawer
                open={sideBar}
                onClose={toogleSideBar}
                anchor="top"
                transitionDuration={500}
              >
                <MenuDropDown />
              </Drawer>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
