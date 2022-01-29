import React from 'react';
import { ThemeProvider } from '@mui/material';
import Navbar from './components/partials/navbar';
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Navbar />
    Boilerplate
  </ThemeProvider>
);

export default App;
