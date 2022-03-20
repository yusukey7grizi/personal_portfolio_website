import React, { FC } from 'react';
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
  VerticalDivider,
  WhiteSmokeWrapper,
} from 'components/atoms';
import ProfilePicture from 'images/269786281_651956815932463_117589646252707614_n.jpg';
import Image from 'next/image';
import { Colors } from 'components/constants';

const IconStyle = {
  width: '100%',
  height: '100%',
  color: Colors.white,
} as const;

const AboutPage: FC = () => {
  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'React',
    'Redux',
    'Next JS',
  ];
  const achievements = ['ハッカソン 努力賞'];
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
    <WhiteSmokeWrapper>
      <TitleText>ABOUT</TitleText>
      <UnderLine />
      <ContentWrapper>
        <ExtendedFlexBox>
          <ProfileImage
            width={250}
            height={250}
            src={ProfilePicture}
            alt='Profile Picture'
          />
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
      </ContentWrapper>
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
        <VerticalDivider />
        <ColumnWrapper>
          <IconWrapper>
            <EmojiEventsIcon sx={IconStyle} />
          </IconWrapper>
          <ColumnTitleText>Achievements</ColumnTitleText>
          {achievements.map((achievement) => {
            return <ColumnText key={achievement}>{achievement}</ColumnText>;
          })}
        </ColumnWrapper>
        <VerticalDivider />
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

const TitleText = styled(H1)({
  paddingTop: '2rem',
});

const IntroductionText = styled(H5)({
  width: '70%',
  margin: 'auto',
});

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

const ExtendedFlexBox = styled(FlexBox)({
  justifyContent: 'space-evenly',
  paddingTop: '3rem',
  paddingBottom: '3rem',
});

const ContentWrapper = styled('div')({
  width: '75%',
  margin: 'auto',
  textAlign: 'left',
});

const IconWrapper = styled('div')({
  width: '3rem',
  height: '3rem',
  backgroundColor: Colors.blue,
  padding: '1rem',
  borderRadius: '50%',
  margin: 'auto',
});

const ColumnWrapper = styled('div')({
  width: '30%',
  textAlign: 'center',
});

const MainProfileInfoWrapper = styled('div')({
  width: '18.75rem',
});

export { AboutPage };
