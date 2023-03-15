import { renderWithProviders } from 'utils/test.utils';
import BuildingsList from './BuildingsList';

describe('BuildingsList', () => {
  it('renders correctly', () => {
    const buildingsList = renderWithProviders(<BuildingsList />, {});
    expect(buildingsList).toMatchSnapshot();
  });
});
