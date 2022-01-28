import React from 'react';
import { AppBar, Toolbar, useScrollTrigger } from '@mui/material';

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

const Navbar = () => (
  <ElevationScroll>
    <AppBar>
      <Toolbar>
        UFC
      </Toolbar>
    </AppBar>
    <Toolbar />
  </ElevationScroll>

);

export default Navbar;
