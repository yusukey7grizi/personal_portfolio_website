import { styled, Tab, Tabs } from '@mui/material';
import { DeviceSizes, ExperienceTabs, FontSize } from 'components/constants';
import React, { FC, SyntheticEvent } from 'react';

type Props = {
  tabValue: string;
  handleChangeTab: (
    _: SyntheticEvent<Element, Event>,
    // eslint-disable-next-line unused-imports/no-unused-vars
    newValue: string
  ) => void;
};

const TabList: FC<Props> = ({ tabValue, handleChangeTab }) => {
  return (
    <StyledTabs
      onChange={handleChangeTab}
      value={tabValue}
      variant='fullWidth'
      textColor='primary'
      indicatorColor='primary'
    >
      {ExperienceTabs.map(({ id, value }) => {
        return <StyledTab key={id} value={value} label={value} />;
      })}
    </StyledTabs>
  );
};

const StyledTabs = styled(Tabs)((props) => ({
  width: '48rem',
  margin: 'auto',
  paddingBottom: '2rem',
  [props.theme.breakpoints.down(DeviceSizes.ipad)]: {
    width: '100%',
  },
}));

const StyledTab = styled(Tab)((props) => ({
  fontSize: FontSize.h5,
  width: '100%',
  [props.theme.breakpoints.down(DeviceSizes.ipad)]: {
    width: '100%',
    fontSize: FontSize.p,
  },
}));
export { TabList };
