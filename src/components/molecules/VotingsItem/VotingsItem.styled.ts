import styled from 'styled-components';
import { PaletteType } from 'theme/theme.types';

export const VotingsItemContainer = styled.div<{ palette: PaletteType }>`
  align-items: center;
  border-bottom: 1px solid ${({ palette }) => palette.sidebarTabs};
  display: flex;
  margin-right: 1.1rem;
  padding: 2rem 1.939rem 2rem 2.313rem;
  :last-child {
    margin-bottom: 0.938rem;
  }
`;

export const IconWrapper = styled.div`
  transform: rotate(90deg);
`;

export default VotingsItemContainer;
