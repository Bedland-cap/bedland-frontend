import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import Sidebar from './Sidebar';

const meta = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider>
          <GlobalStyle />
          {Story()}
        </ThemeProvider>
      </BrowserRouter>
    ),
  ],
  parameters: {
    backgrounds: { default: 'light' },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SidebarForManager: Story = {};
