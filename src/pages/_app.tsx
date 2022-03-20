import { styled, Typography } from '@mui/material';
import { Colors } from 'components/constants';
import 'components/globals.css';
import { ThemeProvider } from 'components/themeProvider';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Header>
        <Typography>Header</Typography>
      </Header>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

const Header = styled('header')({
  backgroundColor: Colors.white,
  height: '5rem',
  position: 'fixed',
  width: '100%',
  zIndex: 1,
});

export default MyApp;
