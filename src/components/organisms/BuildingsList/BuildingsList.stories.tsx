import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import BuildingsList from './BuildingsList';

const meta = {
  title: 'Organisms/BuildingList',
  component: BuildingsList,
  parameters: {
    backgrounds: { default: 'light' },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof BuildingsList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
