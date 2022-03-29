import React, { FC, useContext, useEffect } from 'react';
import {
  Button,
  Card,
  CardContent,
  IconButton,
  styled,
  Typography,
} from '@mui/material';
import { CardImage, FlexBox, H1, H3, H5, UnderLine } from 'components/atoms';
import { Colors, DeviceSizes, FontSize } from 'components/constants';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AppContext } from 'contexts/appContext';

type Props = {
  handleCloseModal: () => void;
};

const ProjectModalCard: FC<Props> = ({ handleCloseModal }) => {
  const { setProjectModalInfo, projectModalInfo } = useContext(AppContext);

  useEffect(() => {
    return () => {
      setProjectModalInfo(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!projectModalInfo) {
    return <></>;
  }

  const { title, effort, overview, hardship, skills, link } = projectModalInfo;

  return (
    <StyledCard>
      <CardContent>
        <BackButton onClick={handleCloseModal}>
          <StyledBackIcon />
        </BackButton>
        <ContentWrapper>
          <ExtendedFlexBox>
            <ImageWrapper>
              <CardImage title={title} />
            </ImageWrapper>
            <MainProfileInfoWrapper>
              <TitleText>{title}</TitleText>
              <Button
                onClick={() => {
                  window.open(link);
                }}
              >
                開く
              </Button>
            </MainProfileInfoWrapper>
          </ExtendedFlexBox>
          <UnderLine />
          <SectionTitleText>概要</SectionTitleText>
          <DescriptionText>{overview}</DescriptionText>
          <SectionTitleText>使用技術</SectionTitleText>
          {skills.map((skill) => {
            return <DescriptionText key={skill}>{skill}</DescriptionText>;
          })}
          <SectionTitleText>頑張ったこと</SectionTitleText>
          <DescriptionText>{effort}</DescriptionText>
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
  textAlign: 'center',
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

const TitleText = styled(H1)({
  fontWeight: 'bold',
});

export { ProjectModalCard };
