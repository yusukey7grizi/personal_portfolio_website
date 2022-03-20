import React, { FC } from 'react';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import { styled } from '@mui/material';
import { H1, H5, P, UnderLine, WhiteWrapper } from 'components/atoms';
import { Colors } from 'components/constants';

const EducationPage: FC = () => {
  const schoolInfoList = [
    {
      schoolName: 'Hyde Middle School (California)',
      year: '2013-2014',
      description:
        'Nativeを勉強しています。将来はエンジニアを目指しており、インターンシップでは、Webやスマホアプリの開発に携わりたいと考えております。',
    },
    {
      schoolName: 'Cupertino High School (California)',
      year: '2014-2018',
      description:
        'Nativeを勉強しています。将来はエンジニアを目指しており、インターンシップでは、Webやスマホアプリの開発に携わりたいと考えております。',
    },
    {
      schoolName: '早稲田大学社会科学部 TAISIプログラム',
      year: '2019-現在',
      description:
        'Nativeを勉強しています。将来はエンジニアを目指しており、インターンシップでは、Webやスマホアプリの開発に携わりたいと考えております。',
    },
  ];

  return (
    <WhiteWrapper>
      <H1>EDUCATION</H1>
      <UnderLine />
      <StyledTimeline position='alternate'>
        {schoolInfoList.map(({ schoolName, year, description }) => {
          return (
            <TimelineItem key={schoolName}>
              <TimelineSeparator>
                <StyledTimelineDot variant='outlined' />
                <StyledTimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <TitleText>{schoolName}</TitleText>
                <YearText>{year}</YearText>
                <P>{description}</P>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </StyledTimeline>
    </WhiteWrapper>
  );
};

const TitleText = styled(H5)({
  fontWeight: 'bold',
  color: Colors.blue,
});

const YearText = styled(P)({
  paddingBottom: '2rem',
});

const StyledTimeline = styled(Timeline)({
  width: '43.75rem',
  margin: 'auto',
});

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
