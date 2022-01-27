import React from 'react';
import {
  Box,
  Toolbar,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/auth';
import LinkButton from './navbar-link-button';
import AuthMenu from './navbar-auth-menu';
import routes from '../../../routing/routes';
import LogInButton from './log-in-button';

import logo from '../../../assets/ufc-logo.png';

const Navbar = () => {
  const auth = useSelector(authSelector);

  return (
    <Box elevation={0} sx={{ background: '#ffffff' }}>
      <Toolbar>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}
        >
          <Box sx={{ display: 'flex' }}>
            <img src={logo} alt="UFC logo" />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <LinkButton link={routes.HomePage} title="Pagrindinis" />
            <LinkButton link={routes.NewsPage} title="Naujienos" />
            <LinkButton link={routes.RankingsPage} title="UFC reitingai" />
            <LinkButton link={routes.EventsPage} title="Renginiai" />

          </Box>
          <Box>
            {
            !auth.loggedIn ? (
              <Box sx={{ display: 'flex' }}>
                <LogInButton link={routes.LoginPage} title="Prisijungti" />
              </Box>
            ) : <AuthMenu />
          }
          </Box>
        </Box>
      </Toolbar>

    </Box>
  );
};

export default Navbar;
