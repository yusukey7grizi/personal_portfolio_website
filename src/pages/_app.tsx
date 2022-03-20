import { IconButton, styled } from '@mui/material';
import 'components/globals.css';
import { ThemeProvider } from 'components/themeProvider';
import type { AppProps } from 'next/app';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Colors } from 'components/constants';
import { MenuDrawer } from 'components/organisms';

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider>
      <Header>
        <MenuButton
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <StyledMenuIcon />
        </MenuButton>
        <MenuDrawer setIsOpen={setIsOpen} isOpen={isOpen} />
      </Header>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

const Header = styled('header')({
  height: '5rem',
  position: 'fixed',
  width: '100%',
  zIndex: 1,
});

const MenuButton = styled(IconButton)({
  width: '3.5rem',
  height: '3.5rem',
  marginLeft: '1rem',
  marginTop: '1rem',
});

const StyledMenuIcon = styled(MenuIcon)({
  width: '80%',
  height: '80%',
  color: Colors.pink,
});

export default MyApp;
