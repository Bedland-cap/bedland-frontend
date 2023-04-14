import { cleanup } from '@testing-library/react';
import { renderWithProviders } from 'utils/test.utils';
import BuildingImage from 'assets/img/BuildingImg.png';
import { loggedInManagerUser, loggedInResidentUser } from 'utils/mockUser';
import Tile from './Tile';

describe('Tile of display list', () => {
  afterEach(cleanup);
  it('renders correctly for resident', () => {
    const page = renderWithProviders(
      <Tile id='4293' address='Berry Street 27' img={BuildingImage} />,
      {
        preloadedState: {
          user: loggedInResidentUser,
        },
      },
    );
    expect(page).toMatchSnapshot();
  });

  it('renders correctly for manager', () => {
    const page = renderWithProviders(
      <Tile id='4293' address='Berry Street 27' img={BuildingImage} />,
      {
        preloadedState: {
          user: loggedInManagerUser,
        },
      },
    );
    expect(page).toMatchSnapshot();
  });
});
