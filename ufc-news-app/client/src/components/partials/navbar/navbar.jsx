import React, { useEffect } from 'react';
import {
  AppBar, Box, Button, Toolbar, useScrollTrigger, Tabs, Tab, Menu, MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
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
  // tab: {
  //   ...theme.typography.tab,
  //   color: 'yellow',
  //   textTransform: 'none',
  //   fontSize: '1rem',
  // },
  // button: {
  //   ...theme.typography.estimate,
  //   borderRadius: '50px',
  // },
  menu: {
    backgroundColor: theme.palette.common.black,
    color: 'white',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
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
                <Button
                  component={Link}
                  to="/"
                  disableRipple
                  onClick={() => setValue(0)}
                >
                  <img src={logo} className={classes.logo} alt="UFC logo" />
                </Button>

              </Box>
              <Box>
                <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary">
                  <Tab component={Link} to="/" label="Pagrindinis" />
                  <Tab component={Link} to="/naujienos" label="Naujienos" />
                  <Tab
                    aria-owns={anchorEl ? 'simple menu' : undefined}
                    aria-haspopup={anchorEl ? 'true' : undefined}
                    onMouseOver={(event) => handleClick(event)}
                    component={Link}
                    to="/reitingai"
                    label="UFC reitingai"
                  />
                </Tabs>
              </Box>
              <Box>
                <Button
                  component={Link}
                  to="/prisijungti"
                  disableRipple
                  onClick={() => setValue(0)}
                  variant="contained"
                  color="secondary"
                >
                  Login
                </Button>
              </Box>
              <Menu
                id="simple menu"
                anchorEl={(anchorEl)}
                open={open}
                onClose={handleClose}
                classes={{ paper: classes.menu }}
                MenuListProps={{ onMouseLeave: handleClose }}
                elevation={0}

              >
                <MenuItem onClick={() => { handleClose(); setValue(2); }} component={Link} to="/reitingai" classes={{ root: classes.menuItem }}>UFC reitingai</MenuItem>
                <MenuItem onClick={() => { handleClose(); setValue(2); }} component={Link} to="/bypound" classes={{ root: classes.menuItem }}>By pound</MenuItem>
                <MenuItem onClick={() => { handleClose(); setValue(2); }} component={Link} to="/flyweight" classes={{ root: classes.menuItem }}>Flyweight</MenuItem>
                <MenuItem onClick={() => { handleClose(); setValue(2); }} component={Link} to="/middleweight" classes={{ root: classes.menuItem }}>Middleweight</MenuItem>
              </Menu>
            </Box>

          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* <div className={classes.toolbarMargin} /> */}
    </>

  );
};

export default Navbar;
