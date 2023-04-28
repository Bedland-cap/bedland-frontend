import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import type { Meta, StoryObj } from '@storybook/react';
import ResidentsPage from './ResidentsPage';

const meta = {
  title: 'Pages/ResidentsPage',
  component: ResidentsPage,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'light' },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        <BrowserRouter>
          <div style={{ zoom: 0.9 }}>{Story()}</div>
        </BrowserRouter>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ResidentsPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
