'use client';
import { createTheme } from '@mui/material/styles';
import montserrat from './utils/fonts'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6874de',
    },
    secondary: {
      main: '#ed829b',
    },
    background: {
      default: '#ffffff',
      paper: '#ffebee',
    },
  },
  typography: {
    allVariants:{
      fontFamily:montserrat.style.fontFamily
    }
  },
});

export default theme;