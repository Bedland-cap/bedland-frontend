import { PropsWithChildren, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Typography from 'components/atoms/Typography/Typography';
import { IconName } from 'components/atoms/Icon/icons.utils';
import styled, { CSSProperties } from 'styled-components';
import { ThemeContext } from 'theme/ThemeContext';
import Icon from 'components/atoms/Icon/Icon';
import { Palette } from 'theme/theme.types';

const StyledItemList = styled.li<Palette>`
  width: 200px;
  &:hover {
    background: ${({ palette }) => palette.sidebarTabs}10;
  }
`;

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  gap: 0.9rem;
  height: 2.625rem;
  justify-content: space-between;
  padding: 0.625rem 1.25rem;
`;

const ContentDiv = styled.div`
  align-items: center;
  display: flex;
  gap: 0.9rem;
  justify-content: flex-start;
`;

const Badge = styled.div<Palette>`
  align-items: center;
  background: ${({ palette }) => palette.badge};
  border-radius: 50%;
  display: flex;
  font-size: 11px;
  font-weight: 600;
  height: 1rem;
  justify-content: center;
  line-height: 1rem;
  width: 1rem;
`;

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
