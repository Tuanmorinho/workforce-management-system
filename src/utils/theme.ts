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
  },
  typography: {
    fontFamily: `"Manrope", "Helvetica", "Arial", sans-serif`,
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
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: '12px'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          borderColor: 'rgba(6, 25, 28, 0.1) !important',
          background: 'rgba(49, 85, 89, 0.04)',
          fontSize: '15px',

          '& fieldset': {
            borderColor: 'rgba(6, 25, 28, 0.1);',
          },
          '&:hover fieldset': {
            borderColor: 'rgba(13,110,253,.25) !important',
            boxShadow: '0 0 0 0.25rem rgba(13,110,253,.25)'
          },
          '&.Mui-focused fieldset': {
            borderColor: 'rgba(13,110,253,.25) !important',
            boxShadow: '0 0 0 0.25rem rgba(13,110,253,.25)'
          },
        },
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          
          '& > .MuiLinearProgress-bar': {
            backgroundColor: '#7DD9DF !important'
          }
        }
      }
    }
  }
});