import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';

import BuildingTile from './BuildingTile';

const meta = {
  title: 'Basic Components/Molecules/BuildingTile',
  component: BuildingTile,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof BuildingTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    BuildingAddress: 'Berry Street 27',
    BuildingId: 4293,
    BuildingImg: 'assets/BuildingImg.png',
  },
};
