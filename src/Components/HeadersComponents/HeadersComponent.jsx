import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import Navbar from "./Navbar";
import { Decorator } from "../common/commonComponent";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import DrawerComponent from "./DrawerComponent";
import Typed from "react-typed";

export default function HeadersComponent() {
  const classes = useStyles();

  const [initialState, setInitialState] = useState(false);
  const handleDrawerToogler = () => {
    setInitialState(!initialState);
  };

  const navlinks = [
    { label: "About", Id: "About" },
    { label: "Portfolio", Id: "Portfolio" },
    { label: "info@aktechs.co.in", Id: "info@aktechs.co.in" },
    { label: "info@aktechnologie.com", Id: "info@aktechnologie.com" },
    

    
  ];

  return (
    <Box className={classes.HeardeWraper} id='Headder'>
      <Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} />
      <DrawerComponent
        initialState={initialState}
        navlinks={navlinks}
        handleDrawerToogler={handleDrawerToogler}
      />

      <Box className={classes.Headercontaier}>
        <Typography varinat='h3' component='h4' className={classes.headerTitle}>
          We are <span style={{ paddingRight: "5px" }}></span>
          <Typed
            strings={[" Webdeveloper,", " UI/UX Designer,", " Digital Expert,"]}
            typeSpeed={30}
            backSpeed={50}
            loop
          />
        </Typography>
        <Typography varinat='h3' component='h4' className={classes.headerDesc}>
          We Create Website And Application,
          <br />
          Based On Your Needs...
        </Typography>

        {Decorator({
          label: "About Us",
          withIcon: true,
          Icon: <ArrowDownwardRoundedIcon />,
        })}
      </Box>
    </Box>
  );
}
