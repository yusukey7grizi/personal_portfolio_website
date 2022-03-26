import { Card, CardActionArea, CardContent, styled } from '@mui/material';
import { H5, P } from 'components/atoms';
import { CardImage } from 'components/atoms/images';
import { Colors } from 'components/constants';
import React, { FC } from 'react';

type Props = {
  handleOpenModal: () => void;
  src: any;
  alt: string;
};

const ClickableCard: FC<Props> = ({ src, alt, handleOpenModal }) => {
  return (
    <StyledCard onClick={handleOpenModal}>
      <CardActionArea>
        <CardImage src={src} alt={alt} />
        <StyledCardContent>
          <TitleText>株式会社Viviane</TitleText>
          <TypeText>インターン</TypeText>
        </StyledCardContent>
      </CardActionArea>
    </StyledCard>
  );
};

const StyledCard = styled(Card)({
  maxWidth: '18.75rem',
  margin: '1rem',
  '&:hover': {
    opacity: 0.8,
  },
});

const StyledCardContent = styled(CardContent)({
  textAlign: 'left',
});

const TitleText = styled(H5)({
  fontWeight: 'bold',
});

const TypeText = styled(P)({
  color: Colors.gray,
});

export { ClickableCard };
