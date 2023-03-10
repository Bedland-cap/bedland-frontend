import { ThemeContext } from 'theme/ThemeContext';
import { useContext, useState } from 'react';
import Typography from 'components/atoms/Typography/Typography';
import Icon from 'components/atoms/Icon/Icon';
import { IconName } from 'components/atoms/Icon/icon.types';
import * as Styled from './NotificationItem.styled';

export type NotificationItemProps = {
  icon: IconName;
  date: string;
  text: string;
};

const NotificationItem = ({ icon, date, text }: NotificationItemProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
  };
  const { palette } = useContext(ThemeContext);
  return (
    <Styled.NotificationItemContainer palette={palette}>
      <Icon name={icon} size={18} color='inputGrey' isActive={false} />

      <Typography variant='notificationItem' style={{ fontWeight: isClicked ? '400' : '600' }}>
        {date}
      </Typography>
      <Typography variant='notificationItem' style={{ fontWeight: isClicked ? '400' : '600' }}>
        <Styled.NotificationItemText>{text}</Styled.NotificationItemText>
      </Typography>

      <button
        type='submit'
        style={{ width: '4.69rem', height: '2rem', border: '1.75px solid #F56513' }}
        onClick={handleClick}
      >
        Placeholder
      </button>
    </Styled.NotificationItemContainer>
  );
};

export default NotificationItem;
