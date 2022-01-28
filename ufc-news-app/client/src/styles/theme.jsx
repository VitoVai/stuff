import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#080806',
      light: '#F5F5F5',
      dark: '#FFFFFF',
      border: '#F3F2ED',
    },
    secondary: {
      main: '#FFFFFF',
      dark: '#2A3439',
    },
  },
  typography: {
    tab: {
      fontFamily: 'Merriweather',
      marginLeft: '25px',
    },
    estimate: {
      fontFamily: 'Merriweather',
    },

    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  mixins: {
    toolbar: {
      minHeight: 69,
    },
  },
});

export default theme;
