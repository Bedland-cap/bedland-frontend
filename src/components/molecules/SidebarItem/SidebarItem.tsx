import { PropsWithChildren, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Typography from 'components/atoms/Typography/Typography';
import { IconName } from 'components/atoms/Icon/icons.utils';
import { CSSProperties } from 'styled-components';
import { ThemeContext } from 'theme/ThemeContext';
import Icon from 'components/atoms/Icon/Icon';
import { StyledItemList, StyledDiv, ContentDiv, Badge } from './SidebarItem.styled';

export type SidebarItemProps = {
  label: string;
  iconName: IconName;
  linkTo: string;
};

const SidebarItem = ({ label, iconName, linkTo }: PropsWithChildren<SidebarItemProps>) => {
  const { palette } = useContext(ThemeContext);
  const amount = 1;

  return (
    <StyledItemList palette={palette}>
      <NavLink to={linkTo} id={`sidebar-item-${label}`}>
        {({ isActive }) => (
          <StyledDiv
            style={
              {
                borderLeft: `4px solid ${isActive ? palette.primaryLight : 'transparent'}`,
              } as CSSProperties
            }
          >
            <ContentDiv>
              <Icon
                name={iconName}
                color='sidebarTabs'
                size={18}
                isActive={isActive}
                activeColor='primaryLight'
              />
              <Typography variant='sidebarItem' color={isActive ? 'primaryLight' : 'sidebarTabs'}>
                {label}
              </Typography>
            </ContentDiv>
            {label === 'voting' || label === 'messages' ? (
              <Badge palette={palette} style={{ color: '#fff' }}>
                {amount}
              </Badge>
            ) : null}
          </StyledDiv>
        )}
      </NavLink>
    </StyledItemList>
  );
};

export default SidebarItem;
