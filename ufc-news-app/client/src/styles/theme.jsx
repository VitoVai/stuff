import { createTheme } from '@mui/material';

const mainBlack = '#0C090A';
const mainWhite = '#FFFFFF';

const theme = createTheme({
  palette: {
    common: {
      black: `${mainBlack}`,
      white: `${mainWhite}`,
    },
    primary: {
      main: `${mainBlack}`,
    },
    secondary: {
      main: `${mainWhite}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Merriweather',
      // marginLeft: '25px',
    },
    estimate: {
      fontFamily: 'Merriweather',
    },

    fontFamily: [
      'Merriweather',
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
