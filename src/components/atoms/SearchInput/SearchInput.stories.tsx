import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import SearchInput from './SearchInput';

const meta = {
  title: 'atoms/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'light' },
  },
  argTypes: {
    placeholder: { control: 'text', description: 'Placeholder text in the search input' },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search buildings...',
  },
};
