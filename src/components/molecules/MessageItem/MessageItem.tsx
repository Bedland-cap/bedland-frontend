import IconButton from 'components/atoms/IconButton/IconButton';
import ProfileImage from 'components/atoms/ProfileImage/ProfileImage';
import Typography from 'components/atoms/Typography/Typography';
import { useContext } from 'react';
import { ThemeContext } from 'theme/ThemeContext';
import * as Styled from './MessageItem.styled';

type MessageItemProps = {
  name: string;
  image: string;
  active: boolean;
};

const MessageItem = ({ name, image, active }: MessageItemProps) => {
  const { palette } = useContext(ThemeContext);

  return (
    <Styled.MessageItemContainer palette={palette} active={active}>
      <ProfileImage src={image} size={1.5} />
      <Typography
        variant='messageItem'
        color={active ? 'primaryDark' : 'inputGrey'}
        style={{ flex: 1 }}
      >
        {name}
      </Typography>
      <IconButton
        icon='envelope'
        size={20}
        color={active ? 'primaryDark' : 'inputGrey'}
        onClick={() => null}
      />
    </Styled.MessageItemContainer>
  );
};

export default MessageItem;
