import React from 'react';
import renderer from 'react-test-renderer';
import ThemeProvider from 'theme/ThemeContext';

import BuildingTile from './BuildingTile';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <BuildingTile
          BuildingId={4293}
          BuildingImg='/assets/BuildingImg.png'
          BuildingAddress='Berry Street 27'
        />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
