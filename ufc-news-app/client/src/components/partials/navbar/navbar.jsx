import React, { useEffect } from 'react';
import {
  AppBar, Box, Button, Toolbar, useScrollTrigger, Tabs, Tab,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

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
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/naujienos' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/reitingai' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/prisijungti' && value !== 3) {
      setValue(3);
    }
  }, [value]);

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
                <Button component={Link} to="/" disableRipple onClick={() => setValue(0)}>
                  <img src={logo} className={classes.logo} alt="UFC logo" />
                </Button>

              </Box>
              <Box>
                <Tabs value={value} onChange={handleChange} textColor="white" indicatorColor="secondary">
                  <Tab className={classes.tab} component={Link} to="/" label="Pagrindinis" />
                  <Tab className={classes.tab} component={Link} to="/naujienos" label="Naujienos" />
                  <Tab className={classes.tab} component={Link} to="/reitingai" label="UFC reitingai" />
                </Tabs>
              </Box>
              <Box>
                <Button component={Link} to="/prisijungti" disableRipple onClick={() => setValue(0)} variant="contained" color="secondary" classname={classes.button}>
                  Login
                </Button>
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
