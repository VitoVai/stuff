import React from 'react';
import {
  AppBar, Box, Toolbar, useScrollTrigger, Tabs, Tab,
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
  tab: {
    ...theme.typography.tab,
    // textTransform: 'none',
    // fontSize: '1rem',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <ElevationScroll>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
            }}
            >
              <Box sx={{ display: 'flex' }}>
                <img src={logo} className={classes.logo} alt="UFC logo" />
              </Box>
              <Box>
                <Tabs textColor="white">
                  <Tab className={classes.tab} label="Pagrindinis" />
                  <Tab className={classes.tab} label="Naujienos" />
                  <Tab className={classes.tab} label="UFC reitingai" />
                </Tabs>
              </Box>
              <Box>
                <Tabs textColor="white">
                  <Tab className={classes.tab} label="Prisijungti" />
                </Tabs>
              </Box>
            </Box>

          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* <div className={classes.toolbarMargin} /> */}
    </>

  );
};

export default Navbar;
