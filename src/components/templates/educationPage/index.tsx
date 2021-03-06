import React, { FC, useContext, useEffect } from 'react';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { styled, Typography, useMediaQuery } from '@mui/material';
import { H1, P, UnderLine, WhiteWrapper } from 'components/atoms';
import {
  AppearFromTopVariants,
  Colors,
  DeviceSizes,
  FontSize,
} from 'components/constants';
import { AppContext } from 'contexts/appContext';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EducationPage: FC = () => {
  const { educationPageRef, userInfo } = useContext(AppContext);
  const isLargerThanOrEqualToIpad = useMediaQuery(
    `(min-width:${DeviceSizes.ipad}px)`
  );
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
    <WhiteWrapper ref={educationPageRef}>
      <H1>EDUCATION</H1>
      <UnderLine />
      <motion.div
        ref={ref}
        variants={AppearFromTopVariants}
        initial='initial'
        animate={controls}
      >
        <StyledTimeline
          position={isLargerThanOrEqualToIpad ? 'alternate' : 'right'}
        >
          {userInfo.education?.map(
            ({
              id,
              school,
              yearOfEnrollment,
              yearOfGraduation,
              description,
            }) => {
              return (
                <TimelineItem key={id}>
                  {!isLargerThanOrEqualToIpad && (
                    // remove the space of the opposite content
                    <TimelineOppositeContent sx={{ display: 'none' }} />
                  )}
                  <TimelineSeparator>
                    <StyledTimelineDot variant='outlined' />
                    <StyledTimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <ResponsiveTitleText>{school}</ResponsiveTitleText>
                    <YearText>
                      {yearOfEnrollment}-{yearOfGraduation}
                    </YearText>
                    <DescriptionText>{description}</DescriptionText>
                  </TimelineContent>
                </TimelineItem>
              );
            }
          )}
        </StyledTimeline>
      </motion.div>
    </WhiteWrapper>
  );
};

const ResponsiveTitleText = styled(Typography)((props) => ({
  fontWeight: 'bold',
  color: Colors.blue,
  fontSize: FontSize.h5,
  [props.theme.breakpoints.down(DeviceSizes.largestIphone)]: {
    fontSize: FontSize.p,
  },
}));

const YearText = styled(P)({
  paddingBottom: '2rem',
});

const DescriptionText = styled(P)({
  textAlign: 'justify',
});

const StyledTimeline = styled(Timeline)((props) => ({
  width: '43.75rem',
  margin: 'auto',
  [props.theme.breakpoints.down(DeviceSizes.ipad)]: {
    width: '90%',
  },
}));

const StyledTimelineDot = styled(TimelineDot)({
  width: '1rem',
  height: '1rem',
  borderColor: Colors.blue,
});

const StyledTimelineConnector = styled(TimelineConnector)({
  height: '5rem',
  backgroundColor: Colors.pink,
});

export { EducationPage };
