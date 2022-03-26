import React, { FC, useContext, useEffect } from 'react';
import { H4, Title } from 'components/atoms';
import { executeScroll, useGetWindowSize } from 'utils';
import { Box, Button, styled, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import {
  AppearFromLeftVariants,
  Colors,
  DelayedIncreaseOpacityVariants,
  DeviceSizes,
  FontSize,
} from 'components/constants';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AppContext } from 'contexts/appContext';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HomePage: FC = () => {
  const { homePageRef, aboutPageRef } = useContext(AppContext);
  const { height } = useGetWindowSize();

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('initial');
    }
  }, [controls, inView]);

  return (
    <Wrapper height={height} ref={homePageRef}>
      <div ref={ref}>
        <ContentWrapper>
          <motion.div
            variants={AppearFromLeftVariants}
            initial='initial'
            animate={controls}
          >
            <ResponsiveText>FRONTEND DEVELOPER</ResponsiveText>
          </motion.div>
          <motion.div
            variants={DelayedIncreaseOpacityVariants}
            initial='initial'
            animate={controls}
          >
            <StyledCodeIcon />
          </motion.div>
          <motion.div
            variants={AppearFromLeftVariants}
            initial='initial'
            animate={controls}
          >
            <NameText>YUSUKE</NameText>
            <NameText>YAMANE</NameText>
            <ResponsiveText>PORTFOLIO WEBSITE</ResponsiveText>
          </motion.div>
          <motion.div
            variants={DelayedIncreaseOpacityVariants}
            initial='initial'
            animate={controls}
          >
            <StyledButton
              disableRipple
              onClick={() => executeScroll(aboutPageRef)}
            >
              <Box>
                <KeyboardArrowDownIcon />
                <ExtendedH4>SCROLL</ExtendedH4>
              </Box>
            </StyledButton>
          </motion.div>
        </ContentWrapper>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(`div`)(({ height }: { height: number }) => ({
  width: '100%',
  minWidth: DeviceSizes.smallestIphone,
  height: `${height / 16}rem`,
  minHeight: '42rem',
  backgroundColor: Colors.pink,
}));

const ContentWrapper = styled('div')((props) => ({
  width: '25rem',
  textAlign: 'center',
  margin: 'auto',
  paddingTop: '5rem',
  [props.theme.breakpoints.down(DeviceSizes.ipad)]: {
    width: '90%',
  },
}));

const StyledCodeIcon = styled(CodeIcon)((props) => ({
  width: '15rem',
  height: '15rem',
  color: Colors.white,
  [props.theme.breakpoints.down(DeviceSizes.ipad)]: {
    width: '50%',
    height: '50%',
  },
}));

const NameText = styled(Title)((props) => ({
  color: Colors.white,
  lineHeight: 1,
  [props.theme.breakpoints.down(DeviceSizes.largestIphone)]: {
    fontSize: FontSize.h1,
  },
}));

const ResponsiveText = styled(Typography)((props) => ({
  color: Colors.white,
  fontSize: FontSize.h1,
  [props.theme.breakpoints.down(DeviceSizes.ipad)]: {
    fontSize: FontSize.h4,
  },
}));

const ExtendedH4 = styled(H4)({
  color: Colors.blue,
});

const StyledButton = styled(Button)({
  width: '6rem',
  height: '3rem',
  borderRadius: 0,
  marginTop: '1rem',
});

export { HomePage };
