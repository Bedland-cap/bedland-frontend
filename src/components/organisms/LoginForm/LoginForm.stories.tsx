import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'theme/ThemeContext';
import GlobalStyle from 'theme/globalStyles';
import LoginForm from './LoginForm';

const meta = {
  title: 'organisms/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        <BrowserRouter>{Story()}</BrowserRouter>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
