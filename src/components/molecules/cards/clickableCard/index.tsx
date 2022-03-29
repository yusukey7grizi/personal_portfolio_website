import { Card, CardActionArea, CardContent, styled } from '@mui/material';
import { CardImage, H5, P } from 'components/atoms';
import { Colors } from 'components/constants';
import React, { FC } from 'react';

type ClickableCardProps = {
  handleOpenModal(): void;
  type?: 'アルバイト' | 'インターン';
  title: string;
};

const ClickableCard: FC<ClickableCardProps> = ({
  handleOpenModal,
  title,
  type,
}) => {
  return (
    <StyledCard onClick={handleOpenModal}>
      <CardActionArea>
        <CardImage title={title} />
        <StyledCardContent>
          <TitleText>{title}</TitleText>
          {type && <TypeText>{type}</TypeText>}
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
