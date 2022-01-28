import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/partials/navbar/navbar';
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" />
        <Route exact path="/naujienos" />
        <Route exact path="/reitingai" />
        <Route exact path="/prisijungti" />
      </Routes>
    </BrowserRouter>

    Boilerplate
  </ThemeProvider>
);

export default App;
