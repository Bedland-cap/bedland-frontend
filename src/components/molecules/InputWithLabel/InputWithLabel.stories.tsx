import type { Meta, StoryObj } from '@storybook/react';
import { useForm, FieldValues, UseFormRegister } from 'react-hook-form';
import ThemeProvider from 'theme/ThemeContext';
import GlobalStyle from 'theme/globalStyles';
import loginRegexPattern from 'components/organisms/LoginForm/loginRegexPatterns';
import InputWithLabel from './InputWithLabel';

const meta = {
  title: 'Basic Components/Molecules/InputWithLabel',
  component: InputWithLabel,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof InputWithLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const { register } = useForm();
    return (
      <form>
        <InputWithLabel {...args} register={register} />
      </form>
    );
  },
  args: {
    input: 'login',
    type: 'text',
    placeholder: 'Your login',
    label: 'Login',
    register: {} as UseFormRegister<FieldValues>,
    regexPattern: loginRegexPattern.login,
  },
};
