import { styled } from '@mui/material';
import { Colors, DeviceSizes } from 'components/constants';

const BaseWrapper = styled('div')({
  paddingTop: '5rem',
  paddingBottom: '5rem',
  textAlign: 'center',
});

export const WhiteSmokeWrapper = styled(BaseWrapper)({
  backgroundColor: Colors.whiteSmoke,
  minWidth: DeviceSizes.smallestIphone,
});

export const WhiteWrapper = styled(BaseWrapper)({
  backgroundColor: Colors.white,
  minWidth: DeviceSizes.smallestIphone,
});

export const BlueWrapper = styled(BaseWrapper)({
  backgroundColor: Colors.blue,
});

export const FlexBox = styled('div')({
  display: 'flex',
});
