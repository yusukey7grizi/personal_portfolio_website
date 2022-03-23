import React, { FC } from 'react';
import { H1, Title } from 'components/atoms';
import { useGetWindowSize } from 'utils';
import { styled } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import { Colors } from 'components/constants';

const HomePage: FC = () => {
  const { height } = useGetWindowSize();

  return (
    <Wrapper height={height}>
      <ContentWrapper>
        <StyledCodeIcon />
        <NameText>YUSUKE</NameText>
        <NameText>YAMANE</NameText>
        <ExtendedH1>PORTFOLIO WEBSITE</ExtendedH1>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(`div`)(({ height }: { height: number }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: height,
  backgroundImage: `url(http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F269786281_651956815932463_117589646252707614_n.f7327bf8.jpg&w=256&q=75)`,
}));

const ContentWrapper = styled('div')({
  width: '25rem',
  textAlign: 'center',
  marginTop: 'auto',
  marginBottom: '2rem',
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

export { HomePage };
