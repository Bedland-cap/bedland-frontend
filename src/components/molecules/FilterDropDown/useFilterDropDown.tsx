import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import {
  FilterDropDownDataType,
  IsBuildingsFilteringGuard,
  IsFlatsFilteringGuard,
  FilterDropDownProps,
  FilterCheckboxes,
} from './FilterDropDown.types';
import {
  FILTER_CHECKBOXES,
  filteringVariants,
  resetCheckboxes,
  setBuildingCheckboxes,
} from './FilterDropDown.utils';

type UseFilterDropDownProps = FilterDropDownProps;

const useFilterDropDown = ({ filterType, data, getFilteredData }: UseFilterDropDownProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { register, resetField, setValue } = useForm();
  const [filteredData, setFilteredData] = useState<FilterDropDownDataType>([]);
  const [sliderThumbFirst, setSliderThumbFirst] = useState<number>(0);
  const [sliderThumbSecond, setSliderThumbSecond] = useState<number>(20);

  const ifAnyResidentCheckboxChecked = (list: FilterCheckboxes) =>
    Object.keys(list.residents).find((resident) => list.residents[resident] === true);
  const ifAnyFlatCheckboxChecked = (list: FilterCheckboxes) =>
    list.flats.find((flat) => flat.ifChecked === true);

  const ifBuildingDataCondition =
    IsBuildingsFilteringGuard(data) && filterType === filteringVariants.residents;
  const ifFlatsDataCondition =
    IsFlatsFilteringGuard(data) && filterType === filteringVariants.flats;

  if (ifBuildingDataCondition && Object.keys(FILTER_CHECKBOXES.residents).length === 0)
    setBuildingCheckboxes(data);

  const handleClearForm = (list: FilterCheckboxes) => {
    resetCheckboxes(list, resetField);
    setSliderThumbFirst(0);
    setSliderThumbSecond(20);
    setFilteredData(data);
  };
  const handleOnSubmit = (list: FilterCheckboxes) => {
    if (ifBuildingDataCondition) {
      const sliderFilteredArray = data.filter(
        (resident) =>
          resident.flatFloor >= sliderThumbFirst && resident.flatFloor <= sliderThumbSecond,
      );
      setFilteredData(sliderFilteredArray || []);
    } else if (ifFlatsDataCondition) {
      const sliderFilteredArray = data.filter(
        (apartment) => apartment.floor >= sliderThumbFirst && apartment.floor <= sliderThumbSecond,
      );
      setFilteredData(sliderFilteredArray || []);
    }

    resetCheckboxes(list, resetField);
  };

  const handleBuildingFormOnChange = (formData: FieldValues, list: FilterCheckboxes) => {
    const { name, checked } = formData.target;

    if (name === 'SelectAll') {
      if (checked === true)
        Object.keys(list.residents).forEach((buildingName) => {
          // eslint-disable-next-line no-param-reassign
          list.residents[buildingName] = true;
          setValue(buildingName, true);
        });
    } else {
      // eslint-disable-next-line no-param-reassign
      list.residents[name] = checked;
    }

    if (ifBuildingDataCondition) {
      const buildingsFilteredArray = data.filter(
        (resident) => list.residents[resident.buildingName] !== false,
      );
      if (ifAnyFlatCheckboxChecked(list)) {
        const floorsFilteredArray = buildingsFilteredArray.filter((resident) => {
          const temp = list.flats
            .map((flat) => {
              const { ifChecked, from, to } = flat;
              if (ifChecked) {
                return resident.flatFloor >= from && resident.flatFloor <= to ? resident : null;
              }
              return null;
            })
            .filter((flat) => flat !== null);

          return temp.length > 0;
        });
        setFilteredData(floorsFilteredArray);
      } else setFilteredData(buildingsFilteredArray);
    }
  };
  const handleFlatsFormOnChange = (formData: FieldValues, list: FilterCheckboxes) => {
    const { name, checked } = formData.target;
    if (name === 'SelectAll') {
      if (checked === true)
        list.flats.forEach((flatCheckbox, index, thisArray) => {
          // eslint-disable-next-line no-param-reassign
          thisArray[index].ifChecked = true;
          setValue(flatCheckbox.name, true);
        });
    } else {
      list.flats.forEach((flatCheckbox, index, thisArray) => {
        // eslint-disable-next-line no-param-reassign
        if (flatCheckbox.name === name) thisArray[index].ifChecked = checked;
      });
    }
    if (ifFlatsDataCondition) {
      const floorsFilteredArray = data.filter((apartment) => {
        const temp = list.flats
          .map((flat) => {
            const { ifChecked, from, to } = flat;
            if (ifChecked) {
              return apartment.floor >= from && apartment.floor <= to ? apartment : null;
            }
            return null;
          })
          .filter((flat) => flat !== null);

        return temp.length > 0;
      });

      setFilteredData(floorsFilteredArray);
    } else if (ifBuildingDataCondition) {
      let buildingsFilteredArray = data;
      if (ifAnyResidentCheckboxChecked(list)) {
        buildingsFilteredArray = data.filter(
          (resident) => list.residents[resident.buildingName] !== false,
        );
      }

      const floorsFilteredArray = buildingsFilteredArray.filter((resident) => {
        const temp = list.flats
          .map((flat) => {
            const { ifChecked, from, to } = flat;
            if (ifChecked) {
              return resident.flatFloor >= from && resident.flatFloor <= to ? resident : null;
            }
            return null;
          })
          .filter((flat) => flat !== null);
        return temp.length > 0;
      });
      setFilteredData(floorsFilteredArray);
    }
  };

  const handleSliderValues = (value: number[]) => {
    setSliderThumbSecond(value[1]);
    setSliderThumbFirst(value[0]);
  };
  const handleSliderThumbFirstChange = (value: number) => {
    if (value >= 0) {
      if (value > sliderThumbSecond) setSliderThumbFirst(sliderThumbSecond);
      else setSliderThumbFirst(value);
    } else setSliderThumbFirst(0);
  };
  const handleSliderThumbSecondChange = (value: number) => {
    if (value <= 20) {
      if (value < sliderThumbFirst) setSliderThumbSecond(sliderThumbFirst);
      else setSliderThumbSecond(value);
    } else setSliderThumbSecond(20);
  };
  useEffect(() => {
    getFilteredData(filteredData.length > 0 ? filteredData : data);
  }, [filteredData]);

  return {
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
    filteredData,
  };
};

export default useFilterDropDown;
