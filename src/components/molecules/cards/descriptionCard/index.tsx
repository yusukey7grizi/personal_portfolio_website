import React, { FC } from 'react';
import { Card, CardContent, styled } from '@mui/material';
import { FlexBox, H3, H5, P, UnderLine } from 'components/atoms';
import ProfilePicture from 'images/269786281_651956815932463_117589646252707614_n.jpg';
import Image from 'next/image';
import { Colors } from 'components/constants';

const DescriptionCard: FC = () => {
  const data = {
    id: 1,
    title: 'お迎えシスター',
    genre: 'アルバイト',
    period: '2020/11 - 2021/08',
    role: '今年の春学期から休学をしており、独学でHTML, CSS, Javascript, React, React Nativeを勉強しています。将来はエンジニアを目指しており、インターンシップでは、Webやスマホアプリの開発に携わりたいと考えております。',
    challenge:
      '今年の春学期から休学をしており、独学でHTML, CSS, Javascript, React, React Nativeを勉強しています。将来はエンジニアを目指しており、インターンシップでは、Webやスマホアプリの開発に携わりたいと考えております。',
    hardship:
      '今年の春学期から休学をしており、独学でHTML, CSS, Javascript, React, React Nativeを勉強しています。将来はエンジニアを目指しており、インターンシップでは、Webやスマホアプリの開発に携わりたいと考えております。',
  };

  const { title, genre, period, role, challenge, hardship } = data;

  return (
    <StyledCard>
      <CardContent>
        <ContentWrapper>
          <ExtendedFlexBox>
            <ProfileImage
              width={200}
              height={200}
              src={ProfilePicture}
              alt='Profile Picture'
            />
            <MainProfileInfoWrapper>
              <H3>{title}</H3>
              <P>{genre}</P>
              <P>{period}</P>
            </MainProfileInfoWrapper>
          </ExtendedFlexBox>
          <UnderLine />
          <SectionTitleText>仕事内容</SectionTitleText>
          <H5>{role}</H5>
          <SectionTitleText>頑張ったこと</SectionTitleText>
          <H5>{challenge}</H5>
          <SectionTitleText>難しかったこと</SectionTitleText>
          <H5>{hardship}</H5>
        </ContentWrapper>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)({
  width: '46rem',
  margin: 'auto',
  height: '90%',
  marginTop: '2rem',
  overflowY: 'scroll',
});

const SectionTitleText = styled(H3)({
  color: Colors.blue,
  paddingBottom: '1rem',
  paddingTop: '3rem',
  fontWeight: 'bold',
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

const MainProfileInfoWrapper = styled('div')({
  width: '12.5rem',
  marginTop: '2rem',
});

export { DescriptionCard };
