import styled from 'styled-components';
import { PaletteType, HexColor } from 'theme/theme.types';

export const TileWrapper = styled.div<{ shadowColor: HexColor }>`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: ${({ shadowColor }) => `0px 5px 8px ${shadowColor}20`};
  color: #4b4b4b;
  display: flex;
  flex-direction: column;
`;

export const BuildingImage = styled.img`
  height: 11rem;
  object-fit: cover;
  padding: 0.5rem;
  width: 100%;
`;

export const CardContent = styled.div`
  padding: 0.5rem 1.031rem 0.938rem;
`;

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
`;
export const Button = styled.button<{ palette: PaletteType }>`
  background-color: ${({ palette }) => palette.primaryDark};
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  line-height: 140%;
  padding: 0.563rem;
  width: 100%;

  :hover {
    background-color: ${({ palette }) => palette.primaryLight};
  }
`;
