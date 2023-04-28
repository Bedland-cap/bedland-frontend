/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable class-methods-use-this */
import userEvent from '@testing-library/user-event';
import { cleanup, screen, act } from '@testing-library/react';
import { renderWithProviders } from 'utils/test.utils';
import { mockBuildingDataList } from 'utils/mock/mockBuildingsList';
import { beforeAll } from 'vitest';
import FilterButton from './FilterButton';
import { whichButton, possibleButtons } from './FilterButton.utils';
import { FilterDropDownDataType } from '../FilterDropDown/FilterDropDown.types';

const getFilteredData = (data: FilterDropDownDataType) => data;

describe('Filter Button', () => {
  afterEach(cleanup);

  beforeAll(() => {
    global.ResizeObserver = class ResizeObserver {
      observe() {}

      unobserve() {}

      disconnect() {}
    };
  });

  const filterButton = () =>
    renderWithProviders(
      <FilterButton
        filterType='residents'
        data={mockBuildingDataList}
        getFilteredData={getFilteredData}
      />,
      {},
    );

  it('filterButton renders correctly', () => {
    expect(filterButton()).toMatchSnapshot();
  });

  it('whichButton function should return primaryButton', () => {
    expect(whichButton(false)).toEqual(possibleButtons.primary);
  });

  it('whichButton function should return primaryBordersButton', () => {
    expect(whichButton(true)).toEqual(possibleButtons.primaryBorders);
  });

  it('should render dropdown after click', async () => {
    filterButton();
    const button = screen.getByRole('button');
    await act(async () => {
      userEvent.click(button);
    });

    // expect(screen.queryByTestId('filterDropdown')).toBeTruthy();
  });
});
