import Button from 'components/atoms/Button/Button';
import { useState } from 'react';
import { whichButton } from './FilterButton.utils';
import * as Styled from './FilterButton.styled';
import FilterDropDown from '../FilterDropDown/FilterDropDown';
import { FilterButtonProps } from './FilterButton.types';
import { FilterDropDownDataType } from '../FilterDropDown/FilterDropDown.types';

const FilterButton = ({ data, getFilteredData, filterType }: FilterButtonProps) => {
  const [ifActive, setIfActive] = useState<boolean>(false);
  const { buttonType, text } = whichButton(ifActive);
  const handleFilterButton = () => setIfActive(!ifActive);
  const getData = (dataFromFilterDropDown: FilterDropDownDataType) => {
    getFilteredData(dataFromFilterDropDown);
  };

  return (
    <Styled.FilterButtonWrapper>
      <Button wrapper>
        <Button
          variant={buttonType}
          color='white'
          hover='text'
          icon='filterButton'
          onClick={handleFilterButton}
        >
          {text}
        </Button>
      </Button>
      {ifActive ? (
        <FilterDropDown filterType={filterType} data={data} getFilteredData={getData} />
      ) : null}
    </Styled.FilterButtonWrapper>
  );
};

export default FilterButton;
