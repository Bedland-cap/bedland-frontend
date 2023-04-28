/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable class-methods-use-this */
import { fireEvent, cleanup, renderHook, act } from '@testing-library/react';
import { renderWithProviders } from 'utils/test.utils';
import { mockBuildingDataList } from 'utils/mock/mockBuildingsList';
import mockFlatsList from 'utils/mock/mockFlatsList';
import { vi } from 'vitest';
import FilterDropDown from './FilterDropDown';
import { FilterCheckboxes, FilterDropDownProps } from './FilterDropDown.types';
import useFilterDropDown from './useFilterDropDown';
import { setMockBuildingCheckboxes } from './FilterDropDown.utils';

const getFilteredData = vi.fn();
let mockList: FilterCheckboxes = {
  residents: {},
  flats: [
    { name: '1 - 5', ifChecked: false, from: 1, to: 5 },
    { name: '6 - 10', ifChecked: false, from: 6, to: 10 },
    { name: '11 - 15', ifChecked: false, from: 11, to: 15 },
    { name: '16 - 20', ifChecked: false, from: 16, to: 20 },
  ],
};

describe('FilterDropDown component', () => {
  const props: FilterDropDownProps = {
    filterType: 'residents',
    data: mockBuildingDataList,
    getFilteredData,
  };

  const renderFilterDropDown = ({
    filterType,
    data,
  }: Omit<FilterDropDownProps, 'getFilteredData'>) =>
    renderWithProviders(
      <FilterDropDown data={data} filterType={filterType} getFilteredData={getFilteredData} />,
    );

  afterEach(cleanup);
  beforeAll(() => {
    global.ResizeObserver = class ResizeObserver {
      observe() {}

      unobserve() {}

      disconnect() {}
    };
  });
  it('renders the correct number of flats options', async () => {
    const filterType = 'flats';
    const { getByTestId } = renderFilterDropDown({ filterType, data: mockFlatsList });

    const filterDropdown = getByTestId('Floorform');

    expect(filterDropdown.children).toHaveLength(5);
  });
  it('renders the correct number of residents options', async () => {
    const filterType = 'residents';
    const { getByTestId } = renderFilterDropDown({ filterType, data: mockBuildingDataList });
    const filterDropdown = getByTestId('Buildingform');
    expect(filterDropdown.children).toHaveLength(6);
  });
  it('clears all filters when Clear all filters button is clicked', async () => {
    const filterType = 'residents';
    const { getByText } = renderFilterDropDown({ filterType, data: mockBuildingDataList });
    const clearButton = getByText('Clear all filters');

    fireEvent.click(clearButton);

    expect(getFilteredData).toHaveBeenCalledWith(mockBuildingDataList);
  });

  it('should return an object with register, handleBuildingFormOnChange, handleFlatsFormOnChange, handleOnSubmit, handleClearForm, ifBuildingDataCondition and filteredData properties', () => {
    const { result } = renderHook(() => useFilterDropDown(props));

    expect(result.current.register).toBeDefined();
    expect(result.current.handleBuildingFormOnChange).toBeDefined();
    expect(result.current.handleFlatsFormOnChange).toBeDefined();
    expect(result.current.handleOnSubmit).toBeDefined();
    expect(result.current.handleClearForm).toBeDefined();
    expect(result.current.handleSliderValues).toBeDefined();
    expect(result.current.handleSliderThumbFirstChange).toBeDefined();
    expect(result.current.handleSliderThumbSecondChange).toBeDefined();
    expect(result.current.sliderThumbFirst).toBe(0);
    expect(result.current.sliderThumbSecond).toBe(20);
    expect(result.current.ifBuildingDataCondition).toBeTruthy();
    expect(result.current.filteredData).toEqual([]);
  });

  describe('handleBuildingFormOnChange - data type BuildingData[]', () => {
    beforeEach(() => {
      mockList = {
        residents: {},
        flats: [
          { name: '1 - 5', ifChecked: false, from: 1, to: 5 },
          { name: '6 - 10', ifChecked: false, from: 6, to: 10 },
          { name: '11 - 15', ifChecked: false, from: 11, to: 15 },
          { name: '16 - 20', ifChecked: false, from: 16, to: 20 },
        ],
      };
      setMockBuildingCheckboxes(mockBuildingDataList, mockList);
    });

    it('should setFilteredData according to entered checkbox', () => {
      const { result } = renderHook(() => useFilterDropDown(props));
      const mockFormData = { target: { name: 'Miedziana Street 3', checked: true } };

      act(() => {
        result.current.handleBuildingFormOnChange(mockFormData, mockList);
      });
      expect(result.current.filteredData.length).toBe(2);
    });
    it('should setFilteredData according to entered checkbox + floors checkboxes', () => {
      const { result } = renderHook(() => useFilterDropDown(props));
      const mockFormData = { target: { name: 'Miedziana Street 3', checked: true } };
      mockList.flats[0].ifChecked = true;

      act(() => {
        result.current.handleBuildingFormOnChange(mockFormData, mockList);
      });

      expect(result.current.filteredData.length).toBe(1);
    });
    it('should setFilteredData according to selectAll checkbox ', () => {
      const { result } = renderHook(() => useFilterDropDown(props));
      const mockFormData = { target: { name: 'SelectAll', checked: true } };

      act(() => {
        result.current.handleBuildingFormOnChange(mockFormData, mockList);
      });

      expect(result.current.filteredData.length).toBe(mockBuildingDataList.length);
    });
    it('should setFilteredData according to selectAll checkbox + floors checkboxes', () => {
      const { result } = renderHook(() => useFilterDropDown(props));
      const mockFormData = { target: { name: 'SelectAll', checked: true } };
      mockList.flats[0].ifChecked = true;

      act(() => {
        result.current.handleBuildingFormOnChange(mockFormData, mockList);
      });

      expect(result.current.filteredData.length).toBe(1);
    });
  });
  describe('handleFlatsFormOnChange', () => {
    beforeEach(() => {
      mockList = {
        residents: {},
        flats: [
          { name: '1 - 5', ifChecked: false, from: 1, to: 5 },
          { name: '6 - 10', ifChecked: false, from: 6, to: 10 },
          { name: '11 - 15', ifChecked: false, from: 11, to: 15 },
          { name: '16 - 20', ifChecked: false, from: 16, to: 20 },
        ],
      };
      setMockBuildingCheckboxes(mockBuildingDataList, mockList);
    });
    it('should setFilteredData according to entered checkbox - data type Flat[]', () => {
      const { result } = renderHook(() =>
        useFilterDropDown({ ...props, filterType: 'flats', data: mockFlatsList }),
      );
      const mockFormData = { target: { name: '1 - 5', checked: true } };

      act(() => {
        result.current.handleFlatsFormOnChange(mockFormData, mockList);
      });

      expect(result.current.filteredData.length).toBe(2);
    });
    it('should setFilteredData according to entered checkbox + residents checkboxes - data type Flat[]', () => {
      const { result } = renderHook(() =>
        useFilterDropDown({ ...props, filterType: 'flats', data: mockFlatsList }),
      );
      const mockFormData = { target: { name: 'SelectAll', checked: true } };

      act(() => {
        result.current.handleFlatsFormOnChange(mockFormData, mockList);
      });

      expect(result.current.filteredData.length).toBe(mockFlatsList.length);
    });

    it('should setFilteredData according to entered checkbox - data type BuildingData[]', () => {
      const { result } = renderHook(() => useFilterDropDown(props));
      const mockFormData = { target: { name: '6 - 10', checked: true } };

      act(() => {
        result.current.handleFlatsFormOnChange(mockFormData, mockList);
      });
      expect(result.current.filteredData.length).toBe(3);
    });
    it('should setFilteredData according to entered checkbox + floors checkboxes - data type BuildingData[]', () => {
      const { result } = renderHook(() => useFilterDropDown(props));
      const mockFormData = { target: { name: '6 - 10', checked: true } };
      mockList.residents['Miedziana Street 3'] = true;

      act(() => {
        result.current.handleFlatsFormOnChange(mockFormData, mockList);
      });

      expect(result.current.filteredData.length).toBe(1);
    });
    it('should setFilteredData according to selectAll checkbox - data type BuildingData[] ', () => {
      const { result } = renderHook(() => useFilterDropDown(props));
      const mockFormData = { target: { name: 'SelectAll', checked: true } };

      act(() => {
        result.current.handleFlatsFormOnChange(mockFormData, mockList);
      });

      expect(result.current.filteredData.length).toBe(mockBuildingDataList.length);
    });
    it('should setFilteredData according to selectAll checkbox + floors checkboxes - data type BuildingData[]', () => {
      const { result } = renderHook(() => useFilterDropDown(props));
      const mockFormData = { target: { name: 'SelectAll', checked: true } };
      mockList.residents['Miedziana Street 3'] = true;

      act(() => {
        result.current.handleFlatsFormOnChange(mockFormData, mockList);
      });

      expect(result.current.filteredData.length).toBe(2);
    });
  });
});
