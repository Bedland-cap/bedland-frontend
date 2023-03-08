import styled from 'styled-components';
import { HexColor, PaletteType } from 'theme/theme.types';

export const InputContainer = styled.div<{ outlineColor: HexColor }>`
  align-items: center;
  background: #fff;
  border-radius: 8px;
  display: flex;
  height: 2.5rem;
  padding: 0.5rem;
  width: 17.5rem;

  :focus-within {
    outline: ${({ outlineColor }) => `1px solid ${outlineColor}`};
  }
`;

export const Input = styled.input<{ placeholder: string; palette: PaletteType }>`
  background-color: transparent;
  color: ${({ palette }) => palette.inputGrey};
  height: 1.75rem;
  width: 15rem;

  ::placeholder {
    color: ${({ palette }) => palette.greyDark};
  }
`;

export const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-left: 0.583rem;
  margin-right: 0.771rem;
`;
