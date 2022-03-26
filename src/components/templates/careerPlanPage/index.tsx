import React, { FC, useContext } from 'react';
import { styled } from '@mui/material';
import { H1, H3, H5, UnderLine, WhiteSmokeWrapper } from 'components/atoms';
import { Colors, DeviceSizes } from 'components/constants';
import { AppContext } from 'contexts/appContext';

const CareerPlanPage: FC = () => {
  const { careerPlanPageRef } = useContext(AppContext);

  return (
    <WhiteSmokeWrapper ref={careerPlanPageRef}>
      <H1>CAREER PLAN</H1>
      <UnderLine />
      <ContentWrapper>
        <TitleText>今後のキャリアプラン</TitleText>
        <DescriptionText>
          昨季、DH解除のリアル二刀流にはリスクや弊害もあった。6月30日のヤンキース戦、大谷は2／3回7失点で降板。打者では1打席のみに終わった。本来はア・リーグで打席に立つ必要がない救援投手も打席に立つこととなり、大谷不在の打線で得点力低下も招く。そのデメリットが消え、マドン監督は「悪い登板になったとしても彼は試合に残ることができる」と指摘。接戦で大谷を1打席多く立たせるため、降板後に外野手に回すこともあったが「その必要はない」。負担軽減のメリットにもなる。
        </DescriptionText>
        <TitleText>目指すエンジニア像</TitleText>
        <DescriptionText>
          昨季、DH解除のリアル二刀流にはリスクや弊害もあった。6月30日のヤンキース戦、大谷は2／3回7失点で降板。打者では1打席のみに終わった。本来はア・リーグで打席に立つ必要がない救援投手も打席に立つこととなり、大谷不在の打線で得点力低下も招く。そのデメリットが消え、マドン監督は「悪い登板になったとしても彼は試合に残ることができる」と指摘。接戦で大谷を1打席多く立たせるため、降板後に外野手に回すこともあったが「その必要はない」。負担軽減のメリットにもなる。
        </DescriptionText>
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
