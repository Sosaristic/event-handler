import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Avatar,
  Menu,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import EventLogo from "./EventLogo";
import MenuDropDown from "./MenuDropDown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { useSideBar } from "../context/menuContext";
import ProfileDropDown from "./ProfileDropDown";
import Link from "next/link";
import CreateEventButton from "./CreateEventButton";
export default function NavBar() {
  const { sideBar, toogleSideBar } = useSideBar();
  const [windowSize, setWindowSize] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const { pathname, push } = useRouter();
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  // when profile is clicked
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDarkMode = () => {
    setDarkMode((mode) => !mode);
  };
  const navList = [
    { title: "Home", url: "/" },
    { title: "Explore Events", url: "/sign-up" },
    { title: "Pricing", url: "/login" },
    { title: "Help", url: "/password-reset" },
  ];

  const activeLink = (path) => {
    if (path === pathname) {
      return "active";
    }
  };
  console.log(pathname);
  return (
    <AppBar position="static" color="custom">
      <Container maxWidth="xl" sx={{ padding: ".5rem 0" }}>
        <Toolbar variant="dense" sx={{ display: "flex" }}>
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

          <Box ml={2} sx={{ display: { xs: "block", md: "none" } }}>
            <Avatar sx={{ backgroundColor: "primary.main", fontWeight: 700 }}>
              E
            </Avatar>
          </Box>
          {/*     nav list         */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: "30%",

              marginLeft: "auto",
              columnGap: 3,
            }}
          >
            {navList.map((item) => {
              const { title, url } = item;
              return (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "fit-content",
                    flexShrink: 0,
                  }}
                  key={url}
                >
                  <Link href={url} legacyBehavior>
                    <a
                      href={url}
                      style={{ color: `${activeLink(url) ? "#968176" : null}` }}
                    >
                      {title}
                    </a>
                  </Link>
                </Box>
              );
            })}
          </Box>

          <Box sx={{ marginLeft: "auto", display: { xs: "none", md: "flex" } }}>
            {" "}
            <CreateEventButton size="small"/>
          </Box>

          {/*   user profile */}
          <Box
            sx={{ marginLeft: "auto", display: "flex" }}
            onClick={handleClick}
          >
            <Avatar
              src="/images/Anderson.png"
              sx={{ height: "2rem", width: "2rem" }}
            ></Avatar>
            <ArrowDropDownIcon />
          </Box>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{ marginTop: "1rem", "&:hover": { backgroundColor: "none" } }}
          >
            <Box disableRipple={true}>
              <ProfileDropDown />
            </Box>
          </Menu>
          <Box ml={2} sx={{ backgroundColor: "grey.100", borderRadius: "50%" }}>
            <IconButton color="grey.50" onClick={handleDarkMode}>
              {darkMode ? <DarkModeIcon /> : <Brightness7Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      <style jsx>{`
        a {
          font-size: 1rem;
          font-weight: 500;
        }
      `}</style>
    </AppBar>
  );
}
