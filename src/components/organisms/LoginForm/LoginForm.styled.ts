import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PaletteType } from 'theme/theme.types';

const LoginFormContainer = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 25.625rem;
`;

export const ResetPasswordLink = styled(Link)<{ palette: PaletteType }>`
  color: ${({ palette }) => (palette as PaletteType).secondaryDark};
  display: flex;
  justify-content: center;
`;

export default LoginFormContainer;
