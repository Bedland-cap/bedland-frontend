import { renderWithProviders } from 'utils/test.utils';
import BuildingImage from 'assets/img/BuildingImg.png';
import BuildingTile from './BuildingTile';

describe('BuildingTile', () => {
  it('renders correctly', () => {
    const page = renderWithProviders(
      <BuildingTile
        buildingId='4293'
        buildingAddress='Berry Street 27'
        buildingImg={BuildingImage}
      />,
      {},
    );
    expect(page).toMatchSnapshot();
  });
});
