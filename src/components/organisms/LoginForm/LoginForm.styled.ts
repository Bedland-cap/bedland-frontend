import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PaletteType } from 'utils/types/theme.types';

const LoginFormContainer = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 25.625rem;
  padding: 0rem 4rem 1.5rem 4rem;
`;

export const ResetPasswordLink = styled(Link)<{ palette: PaletteType }>`
  color: ${({ palette }) => (palette as PaletteType).secondaryDark};
  display: flex;
  justify-content: center;
`;

export default LoginFormContainer;
