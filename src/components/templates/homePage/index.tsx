import React, { FC } from 'react';
import { H1, H4, Title } from 'components/atoms';
import { useGetWindowSize } from 'utils';
import { Box, Button, styled } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import { Colors } from 'components/constants';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const HomePage: FC = () => {
  const { height } = useGetWindowSize();

  return (
    <Wrapper height={height}>
      <ContentWrapper>
        <ExtendedH1>FRONTEND DEVELOPER</ExtendedH1>
        <StyledCodeIcon />
        <NameText>YUSUKE</NameText>
        <NameText>YAMANE</NameText>
        <ExtendedH1>PORTFOLIO WEBSITE</ExtendedH1>
        <StyledButton disableRipple>
          <Box>
            <StyledKeyboardArrowDownIcon />
            <ExtendedH4>SCROLL</ExtendedH4>
          </Box>
        </StyledButton>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(`div`)(({ height }: { height: number }) => ({
  width: '100%',
  height: `${height / 16}rem`,
  minHeight: '42rem',
  backgroundColor: Colors.pink,
}));

const ContentWrapper = styled('div')({
  width: '25rem',
  textAlign: 'center',
  margin: 'auto',
  paddingTop: '5rem',
});

const StyledCodeIcon = styled(CodeIcon)({
  width: '15rem',
  height: '15rem',
  color: Colors.white,
});

const NameText = styled(Title)({
  color: Colors.white,
  lineHeight: 1,
});

const ExtendedH1 = styled(H1)({
  color: Colors.white,
});

const ExtendedH4 = styled(H4)({
  color: Colors.blue,
});

const StyledButton = styled(Button)({
  width: '6rem',
  height: '3rem',
  borderRadius: 0,
  marginTop: '1rem',
});

const StyledKeyboardArrowDownIcon = styled(KeyboardArrowDownIcon)({
  color: Colors.blue,
});

export { HomePage };
