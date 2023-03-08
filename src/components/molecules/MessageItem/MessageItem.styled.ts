import styled from 'styled-components';
import { PaletteType } from 'theme/theme.types';

export const MessageItemContainer = styled.div<{ palette: PaletteType; active: boolean }>`
  align-items: center;
  border-bottom: 1px solid ${({ palette }) => palette.sidebarTabs};
  display: flex;
  padding: 0.875rem 1.938rem 0.875rem 1.438rem;

  :hover {
    background: ${({ active, palette }) =>
      active ? `${palette.primaryLight}10` : `${palette.sidebarTabs}10`};
  }
`;

export default MessageItemContainer;
