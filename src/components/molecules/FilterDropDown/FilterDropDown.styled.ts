import ReactSlider from 'react-slider';
import styled from 'styled-components';
import initialTheme from 'theme/initialTheme';

export const FilterDropDownWrapper = styled.div`
  position: relative;
`;
export const DropdownContainer = styled.div`
  background-color: ${initialTheme.palette.white};
  border-radius: 8px;
  color: ${initialTheme.palette.inputGrey};
  margin-top: 0.5rem;
  position: absolute;
  width: 15.3125rem;
`;

export const SliderInputsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 1.8125rem;
`;
export const SliderContainer = styled.div`
  height: 2rem;
  margin: 1.0625rem 0 1.75rem 0;
  padding: 0 2rem 0 1.75rem;
`;
export const StyledSlider = styled(ReactSlider)`
  align-items: center;
  display: flex;
  height: 25px;
  width: 100%;
`;
export const SliderThumb = styled.div`
  background-color: ${initialTheme.palette.blueDark};
  border-radius: 50%;
  color: #fff;
  height: 14px;
  line-height: 14px;
  text-align: center;
  width: 14px;
`;
export const SliderTrack = styled.div<{ index: number }>`
  background: ${({ index }) =>
    // eslint-disable-next-line no-nested-ternary
    index === 2
      ? initialTheme.palette.sidebarTabs
      : index === 1
      ? initialTheme.palette.blueDark
      : initialTheme.palette.sidebarTabs};
  height: 2px;
`;

export const InputContainer = styled.input`
  border: 1px solid ${initialTheme.palette.greyDark};
  border-radius: 8px;
  height: 2rem;
  text-align: center;
  width: 3.25rem;
`;
export const Text = styled.p`
  margin: 0 0.6125rem 0 0.5625rem;
`;
export const GoButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 1px solid ${initialTheme.palette.blueDark};
  border-radius: 8px;
  color: ${initialTheme.palette.blueDark};
  display: flex;
  height: 2rem;
  justify-content: center;
  margin-left: 0.5rem;
  width: 2.5625rem;
`;
