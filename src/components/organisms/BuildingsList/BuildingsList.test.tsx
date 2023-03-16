import { cleanup } from '@testing-library/react';
import { renderWithProviders } from 'utils/test.utils';
import BuildingsList from './BuildingsList';

describe('BuildingsList', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const buildingsList = renderWithProviders(<BuildingsList />, {});
    expect(buildingsList).toMatchSnapshot();
  });
});
