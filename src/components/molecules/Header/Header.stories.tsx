import type { Meta, StoryObj } from '@storybook/react';
import ThemeProvider from 'theme/ThemeContext';
import Header from './Header';

const meta = {
  title: 'molecules/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [(Story) => <ThemeProvider>{Story()}</ThemeProvider>],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResidentLoggedOut: Story = {
  args: {
    variant: 'resident',
    logged: false,
  },
};

export const ResidentLoggedIn: Story = {
  args: {
    variant: 'resident',
    logged: true,
  },
};
export const ManagerLoggedOut: Story = {
  args: {
    variant: 'manager',
    logged: false,
  },
};

export const ManagerLoggedIn: Story = {
  args: {
    variant: 'manager',
    logged: true,
  },
};
