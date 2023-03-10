import styled from 'styled-components';
import { HEADER_HEIGHT } from 'utils/constans';

export const DropdownBox = styled.div`
  display: block;
  height: 100%;
  position: relative;
`;

export const DropdownMenu = styled.div`
  background-color: white;
  border-radius: 0 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  position: absolute;
  right: 1.5rem;
  transition: height 2s, transform 2s;
  width: 12.5rem;
  zindex: 1;
`;

export const DropdownBreak = styled.hr`
  border-bottom: 1px solid #d9d9d9;
  margin-top: 0.5rem;
`;

export const UserInfoBox = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  height: ${HEADER_HEIGHT}px;
  margin-right: 2rem;
`;
