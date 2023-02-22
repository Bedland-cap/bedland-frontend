import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'theme/ThemeContext';
import GlobalStyle from 'theme/globalStyles';

import LoginPage from './LoginPage';

const meta = {
  title: 'pages/LoginPage',
  component: LoginPage,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        <BrowserRouter>{Story()}</BrowserRouter>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
