import styled from 'styled-components';
import { HexColor } from 'theme/theme.types';

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
