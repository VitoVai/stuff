import React from 'react';
import {
  AppBar, Toolbar, useScrollTrigger, Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

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
            <Typography variant="h6">
              UFC
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <div className={classes.toolbarMargin} />
    </>

  );
};

export default Navbar;
