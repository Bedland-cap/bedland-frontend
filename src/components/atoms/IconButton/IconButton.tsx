import Icon from 'components/atoms/Icon/Icon';
import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { ColorNames } from 'theme/theme.types';
import { IconName } from '../Icon/icon.types';

const StyledButton = styled.button`
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: center;
`;

export type IconButtonProps = {
  icon: IconName;
  color: ColorNames;
  size: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const IconButton = ({ icon, color, size, onClick }: IconButtonProps) => (
  <StyledButton type='button' onClick={onClick}>
    <Icon name={icon} size={size} color={color} isActive={false} />
  </StyledButton>
);

export default IconButton;
