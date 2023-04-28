import { FC, useContext } from 'react';
import { ThemeContext } from 'theme/ThemeContext';
import Button from 'components/atoms/Button/Button';
import Typography from 'components/atoms/Typography/Typography';
import FilterList from 'components/atoms/FilterList/FilterList';
import * as Styled from './FilterDropDown.styled';
import { FILTER_CHECKBOXES } from './FilterDropDown.utils';
import { FilterDropDownProps } from './FilterDropDown.types';
import useFilterDropDown from './useFilterDropDown';

const FilterDropDown: FC<FilterDropDownProps> = ({ filterType, data, getFilteredData }) => {
  const { palette } = useContext(ThemeContext);
  const {
    register,
    handleBuildingFormOnChange,
    handleFlatsFormOnChange,
    handleOnSubmit,
    handleClearForm,
    handleSliderValues,
    handleSliderThumbFirstChange,
    handleSliderThumbSecondChange,
    sliderThumbFirst,
    sliderThumbSecond,
    ifBuildingDataCondition,
  } = useFilterDropDown({ data, filterType, getFilteredData });

  return (
    <Styled.FilterDropDownWrapper data-testid='filterDropdown'>
      <Styled.DropdownContainer>
        {ifBuildingDataCondition ? (
          <FilterList
            title='Building'
            list={Object.keys(FILTER_CHECKBOXES.residents)}
            listType='arrayOfStrings'
            register={register}
            handleListOnChange={(fromData) =>
              handleBuildingFormOnChange(fromData, FILTER_CHECKBOXES)
            }
          />
        ) : null}
        <FilterList
          title='Floor'
          list={FILTER_CHECKBOXES.flats}
          listType='arrayOfObjects'
          register={register}
          handleListOnChange={(formData) => handleFlatsFormOnChange(formData, FILTER_CHECKBOXES)}
        />
        <Styled.SliderInputsContainer>
          <Styled.InputContainer
            value={sliderThumbFirst}
            onChange={(event) => handleSliderThumbFirstChange(+event.target.value)}
            data-testid='sliderThumbFirstInput'
            maxLength={2}
            minLength={1}
          />
          <Styled.Text>to</Styled.Text>
          <Styled.InputContainer
            value={sliderThumbSecond}
            onChange={(event) => handleSliderThumbSecondChange(+event.target.value)}
            data-testid='sliderThumbSecondInput'
            maxLength={2}
            minLength={1}
          />
          <Styled.GoButton onClick={() => handleOnSubmit(FILTER_CHECKBOXES)}>
            <Typography variant='header5'>GO</Typography>
          </Styled.GoButton>
        </Styled.SliderInputsContainer>
        <Styled.SliderContainer>
          <Styled.StyledSlider
            className='horizontal-slider'
            thumbClassName='slider-thumb'
            trackClassName='slider-track'
            defaultValue={[sliderThumbFirst, sliderThumbSecond]}
            min={0}
            max={20}
            value={[sliderThumbFirst, sliderThumbSecond]}
            ariaLabel={['Lower thumb', 'Upper thumb']}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            renderThumb={(props) => <Styled.SliderThumb {...props} as={undefined} />}
            renderTrack={(props, state) => (
              <Styled.SliderTrack {...props} as={undefined} index={state.index} />
            )}
            pearling
            onChange={(value) => handleSliderValues(value as number[])}
          />
        </Styled.SliderContainer>
        <Button
          wrapper
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderTop: `2px solid ${palette.sidebarTabs}`,
            padding: '1.125rem',
          }}
        >
          <Button
            type='submit'
            variant='icon'
            icon='trashBin'
            onClick={() => handleClearForm(FILTER_CHECKBOXES)}
          >
            <Typography variant='header5'>Clear all filters</Typography>
          </Button>
        </Button>
      </Styled.DropdownContainer>
    </Styled.FilterDropDownWrapper>
  );
};
export default FilterDropDown;
