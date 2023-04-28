import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from 'utils/test.utils';
import { FlatsFilterCheckboxes } from 'components/molecules/FilterDropDown/FilterDropDown.types';
import FilterList, { FilterListProps } from './FilterList';

const mockRegister = jest.fn();
const mockHandleListOnChange = jest.fn();
describe('FilterList', () => {
  const filterList = ({ title, list, listType, register, handleListOnChange }: FilterListProps) =>
    renderWithProviders(
      <FilterList
        title={title}
        list={list}
        listType={listType}
        register={register}
        handleListOnChange={handleListOnChange}
      />,
      {},
    );

  afterEach(cleanup);

  it('should render correctly', () => {
    expect(
      filterList({
        title: 'Title',
        list: ['Red', 'Green', 'Blue'],
        listType: 'arrayOfStrings',
        register: mockRegister,
        handleListOnChange: mockHandleListOnChange,
      }),
    ).toMatchSnapshot();
  });
  it('should render a list of checkboxes with the given string array list', () => {
    const title = 'Colors';
    const list = ['Red', 'Green', 'Blue'];
    const listType = 'arrayOfStrings';

    filterList({
      title,
      list,
      listType,
      register: mockRegister,
      handleListOnChange: mockHandleListOnChange,
    });

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByTestId('SelectAll')).toBeInTheDocument();

    list.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('should render a list of checkboxes with the given object array list', () => {
    const title = 'Colors';
    const list = [
      { name: 'Red', ifChecked: false, from: 1, to: 5 },
      { name: 'Green', ifChecked: false, from: 1, to: 5 },
      { name: 'Blue', ifChecked: false, from: 1, to: 5 },
    ];
    const listType = 'arrayOfObjects';

    filterList({
      title,
      list: list as FlatsFilterCheckboxes,
      listType,
      register: mockRegister,
      handleListOnChange: mockHandleListOnChange,
    });

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByTestId('SelectAll')).toBeInTheDocument();

    list.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  it('should call handleListOnChange when a checkbox is clicked', () => {
    const title = 'Colors';
    const list = ['Red', 'Green', 'Blue'];
    const listType = 'arrayOfStrings';

    filterList({
      title,
      list,
      listType,
      register: mockRegister,
      handleListOnChange: mockHandleListOnChange,
    });

    userEvent.click(screen.getByTestId('Red'));

    expect(mockHandleListOnChange).toHaveBeenCalledTimes(1);
  });
});
