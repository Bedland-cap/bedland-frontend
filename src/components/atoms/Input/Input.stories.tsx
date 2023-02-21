import type { Meta, StoryObj } from '@storybook/react';
import { useForm, FieldValues, UseFormRegister } from 'react-hook-form';
import GlobalStyle from 'theme/globalStyles';
import ThemeProvider from 'theme/ThemeContext';
import Input, { IInput } from './Input';

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
  render: (args) => {
    const { register } = useForm();
    return (
      <form>
        <Input {...args} register={register} />
      </form>
    );
  },
  args: {
    input: 'Name',
    type: 'Name',
    placeholder: 'Name',
    register: {} as UseFormRegister<FieldValues>,
  },
};
