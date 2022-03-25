import React, { FC, useContext, useState } from 'react';
import {
  Drawer,
  List as MuiList,
  ListItem,
  ListItemText,
  styled,
} from '@mui/material';
import { Colors } from 'components/constants';
import { AppContext } from 'contexts/appContext';
import { executeScroll } from 'utils';

type Props = {
  isOpen: boolean;
  // eslint-disable-next-line unused-imports/no-unused-vars
  setIsOpen: (input: boolean) => void;
};

type DrawerLabelType =
  | 'HOME'
  | 'ABOUT'
  | 'EDUCATION'
  | 'EXPERIENCES'
  | 'PROJECTS'
  | 'CAREER PLAN';

const MenuDrawer: FC<Props> = ({ isOpen, setIsOpen }) => {
  const {
    homePageRef,
    aboutPageRef,
    educationPageRef,
    experiencePageRef,
    projectPageRef,
    careerPlanPageRef,
  } = useContext(AppContext);
  const [drawerValue, setDrawerValue] = useState<DrawerLabelType>('HOME');

  const routes = [
    { value: homePageRef, label: 'HOME' },
    { value: aboutPageRef, label: 'ABOUT' },
    { value: educationPageRef, label: 'EDUCATION' },
    { value: experiencePageRef, label: 'EXPERIENCES' },
    { value: projectPageRef, label: 'PROJECTS' },
    { value: careerPlanPageRef, label: 'CAREER PLAN' },
  ] as const;

  const handleScroll = (route: { label: any; value: any }) => {
    const { label, value } = route;
    setDrawerValue(label);
    executeScroll(value);
  };

  return (
    <Drawer
      anchor='top'
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <List>
        {routes.map((route) => {
          return (
            <ListItem
              button
              key={route.label}
              onClick={() => {
                handleScroll(route);
              }}
            >
              <ListItemText
                primary={route.label}
                primaryTypographyProps={{
                  sx: {
                    color:
                      route.label === drawerValue
                        ? Colors.pink
                        : Colors.whiteSmoke,
                  },
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

const List = styled(MuiList)({
  backgroundColor: Colors.gray,
});

export { MenuDrawer };
