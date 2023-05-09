import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import BackgroundLetterAvatars from "./avatar";
import Link from "next/link";
import DropDown from "./dropdown";
import axios from "axios";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const router = useRouter();
  //handle dropdown
  const handleClick = (event) => {

    setAnchorEl(event.currentTarget);
  };
  const handleClose = async(type) => {
    setAnchorEl(null);
    if(type==="logout"){
      sessionStorage.removeItem("user");
      await axios.post("http://localhost:5000/api/v1/logout");
      router.push("/");
      
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const user =
    typeof sessionStorage !== "undefined" && sessionStorage.getItem("user")
      ? sessionStorage.getItem("user")
      : "";

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <img width="40" src="/assets/images/dental.svg" />
        <h2 className="header-logo text-secondary">ADHUNIK DENTAL</h2>
      </Stack>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "white.main" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            href={"/"}
            style={{ display: "flex", flexGrow: "1", textDecoration: "none" }}
          >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
            >
              <img width="40" src="/assets/images/dental.svg" />
              <h2 className="header-logo text-secondary">ADHUNIK DENTAL</h2>
            </Stack>
          </Link>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "dark.main" }}>
                {item}
              </Button>
            ))}
          </Box>
          {user === "" ? null : (
            <>
              {JSON.parse(user).name ? (
                <>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <BackgroundLetterAvatars
                    name={JSON.parse(user).name || ""}
                    sx={{ ml: { md: 2 } }}
                  />
                </Button>
                <DropDown open={open} handleClose={handleClose} anchorEl={anchorEl}/>
                </>
                
              ) : null}
            </>
          )}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

// Navigation.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default Navigation;
