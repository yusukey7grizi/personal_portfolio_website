import { styled } from '@mui/material';
import { Colors } from 'components/constants';

const BaseWrapper = styled('div')({
  paddingTop: '5rem',
  paddingBottom: '5rem',
  textAlign: 'center',
});

export const WhiteSmokeWrapper = styled(BaseWrapper)({
  backgroundColor: Colors.whiteSmoke,
});

export const WhiteWrapper = styled(BaseWrapper)({
  backgroundColor: Colors.white,
});

export const BlueWrapper = styled(BaseWrapper)({
  backgroundColor: Colors.blue,
});

export const FlexBox = styled('div')({
  display: 'flex',
});
