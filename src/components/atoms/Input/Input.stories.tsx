import type { Meta, StoryObj } from '@storybook/react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import Input from './Input';
import { IInput } from './Input.types';

const meta = {
  title: 'atoms/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta | IInput>;

export const Default: Story = {
  args: {
    input: 'Name',
    type: 'Name',
    placeholder: 'Name',
    register: {} as UseFormRegister<FieldValues>,
  },
};
