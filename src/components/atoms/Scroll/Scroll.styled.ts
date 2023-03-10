import styled from 'styled-components';
import { PaletteType } from 'theme/theme.types';

export const ScrollBar = styled.div<{
  contentSize: number;
  palette: PaletteType;
}>`
  height: ${({ contentSize }) => contentSize}rem;
  overflow-y: scroll;

  scrollbar-width: 0.5rem;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ palette }) => palette.inputGrey};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    margin: 0.5rem;
    scrollbar-color: ${({ palette }) => palette.widgetBackground};
  }
`;

export default ScrollBar;
