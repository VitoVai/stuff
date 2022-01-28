import React from 'react';
import {
  AppBar, Toolbar, useScrollTrigger, Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import logo from '../../../assets/ufc-logo.png';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,

  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 'auto',
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <ElevationScroll>
        <AppBar position="static">
          <Toolbar>
            <img src={logo} className={classes.logo} alt="UFC logo" />
            <Typography variant="h6">
              UFC
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* <div className={classes.toolbarMargin} /> */}
    </>

  );
};

export default Navbar;
