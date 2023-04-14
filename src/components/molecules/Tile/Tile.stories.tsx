import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';

import Tile from './Tile';

const meta = {
  title: 'Molecules/Tile',
  component: Tile,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Id of the building',
    },
    address: {
      control: 'text',
      description: 'Address of the building',
    },
    img: {
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
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    address: 'Berry Street 27',
    id: '4293',
  },
};
