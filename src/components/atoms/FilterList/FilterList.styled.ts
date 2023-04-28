/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import initialTheme from 'theme/initialTheme';

const checkboxStyle = `  & > input[type='checkbox'] {
  appearance: none;
  background-color: ${initialTheme.palette.white};
  border: 1.39px solid ${initialTheme.palette.blueDark};
  border-radius: 3.33px;
  color: ${initialTheme.palette.sidebarTabs};
  display: grid;
  font: inherit;
  height: 0.875rem;
  margin: 0;
  place-content: center;
  width: 0.875rem;
}

& > input[type='checkbox']:checked {
  background-color: ${initialTheme.palette.blueDark};
  border: 1.39px solid ${initialTheme.palette.blueDark};
}

& > input[type='checkbox']:checked::before {
  transform: scale(1);
}
`;

export const FilterList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.375rem 1.0625rem 0 1.1875rem;
`;
export const ListTitle = styled.div`
  align-items: center;
  display: flex;
  height: 3.125rem;
`;

export const CheckboxForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.4375rem;
  padding: 0 0 0 0.5625rem;
`;
export const CheckboxWrapper = styled.div`
  display: flex;
  gap: 0.6875rem;
`;
export const CheckboxContainer = styled.div`
  display: flex;
  padding: 3px;
  ${checkboxStyle}

  & > input[type='checkbox']::before {
    background-color: ${initialTheme.palette.white};
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    content: '';
    height: 10px;
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    width: 10px;
  }
`;
export const CheckboxContainerSelectAll = styled.div`
  display: flex;
  padding: 3px;
  ${checkboxStyle}
  & > input[type='checkbox']::before {
    background-color: ${initialTheme.palette.white};
    clip-path: polygon(15% 60%, 15% 40%, 85% 40%, 85% 60%);
    content: '';
    height: 10px;
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    width: 10px;
  }
`;
export const Checkbox = styled.input``;
