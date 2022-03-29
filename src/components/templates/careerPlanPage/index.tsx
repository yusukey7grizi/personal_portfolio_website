import React, { FC, useContext, useEffect } from 'react';
import { styled } from '@mui/material';
import { H1, H3, H5, UnderLine, WhiteSmokeWrapper } from 'components/atoms';
import {
  Colors,
  DeviceSizes,
  IncreaseOpacityVariants,
} from 'components/constants';
import { AppContext } from 'contexts/appContext';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CareerPlanPage: FC = () => {
  const { careerPlanPageRef, userInfo } = useContext(AppContext);
  const { careerPlan, goal } = userInfo;

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
    <WhiteSmokeWrapper ref={careerPlanPageRef}>
      <H1>CAREER PLAN</H1>
      <UnderLine />
      <ContentWrapper ref={ref}>
        <TitleText>今後のキャリアプラン</TitleText>
        <motion.div
          variants={IncreaseOpacityVariants}
          initial='initial'
          animate={controls}
        >
          <DescriptionText>{careerPlan}</DescriptionText>
        </motion.div>
        <TitleText>目指すエンジニア像</TitleText>
        <motion.div
          variants={IncreaseOpacityVariants}
          initial='initial'
          animate={controls}
        >
          <DescriptionText>{goal}</DescriptionText>
        </motion.div>
      </ContentWrapper>
    </WhiteSmokeWrapper>
  );
};

const ContentWrapper = styled('div')((props) => ({
  width: '44rem',
  textAlign: 'left',
  margin: 'auto',
  [props.theme.breakpoints.down(DeviceSizes.ipad)]: {
    width: '90%',
  },
}));

const TitleText = styled(H3)({
  paddingTop: '2rem',
  paddingBottom: '2rem',
  fontWeight: 'bold',
});

const DescriptionText = styled(H5)({
  width: '95%',
  margin: 'auto',
  color: Colors.gray,
  textAlign: 'justify',
});

export { CareerPlanPage };
