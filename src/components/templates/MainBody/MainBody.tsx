import { PropsWithChildren, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'theme/ThemeContext';
import { Palette } from 'theme/theme.types';
import { useAppSelector } from 'store/hooks';
import { selectUserIsLoggedIn } from 'store/reducers/user_slice';
import { HEADER_HEIGHT, FOOTER_HEIGHT } from 'utils/constans';

const Box = styled.div<Palette & { isLoggedIn: boolean }>`
  background: ${({ palette }) => palette.greyLight};
  display: flex;
  min-height: calc(
    100vh -
      ${({ isLoggedIn }) =>
        isLoggedIn ? `${HEADER_HEIGHT}px` : `${HEADER_HEIGHT + FOOTER_HEIGHT}px`}
  );
`;

const MainBody = ({ children }: PropsWithChildren) => {
  const { palette } = useContext(ThemeContext);
  const isLoggedIn = useAppSelector(selectUserIsLoggedIn);
  return (
    <Box palette={palette} isLoggedIn={isLoggedIn}>
      {children}
    </Box>
  );
};

export default MainBody;
