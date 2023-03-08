import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import BuildingsPage from './BuildingsPage';

const meta = {
  title: 'pages/BuildingsPage',
  component: BuildingsPage,
  tags: ['autodocs'],
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
} satisfies Meta<typeof BuildingsPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
