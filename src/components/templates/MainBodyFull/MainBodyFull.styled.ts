import { HexColor } from 'theme/theme.types';
import styled from 'styled-components';

export const MainBodyFullLayout = styled.div<{ backgroundColor: HexColor }>`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: center;
  background: ${({ backgroundColor }) => backgroundColor}};
  width: 100%;
`;
export default MainBodyFullLayout;
