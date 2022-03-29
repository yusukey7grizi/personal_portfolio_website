import React, { FC, useContext, useEffect } from 'react';
import { IconButton, styled, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GradeIcon from '@mui/icons-material/Grade';
import {
  FlexBox,
  H1,
  H2,
  H3,
  H5,
  P,
  UnderLine,
  WhiteSmokeWrapper,
} from 'components/atoms';
import ProfilePicture from 'images/269786281_651956815932463_117589646252707614_n.jpg';
import Image from 'next/image';
import {
  AppearFromTopVariants,
  Colors,
  DelayedIncreaseOpacityVariants,
  DeviceSizes,
  FontSize,
} from 'components/constants';
import { AppContext } from 'contexts/appContext';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const IconStyle = {
  width: '100%',
  height: '100%',
  color: Colors.white,
} as const;

const AboutPage: FC = () => {
  const { aboutPageRef, userInfo } = useContext(AppContext);

  const {
    japaneseName,
    englishName,
    school,
    yearOfGraduation,
    introduction,
    skills,
    degrees,
    achievements,
    githubUserName,
    gmail,
  } = userInfo;

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const handleRedirect = (url: string) => {
    window.open(url, '_blank');
  };

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('initial');
    }
  }, [controls, inView]);

  return (
    <WhiteSmokeWrapper ref={aboutPageRef}>
      <H1>ABOUT</H1>
      <UnderLine />
      <motion.div
        ref={ref}
        variants={AppearFromTopVariants}
        initial='initial'
        animate={controls}
      >
        <UpperContentWrapper>
          <ExtendedFlexBox>
            <ImageWrapper>
              <ProfileImage
                width={250}
                height={250}
                src={ProfilePicture}
                alt='Profile Picture'
              />
            </ImageWrapper>
            <MainProfileInfoWrapper>
              <H2>{japaneseName}</H2>
              <P>{englishName}</P>
              <ResponsiveText>{school}</ResponsiveText>
              <ResponsiveText>{yearOfGraduation}年卒業予定</ResponsiveText>
              <IconButton
                onClick={() => {
                  handleRedirect(`https://github.com/${githubUserName}`);
                }}
              >
                <GitHubIcon color='primary' />
              </IconButton>
              <IconButton
                onClick={() => {
                  handleRedirect(
                    `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${gmail}`
                  );
                }}
              >
                <EmailIcon color='primary' />
              </IconButton>
            </MainProfileInfoWrapper>
          </ExtendedFlexBox>
          <IntroductionText>{introduction}</IntroductionText>
        </UpperContentWrapper>
        <ExtendedFlexBox
          variants={DelayedIncreaseOpacityVariants}
          initial='initial'
          animate={controls}
        >
          <ColumnWrapper>
            <IconWrapper>
              <GradeIcon sx={IconStyle} />
            </IconWrapper>
            <ColumnTitleText>Skills</ColumnTitleText>
            {skills?.map(({ id, title, years }) => {
              return (
                <ColumnText key={id}>
                  {title} 開発年数：{years}
                </ColumnText>
              );
            })}
          </ColumnWrapper>
          <ColumnWrapper>
            <IconWrapper>
              <EmojiEventsIcon sx={IconStyle} />
            </IconWrapper>
            <ColumnTitleText>Achievements</ColumnTitleText>
            {achievements?.map(({ id, title }) => {
              return <ColumnText key={id}>{title}</ColumnText>;
            })}
          </ColumnWrapper>
          <ColumnWrapper>
            <IconWrapper>
              <WorkspacePremiumIcon sx={IconStyle} />
            </IconWrapper>
            <ColumnTitleText>Degrees</ColumnTitleText>
            {degrees?.map(({ id, title }) => {
              return <ColumnText key={id}>{title}</ColumnText>;
            })}
          </ColumnWrapper>
        </ExtendedFlexBox>
      </motion.div>
    </WhiteSmokeWrapper>
  );
};

const ResponsiveText = styled(Typography)((props) => ({
  fontSize: FontSize.h5,
  [props.theme.breakpoints.down(DeviceSizes.largestIphone)]: {
    fontSize: FontSize.p,
  },
}));

const IntroductionText = styled(ResponsiveText)((props) => ({
  width: '70%',
  margin: 'auto',
  textAlign: 'justify',
  [props.theme.breakpoints.down(DeviceSizes.ipad)]: {
    width: '100%',
  },
}));

const ColumnTitleText = styled(H3)({
  paddingTop: '1rem',
  paddingBottom: '1rem',
  fontWeight: 'bold',
});

const ColumnText = styled(H5)({
  paddingBottom: '0.5rem',
});

const ProfileImage = styled(Image)({
  borderRadius: '50%',
});

const ExtendedFlexBox = styled(FlexBox)((props) => ({
  justifyContent: 'space-evenly',
  paddingTop: '3rem',
  paddingBottom: '3rem',
  [props.theme.breakpoints.down(DeviceSizes.ipad)]: {
    flexDirection: 'column',
  },
}));

const UpperContentWrapper = styled(`div`)((props) => ({
  width: '48rem',
  margin: 'auto',
  textAlign: 'left',
  [props.theme.breakpoints.down(DeviceSizes.ipad)]: {
    width: '90%',
    maxWidth: '30rem',
  },
}));

const IconWrapper = styled('div')({
  width: '3rem',
  height: '3rem',
  backgroundColor: Colors.blue,
  padding: '1rem',
  borderRadius: '50%',
  margin: 'auto',
});

const ColumnWrapper = styled('div')((props) => ({
  width: '30%',
  textAlign: 'center',
  [props.theme.breakpoints.down(DeviceSizes.ipad)]: {
    width: '90%',
    margin: 'auto',
    paddingTop: '3rem',
    paddingBottom: '3rem',
    maxWidth: '30rem',
  },
}));

const MainProfileInfoWrapper = styled('div')((props) => ({
  width: '18.75rem',
  margin: 'auto',
  [props.theme.breakpoints.down(DeviceSizes.ipad)]: {
    width: '100%',
  },
}));

const ImageWrapper = styled('div')({
  margin: 'auto',
});

export { AboutPage };
