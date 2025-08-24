import './App.css';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import HomePage from "./pages/HomePage";

// Create a clean MUI theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc',
      
    },
    secondary: {
      main: '#03dac6',
    },
    background: {
      default: '#0f0134',
      paper: 'rgba(255, 255, 255, 0.05)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
