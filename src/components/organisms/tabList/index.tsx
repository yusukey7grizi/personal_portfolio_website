import { styled, Tab, Tabs } from '@mui/material';
import { ExperienceTabs, FontSize, ProjectTabs } from 'components/constants';
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
  return (
    <StyledTabs
      onChange={handleChangeTab}
      value={tabValue}
      variant='fullWidth'
      textColor='secondary'
      indicatorColor='secondary'
    >
      {tabs.map(({ id, value }) => {
        return <StyledTab key={id} value={value} label={value} />;
      })}
    </StyledTabs>
  );
};

const StyledTabs = styled(Tabs)({
  width: '70%',
  margin: 'auto',
  paddingBottom: '2rem',
});

const StyledTab = styled(Tab)({
  fontSize: FontSize.h4,
});

export { TabList };