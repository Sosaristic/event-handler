import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSideBar } from "../../context/menuContext";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import EventLogo from "../EventLogo";
import ProfileDropDown from "./ProfileDropDown";
import CreateEventButton from "../CreateEventButton";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";
import MenuDropDown from "./MenuDropDown";
import { Drawer } from "@mui/material";

const navList = [
    { title: "Home", url: "/" },
    { title: "Explore Events", url: "/sign-up" },
    { title: "Pricing", url: "/login" },
    { title: "Help", url: "/password-reset" },
  ];

function ResponsiveAppBar() {
    const { sideBar, toogleSideBar } = useSideBar();

    const [windowSize, setWindowSize] = useState(null);

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    setWindowSize(window.innerWidth)
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);


 
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

 

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleDarkMode = () => {
    setDarkMode((mode) => !mode);
  };

  const activeLink = (path) => {
    if (path === pathname) {
      return "active";
    }
  };
  return (
    <AppBar elevation={0} position="fixed" color="custom" sx={{backgoundColor: "secondary" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <EventLogo avatarBackgroundColor={"primary.main"} />
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 3 }}>
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


          <Box
            sx={{
              flexGrow: 2,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              columnGap: "3rem",
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
                      
                    }}
                    key={url}
                  >
                    <Link href={url} legacyBehavior>
                      <a
                        href={url}
                        style={{
                          color: `${activeLink(url) ? "#968176" : null}`,
                        }}
                      >
                        {title}
                      </a>
                    </Link>
                  </Box>
                );
              })}
          </Box>
          <Box sx={{ flexGrow: 1, display: {xs: "none", sm: "flex"} }}>
            <CreateEventButton /> 
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0,  }}>
                <Avatar alt="Remy Sharp" src="/images/Anderson.png" sx={{height: {xs: 1, sm: "2rem"},}}/>
              </IconButton>
              
            </Tooltip>
            <ArrowDropDownIcon onClick={handleOpenUserMenu} />
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <ProfileDropDown />
            </Menu>
          </Box>

          <Box
            ml={2}
            sx={{
              display: "flex",
              flexGrow: 0.5,
              justifyContent: "center",
              color: "grey.500",
            }}
          >
            <IconButton
              onClick={handleDarkMode}
              sx={{ backgroundColor: "grey.50", color: "grey.500", "&:hover": {backgroundColor: "grey.50"} }}
              disableTouchRipple
            >
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
export default ResponsiveAppBar;
