import styled from 'styled-components';

export const MainBodyBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  max-width: 100vw;
`;

export const ChildBox = styled.div<{ backgroundColor: string }>`
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
