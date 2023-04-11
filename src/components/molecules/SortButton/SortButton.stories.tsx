import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import SortButton from './SortButton';

const meta = {
  title: 'Molecules/SortButton',
  component: SortButton,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'dark' },
  },
  argTypes: {
    text: {
      description: 'Text displayed in the button',
    },
    sortOptions: {
      description: 'Options by which the data can be sorted',
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof SortButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SortBuildings: Story = {
  args: {
    text: 'Sort Buildings',
    sortOptions: ['name', 'city', 'date added'],
  },
};
