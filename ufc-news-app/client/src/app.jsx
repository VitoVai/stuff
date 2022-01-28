import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/partials/navbar/navbar';
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Navbar />
    Boilerplate
  </ThemeProvider>
);

export default App;
