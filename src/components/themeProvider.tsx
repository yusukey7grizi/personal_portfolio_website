import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import React, { FC } from 'react';
import { Colors } from 'components/constants';

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.blue,
    },
    secondary: {
      main: Colors.pink,
    },
  },
});

const ThemeProvider: FC = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export { ThemeProvider };
