import { renderWithProviders } from 'utils/test.utils';
import { fireEvent, screen, cleanup } from '@testing-library/react';
import initialTheme from 'theme/initialTheme';
import SortButton from './SortButton';

describe('SortButton', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const snapshot = renderWithProviders(
      <SortButton text='Sort Buildings' sortOptions={['name', 'city', 'date added']} />,
      {},
    );
    expect(snapshot).toMatchSnapshot();
  });

  it('dropdown opens and closes when button is clicked', () => {
    renderWithProviders(
      <SortButton text='Sort Buildings' sortOptions={['name', 'city', 'date added']} />,
      {},
    );
    const sortButton = screen.getByRole('button', {
      name: /Sort Buildings/i,
    });
    fireEvent.click(sortButton);
    const dropdownOpen = screen.getByText(/date added/i);
    expect(dropdownOpen).toBeTruthy();
    fireEvent.click(sortButton);
    const dropdownClosed = screen.queryByText(/date added/i);
    expect(dropdownClosed).toBeFalsy();
  });

  it('dropdown closes when sorting option is clicked', () => {
    renderWithProviders(
      <SortButton text='Sort Buildings' sortOptions={['name', 'city', 'date added']} />,
      {},
    );
    const sortButton = screen.getByRole('button', {
      name: /Sort Buildings/i,
    });
    fireEvent.click(sortButton);
    const sortOption = screen.getByText(/date added/i);
    fireEvent.click(sortOption);
    const dropdownClosed = screen.queryByText(/date added/i);
    expect(dropdownClosed).toBeFalsy();
  });

  it('sorting option is active after selecting it and opening dropdown again', () => {
    renderWithProviders(
      <SortButton text='Sort Buildings' sortOptions={['name', 'city', 'date added']} />,
      {},
    );
    const sortButton = screen.getByRole('button', {
      name: /Sort Buildings/i,
    });
    fireEvent.click(sortButton);
    const sortOption = screen.getByText(/date added/i);
    fireEvent.click(sortOption);
    fireEvent.click(sortButton);
    const activeSortOption = screen.getByText(/date added/i).parentElement;
    expect(activeSortOption).toHaveStyle(`background: ${initialTheme.palette.blueDark}`);
  });

  it('dropdown closes when a click occurs anywhere on the site', () => {
    renderWithProviders(
      <>
        <SortButton text='Sort Buildings' sortOptions={['name', 'city', 'date added']} />
        <p data-testid='click-anywhere'>click anywhere</p>
      </>,
      {},
    );
    const sortButton = screen.getByRole('button', {
      name: /Sort Buildings/i,
    });
    const clickAnywhere = screen.getByTestId('click-anywhere');
    fireEvent.click(sortButton);
    fireEvent.click(clickAnywhere);
    const dropdownClosed = screen.queryByText(/date added/i);
    expect(dropdownClosed).toBeFalsy();
  });
});
