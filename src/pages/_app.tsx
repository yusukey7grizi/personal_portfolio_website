import { IconButton, styled } from '@mui/material';
import 'components/globals.css';
import { ThemeProvider } from 'components/themeProvider';
import type { AppProps } from 'next/app';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from 'react';
import { MenuDrawer } from 'components/organisms';
import { AppContext, AppProvider } from 'contexts/appContext';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { userInfo } = useContext(AppContext);

  return (
    <AppProvider>
      <ThemeProvider>
        <Header>
          {router.asPath === '/' && userInfo && (
            <MenuButton
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <StyledMenuIcon color='primary' />
            </MenuButton>
          )}
          <MenuDrawer setIsOpen={setIsOpen} isOpen={isOpen} />
        </Header>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppProvider>
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
});

export default MyApp;
