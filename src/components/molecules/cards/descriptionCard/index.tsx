import React, { FC } from 'react';
import {
  Card,
  CardContent,
  IconButton,
  styled,
  Typography,
} from '@mui/material';
import { FlexBox, H3, H5, P, UnderLine } from 'components/atoms';
import ProfilePicture from 'images/269786281_651956815932463_117589646252707614_n.jpg';
import Image from 'next/image';
import { Colors, DeviceSizes, FontSize } from 'components/constants';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type Props = {
  handleCloseModal: () => void;
};

const DescriptionCard: FC<Props> = ({ handleCloseModal }) => {
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
        <BackButton onClick={handleCloseModal}>
          <StyledBackIcon />
        </BackButton>
        <ContentWrapper>
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
              <TitleText>{title}</TitleText>
              <P>{genre}</P>
              <ResponsiveText>{period}</ResponsiveText>
            </MainProfileInfoWrapper>
          </ExtendedFlexBox>
          <UnderLine />
          <SectionTitleText>仕事内容</SectionTitleText>
          <DescriptionText>{role}</DescriptionText>
          <SectionTitleText>頑張ったこと</SectionTitleText>
          <DescriptionText>{challenge}</DescriptionText>
          <SectionTitleText>難しかったこと</SectionTitleText>
          <DescriptionText>{hardship}</DescriptionText>
        </ContentWrapper>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)((props) => ({
  width: '46rem',
  margin: 'auto',
  height: '90%',
  marginTop: '2rem',
  overflowY: 'scroll',
  minWidth: DeviceSizes.smallestIphone * 0.9,
  [props.theme.breakpoints.down(DeviceSizes.ipad)]: {
    width: '90%',
  },
}));

const SectionTitleText = styled(H3)({
  color: Colors.blue,
  paddingBottom: '1rem',
  paddingTop: '3rem',
  fontWeight: 'bold',
});

const ProfileImage = styled(Image)({
  borderRadius: '50%',
});

const ContentWrapper = styled('div')({
  margin: 'auto',
  textAlign: 'left',
  width: '90%',
});

const BackButton = styled(IconButton)({
  width: '3.5rem',
  height: '3.5rem',
});

const StyledBackIcon = styled(ArrowBackIcon)({
  width: '80%',
  height: '80%',
  color: Colors.pink,
});

// kokokara
const ResponsiveText = styled(Typography)((props) => ({
  fontSize: FontSize.h5,
  [props.theme.breakpoints.down(DeviceSizes.largestIphone)]: {
    fontSize: FontSize.p,
  },
}));

const ExtendedFlexBox = styled(FlexBox)((props) => ({
  justifyContent: 'space-evenly',
  paddingTop: '3rem',
  paddingBottom: '3rem',
  [props.theme.breakpoints.down(DeviceSizes.ipad)]: {
    flexDirection: 'column',
  },
}));

const MainProfileInfoWrapper = styled('div')((props) => ({
  width: '18.75rem',
  margin: 'auto',
  [props.theme.breakpoints.down(DeviceSizes.ipad)]: {
    maxWidth: '30rem',
    width: '100%',
  },
}));

const ImageWrapper = styled('div')({
  margin: 'auto',
});

const DescriptionText = styled(H5)({
  width: '95%',
  margin: 'auto',
  color: Colors.gray,
  textAlign: 'justify',
});

const TitleText = styled(H3)({
  fontWeight: 'bold',
});

export { DescriptionCard };
