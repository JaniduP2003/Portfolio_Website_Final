import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0f0134',
      paper: 'rgba(15, 1, 52, 0.8)',
    },
    primary: {
      main: '#4dabf7',
      light: '#74c0fc',
      dark: '#339af0',
    },
    secondary: {
      main: '#f50057',
      light: '#ff5983',
      dark: '#c51162',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.1,
      '@media (max-width:768px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      '@media (max-width:768px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.2rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(135deg, #0f0134ff, #0d012fff, #11013bfc)',
          backgroundSize: '400% 400%',
          animation: 'smoothDarkGradient 20s ease-in-out infinite',
          minHeight: '100vh',
          '@keyframes smoothDarkGradient': {
            '0%': {
              backgroundPosition: '0% 50%',
            },
            '50%': {
              backgroundPosition: '100% 50%',
            },
            '100%': {
              backgroundPosition: '0% 50%',
            },
          },
        },
        '*': {
          scrollBehavior: 'smooth',
        },
        '::-webkit-scrollbar': {
          width: '8px',
        },
        '::-webkit-scrollbar-track': {
          background: 'rgba(255, 255, 255, 0.1)',
        },
        '::-webkit-scrollbar-thumb': {
          background: 'linear-gradient(135deg, #4dabf7, #f50057)',
          borderRadius: '4px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: 'linear-gradient(135deg, #339af0, #c51162)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(15, 1, 52, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(74, 171, 247, 0.2)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(15, 1, 52, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(74, 171, 247, 0.2)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '8px',
          padding: '10px 24px',
        },
        contained: {
          background: 'linear-gradient(135deg, #4dabf7, #f50057)',
          '&:hover': {
            background: 'linear-gradient(135deg, #339af0, #c51162)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(74, 171, 247, 0.3)',
          },
        },
        outlined: {
          borderColor: '#4dabf7',
          color: '#4dabf7',
          '&:hover': {
            backgroundColor: '#4dabf7',
            color: '#ffffff',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(15, 1, 52, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(74, 171, 247, 0.2)',
          borderRadius: '16px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 20px 40px rgba(74, 171, 247, 0.2)',
          },
        },
      },
    },
  },
});

export default theme;
