import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import React, { FC } from 'react';
import { WhiteWrapper } from 'components/atoms';
import { Button, styled, Typography } from '@mui/material';
import { Colors, DeviceSizes, FontSize } from 'components/constants';
import { useRouter } from 'next/router';

const InternalServerError: FC = () => {
  const router = useRouter();

  return (
    <WhiteWrapper>
      <StyledSentimentVeryDissatisfiedIcon color='primary' />
      <ErrorText>500 Internal Server Error</ErrorText>
      <ErrorText>アクセスしようとしたページは表示できませんでした</ErrorText>
      <BackToHomeButton
        color='secondary'
        disableRipple
        onClick={() => {
          router.push('/');
        }}
      >
        ホームへ戻る
      </BackToHomeButton>
    </WhiteWrapper>
  );
};

const StyledSentimentVeryDissatisfiedIcon = styled(
  SentimentVeryDissatisfiedIcon
)({
  width: '10rem',
  height: '10rem',
});

const ErrorText = styled(Typography)((props) => ({
  fontSize: FontSize.h1,
  color: Colors.blue,
  [props.theme.breakpoints.down(DeviceSizes.largestIphone)]: {
    fontSize: FontSize.h5,
  },
}));

const BackToHomeButton = styled(Button)({
  fontSize: FontSize.h5,
});

export { InternalServerError };
