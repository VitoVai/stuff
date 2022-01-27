import React, { useState, useRef } from 'react';
import {
  Divider,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
  Box,
  Typography,
} from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PersonIcon from '@mui/icons-material/Person';
import AuthService from '../../../services/auth-service';
import AuthMenuLink from './navbar-auth-menu-link';
import routes from '../../../routing/routes';

const NavbarAuthMenu = () => {
  const anchorRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);
  const handleLogout = () => {
    handleCloseMenu();
    AuthService.logout();
  };

  return (
    <Box>
      <IconButton onClick={handleOpenMenu} ref={anchorRef}>
        <Avatar src="/static/images/mcgregor.png" />
      </IconButton>
      <Menu
        open={menuOpen}
        onClose={handleCloseMenu}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <AuthMenuLink to={routes.ProfilePage}>
            <PersonIcon sx={{ mr: 2 }} />
            <Typography textAlign="center">Profilis</Typography>
          </AuthMenuLink>
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleLogout}>
          <PowerSettingsNewIcon sx={{ mr: 2 }} />
          <Typography textAlign="center">Atsijungti</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default NavbarAuthMenu;
