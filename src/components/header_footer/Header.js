import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import SideDrawer from "./SideDrawer";

function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (value) => {
        setDrawerOpen(value);
    };

    return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "#27282b",
        boxShadow: "none",
        padding: "10px 0px",
       }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="header_logo_venue">مهدی حمل دار</div>
          <div className="header_logo_title">علاقه مند به برنامه نویسی</div>
        </div>
        <IconButton
          aria-label="Menu"
          color="inherit"
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
          </IconButton>
          <SideDrawer open={drawerOpen} onClose={toggleDrawer} />
      </Toolbar>
    </AppBar>
    );
}

export default Header
