import { Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1C969E',
      light: '#A2E2E7'
    },
    secondary: {
      main: '#052225',
      light: '#667071'
    },
    // error: {
    //   main: red.A400,
    //   light: '#E98074'
    // },
  },
  typography: {
    fontFamily: `"Manrope", "Helvetica", "Arial", sans-serif`,
    // body1: {
    //     color: '#052225',
    //     fontWeight: 700,
    //     fontSize: '30px'
    // }
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md'
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px',

          '@media (min-width: 600px)': {
            maxWidth: '680px'
          }
        },
        maxWidthMd: {
          maxWidth: '860px',

          '@media (min-width: 900px)': {
            maxWidth: '860px'
          }
        },
        maxWidthLg: {
          maxWidth: '1800px',

          '@media (min-width: 1200px)': {
            maxWidth: '1800px'
          }
        }
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          cursor: 'pointer',
          textDecoration: 'none',
          '&:hover': {
            color: '#13696e',
          },
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '4px'
        }
      }
    }
  }
});