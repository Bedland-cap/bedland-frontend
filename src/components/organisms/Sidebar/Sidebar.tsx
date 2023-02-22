import { IconName } from 'components/atoms/Icon/icons.utils';
import SidebarItem from 'components/molecules/SidebarItem/SidebarItem';
import { useContext } from 'react';
import styled from 'styled-components';
import { Palette } from 'theme/theme.types';
import { ThemeContext } from 'theme/ThemeContext';

const Box = styled.div<Palette>`
  background: ${({ palette }) => palette.background};
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const StyledList = styled.ul`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: 1.625rem 0;
`;

export const sidebarItems = [
  'dashboard',
  'buildings',
  'residents',
  'payments',
  'voting',
  'reports',
  'wall',
  'messages',
  'flats',
] as const;
export type SidebarItemLabel = (typeof sidebarItems)[number];
const itemsForManager: SidebarItemLabel[] = sidebarItems.filter((el) => el !== 'flats');
const itemsForResident: SidebarItemLabel[] = sidebarItems.filter(
  (el) => el !== 'residents' && 'buildings',
);

type ItemToIcon = {
  [key in SidebarItemLabel]: IconName;
};

export const variantToIcon: ItemToIcon = {
  dashboard: 'dashboard',
  buildings: 'building',
  residents: 'residents',
  payments: 'payments',
  voting: 'voting',
  reports: 'reports',
  wall: 'wall',
  messages: 'messages',
  flats: 'building',
} as const;

const variantToLink = {
  dashboard: '/',
  buildings: '/buildings',
  residents: '/residents',
  payments: '/payments',
  voting: '/voting',
  reports: '/reports',
  wall: '/wall',
  messages: '/messages',
  flats: '/flats',
} as const;

const variantToLabel = {
  dashboard: 'dashboard',
  buildings: 'buildings',
  residents: 'residents',
  payments: 'payments',
  voting: 'voting',
  reports: 'reports',
  wall: 'wall',
  messages: 'messages',
  flats: 'flats',
} as const;

const Sidebar = () => {
  const { palette } = useContext(ThemeContext);
  const isResident = false;
  const itemsList: SidebarItemLabel[] = isResident ? itemsForResident : itemsForManager;
  return (
    <Box palette={palette}>
      <StyledList>
        {itemsList.map((item) => (
          <SidebarItem
            key={`id-sidebarItem -${item}`}
            iconName={variantToIcon[item]}
            label={variantToLabel[item]}
            linkTo={variantToLink[item]}
          />
        ))}
      </StyledList>
    </Box>
  );
};

export default Sidebar;
