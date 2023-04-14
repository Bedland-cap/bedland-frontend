import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import DisplayList from './DisplayList';

const meta = {
  title: 'Organisms/DisplayList',
  component: DisplayList,
  parameters: {
    backgrounds: { default: 'light' },
    layout: 'fullscreen',
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
} satisfies Meta<typeof DisplayList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
