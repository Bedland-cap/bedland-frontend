import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';

import BuildingTile from './BuildingTile';

const meta = {
  title: 'Molecules/BuildingTile',
  component: BuildingTile,
  tags: ['autodocs'],
  argTypes: {
    buildingId: {
      control: 'text',
      description: 'Id of the building',
    },
    buildingAddress: {
      control: 'text',
      description: 'Address of the building',
    },
    buildingImg: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
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
    buildingAddress: 'Berry Street 27',
    buildingId: '4293',
  },
};
