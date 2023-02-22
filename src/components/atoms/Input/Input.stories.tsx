import type { Meta, StoryObj } from '@storybook/react';
import loginRegexPattern from 'components/organisms/LoginForm/loginRegexPatterns';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import Input from './Input';

const meta = {
  title: 'Basic Components/Atoms/Input',
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
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    input: 'login',
    type: 'text',
    placeholder: 'Name',
    register: {} as UseFormRegister<FieldValues>,
    regexPattern: loginRegexPattern.login,
  },
};
