import Icon from 'components/atoms/Icon/Icon';
import { MouseEventHandler } from 'react';
import { ColorNames } from 'theme/theme.types';
import * as Styled from './iconButton.styled';
import { IconName } from '../Icon/icon.types';

export type IconButtonProps = {
  icon: IconName;
  color: ColorNames;
  size: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const IconButton = ({ icon, color, size, onClick }: IconButtonProps) => (
  <Styled.StyledButton type='button' onClick={onClick}>
    <Icon name={icon} size={size} color={color} isActive={false} />
  </Styled.StyledButton>
);

export default IconButton;
