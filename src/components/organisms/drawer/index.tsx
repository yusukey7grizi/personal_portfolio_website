import React, { FC } from 'react';
import {
  Drawer,
  List as MuiList,
  ListItem,
  ListItemText,
  styled,
} from '@mui/material';
import { Colors } from 'components/constants';
import { useRouter } from 'next/router';

type Props = {
  isOpen: boolean;
  // eslint-disable-next-line unused-imports/no-unused-vars
  setIsOpen: (input: boolean) => void;
};

const MenuDrawer: FC<Props> = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const { asPath } = router;

  const routes = [
    { value: '/', label: 'HOME' },
    { value: '/about', label: 'ABOUT' },
    { value: '/education', label: 'EDUCATION' },
    { value: '/experiences', label: 'EXPERIENCES' },
    { value: '/project', label: 'PROJECTS' },
  ];

  return (
    <Drawer
      anchor='top'
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <List>
        {routes.map(({ value, label }) => {
          return (
            <ListItem button key={value}>
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  sx: {
                    color: asPath === value ? Colors.pink : Colors.white,
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
