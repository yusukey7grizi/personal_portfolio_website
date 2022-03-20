import { styled } from '@mui/material';
import { Colors } from 'components/constants';

export const UnderLine = styled('div')(() => ({
  width: '5rem',
  height: '0.4rem',
  backgroundColor: Colors.blue,
  borderRadius: '0.2rem',
  top: '0.6rem',
  margin: 'auto',
  marginTop: '1.4rem',
  marginBottom: '1.4rem',
}));
