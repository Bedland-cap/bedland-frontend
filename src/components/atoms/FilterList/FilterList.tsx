import type { FieldValues, UseFormRegister } from 'react-hook-form';
import { FlatsFilterCheckboxes } from 'components/molecules/FilterDropDown/FilterDropDown.types';
import Typography from '../Typography/Typography';
import * as Styled from './FilterList.styled';

const IsArrayOfStringsGuard = (list: FlatsFilterCheckboxes | string[]): list is string[] =>
  typeof list[0] === 'string';

export type FilterListProps = {
  title: string;
  list: FlatsFilterCheckboxes | string[];
  listType: 'arrayOfStrings' | 'arrayOfObjects';
  handleListOnChange: (formData: FieldValues) => void | -1;
  register: UseFormRegister<FieldValues>;
};
const FilterList = ({ title, list, listType, handleListOnChange, register }: FilterListProps) => (
  <Styled.FilterList>
    <Styled.ListTitle>
      <Typography variant='header5'>{title}</Typography>
    </Styled.ListTitle>
    <Styled.CheckboxForm data-testid={`${title}form`} onChange={handleListOnChange}>
      <Styled.CheckboxWrapper>
        <Styled.CheckboxContainerSelectAll>
          <Styled.Checkbox type='checkbox' {...register('SelectAll', {})} />
        </Styled.CheckboxContainerSelectAll>
        <Typography variant='dataInputsAndTooltips'>Select All</Typography>
      </Styled.CheckboxWrapper>
      {listType === 'arrayOfObjects' && !IsArrayOfStringsGuard(list)
        ? list.map(({ name }) => (
            <Styled.CheckboxWrapper key={name}>
              <Styled.CheckboxContainer>
                <Styled.Checkbox id={name} type='checkbox' {...register(name, {})} />
              </Styled.CheckboxContainer>
              <Typography variant='dataInputsAndTooltips'>{name}</Typography>
            </Styled.CheckboxWrapper>
          ))
        : (list as string[]).map((name) => (
            <Styled.CheckboxWrapper key={name}>
              <Styled.CheckboxContainer>
                <Styled.Checkbox id={name} type='checkbox' {...register(name, {})} />
              </Styled.CheckboxContainer>
              <Typography variant='dataInputsAndTooltips'>{name}</Typography>
            </Styled.CheckboxWrapper>
          ))}
    </Styled.CheckboxForm>
  </Styled.FilterList>
);
export default FilterList;
