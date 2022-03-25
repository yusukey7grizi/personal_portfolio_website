import React, { FC, useContext } from 'react';
import { IconButton, styled } from '@mui/material';
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
import { Colors, DeviceSizes } from 'components/constants';
import { AppContext } from 'contexts/appContext';

const IconStyle = {
  width: '100%',
  height: '100%',
  color: Colors.white,
} as const;

const AboutPage: FC = () => {
  const { aboutPageRef } = useContext(AppContext);

  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'React',
    'Redux',
    'Next JS',
  ];
  const achievements = [
    'FUHSD スピーチコンテスト4位入賞',
    '【オンライン開発合宿vol.12】思わずニヤっとするアプリケーション を作ろう！ 努力賞',
  ];
  const degrees = ['実用英語技能検定１級', '普通自動車免許'];

  const profileInfo = {
    japaneseName: '山根 佑介',
    englishName: 'Yusuke Yamene',
    school: '早稲田大学 社会科学部 TAISIプログラム',
    yearOfGraduation: '2024年卒業予定',
    introduction:
      '今年の春学期から休学をしており、独学でHTML, CSS, Javascript, React, React Nativeを勉強しています。将来はエンジニアを目指しており、インターンシップでは、Webやスマホアプリの開発に携わりたいと考えております。',
  };

  const { japaneseName, englishName, school, yearOfGraduation, introduction } =
    profileInfo;

  const handleRedirect = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <WhiteSmokeWrapper ref={aboutPageRef}>
      <H1>ABOUT</H1>
      <UnderLine />
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
            <H5>{school}</H5>
            <H5>{yearOfGraduation}</H5>
            <IconButton
              onClick={() => {
                handleRedirect('https://github.com/yusukey7grizi');
              }}
            >
              <GitHubIcon color='primary' />
            </IconButton>
            <IconButton
              onClick={() => {
                handleRedirect(
                  'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=yusukey7grizi@gmail.com'
                );
              }}
            >
              <EmailIcon color='primary' />
            </IconButton>
          </MainProfileInfoWrapper>
        </ExtendedFlexBox>
        <IntroductionText>{introduction}</IntroductionText>
      </UpperContentWrapper>
      <ExtendedFlexBox>
        <ColumnWrapper>
          <IconWrapper>
            <GradeIcon sx={IconStyle} />
          </IconWrapper>
          <ColumnTitleText>Skills</ColumnTitleText>
          {skills.map((skill) => {
            return <ColumnText key={skill}>{skill}</ColumnText>;
          })}
        </ColumnWrapper>
        <ColumnWrapper>
          <IconWrapper>
            <EmojiEventsIcon sx={IconStyle} />
          </IconWrapper>
          <ColumnTitleText>Achievements</ColumnTitleText>
          {achievements.map((achievement) => {
            return <ColumnText key={achievement}>{achievement}</ColumnText>;
          })}
        </ColumnWrapper>
        <ColumnWrapper>
          <IconWrapper>
            <WorkspacePremiumIcon sx={IconStyle} />
          </IconWrapper>
          <ColumnTitleText>Degrees</ColumnTitleText>
          {degrees.map((degree) => {
            return <ColumnText key={degree}>{degree}</ColumnText>;
          })}
        </ColumnWrapper>
      </ExtendedFlexBox>
    </WhiteSmokeWrapper>
  );
};

const IntroductionText = styled(H5)((props) => ({
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

const UpperContentWrapper = styled('div')((props) => ({
  width: '47rem',
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
