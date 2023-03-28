import IconButton from 'components/atoms/IconButton/IconButton';
import ProfileImage from 'components/atoms/ProfileImage/ProfileImage';
import Typography from 'components/atoms/Typography/Typography';
import { useContext } from 'react';
import { ThemeContext } from 'theme/ThemeContext';
import * as Styled from './MessageItem.styled';

type MessageItemProps = {
  name: string;
  image: string;
};

const MessageItem = ({ name, image }: MessageItemProps) => {
  const { palette } = useContext(ThemeContext);

  return (
    <Styled.HoverContainer palette={palette}>
      <Styled.MessageContainer palette={palette}>
        <ProfileImage src={image} size={1.5} />
        <Styled.NameWrapper>
          <Typography variant='header4' color='blueDark'>
            {name}
          </Typography>
        </Styled.NameWrapper>
        <IconButton icon='envelope' size={20} color='blueDark' onClick={() => null} />
      </Styled.MessageContainer>
    </Styled.HoverContainer>
  );
};

export default MessageItem;
