import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';

import Tile from './Tile';

const meta = {
  title: 'Molecules/Tile',
  component: Tile,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the tile',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle of the tile',
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
    subtitle: 'Cracow, Poland',
    title: 'Berry Street 27',
  },
};
