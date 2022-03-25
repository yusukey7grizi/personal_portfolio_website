import React, { FC, useContext } from 'react';
import { Box, Button, styled } from '@mui/material';
import { H4 } from 'components/atoms';
import { Colors } from 'components/constants';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { AppContext } from 'contexts/appContext';
import { executeScroll } from 'utils';

const Footer: FC = () => {
  const { homePageRef } = useContext(AppContext);

  return (
    <FooterContainer>
      <StyledButton
        disableRipple
        onClick={() => {
          executeScroll(homePageRef);
        }}
      >
        <Box>
          <KeyboardArrowUpIcon />
          <ExtendedH4>TOP</ExtendedH4>
        </Box>
      </StyledButton>
    </FooterContainer>
  );
};

const ExtendedH4 = styled(H4)({
  color: Colors.blue,
});

const StyledButton = styled(Button)({
  width: '6rem',
  height: '3rem',
  borderRadius: 0,
  marginTop: '2rem',
});

const FooterContainer = styled('footer')({
  backgroundColor: Colors.pink,
  height: '15rem',
  textAlign: 'center',
});

export default Footer;
