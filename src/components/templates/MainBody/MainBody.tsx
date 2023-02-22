import { PropsWithChildren, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'theme/ThemeContext';
import { Palette } from 'theme/theme.types';

const Box = styled.div<Palette>`
  background: ${({ palette }) => palette.greyLight};
  display: flex;
  height: 90%;
`;

const MainBody = ({ children }: PropsWithChildren) => {
  const { palette } = useContext(ThemeContext);
  return <Box palette={palette}>{children}</Box>;
};

export default MainBody;
