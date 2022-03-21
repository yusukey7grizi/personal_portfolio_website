import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  styled,
} from '@mui/material';
import { Colors } from 'components/constants';
import React, { FC } from 'react';

type Props = {
  handleOpenModal: () => void;
};

const SquareCard: FC<Props> = ({ children, handleOpenModal }) => {
  return (
    <StyledCard onClick={handleOpenModal}>
      <StyledCardActionArea>
        <CardMedia />
        <CardContent>{children}</CardContent>
      </StyledCardActionArea>
    </StyledCard>
  );
};

const StyledCard = styled(Card)({
  width: '15.625rem',
  height: '15.625rem',
  margin: '0.1875rem',
  backgroundColor: Colors.pink,
  '&:hover': {
    opacity: 0.6,
  },
});

const StyledCardActionArea = styled(CardActionArea)({
  width: '100%',
  height: '100%',
});

export { SquareCard };
