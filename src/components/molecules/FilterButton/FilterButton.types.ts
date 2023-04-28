import { ButtonVariantProps, HoverVariant } from 'components/atoms/Button/Button.types';
import { FilterTypes, FilterDropDownDataType } from '../FilterDropDown/FilterDropDown.types';

export type FilterButtonProps = {
  filterType: FilterTypes;
  data: FilterDropDownDataType;
  getFilteredData: (arg: FilterDropDownDataType) => void;
};

type PossibleButtons = {
  primaryBorders: {
    buttonType: ButtonVariantProps;
    text: string;
    hover: HoverVariant;
  };
  primary: {
    buttonType: ButtonVariantProps;
    text: string;
    hover: HoverVariant;
  };
};

export default PossibleButtons;
