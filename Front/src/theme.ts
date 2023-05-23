import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const mdTheme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          left: 'inherit',
          right: '1.75rem',
          transformOrigin: 'right',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          textAlign: 'right',
        },
      },
    },
  },
  direction: 'rtl',
  typography: {
    fontFamily: '"Rubik"',
  },
  palette: {
    primary: {
      main: '#A2209E',
    },
    secondary: {
      main: '#A2209E',
    },
    error: {
      main: red.A400,
    },
  },
});

export default mdTheme;
