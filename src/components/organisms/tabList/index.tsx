import { styled, Tab, Tabs } from '@mui/material';
import {
  DeviceSizes,
  ExperienceTabs,
  FontSize,
  ProjectTabs,
} from 'components/constants';
import React, { FC, SyntheticEvent } from 'react';

type Props = {
  tabValue: string;
  useCase: 'experience' | 'projects';
  handleChangeTab: (
    _: SyntheticEvent<Element, Event>,
    // eslint-disable-next-line unused-imports/no-unused-vars
    newValue: string
  ) => void;
};

const TabList: FC<Props> = ({ tabValue, useCase, handleChangeTab }) => {
  const tabs = useCase === 'experience' ? ExperienceTabs : ProjectTabs;
  const color = useCase === 'experience' ? 'primary' : 'secondary';
  return (
    <StyledTabs
      onChange={handleChangeTab}
      value={tabValue}
      variant='fullWidth'
      textColor={color}
      indicatorColor={color}
    >
      {tabs.map(({ id, value }) => {
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
  },
}));
export { TabList };
