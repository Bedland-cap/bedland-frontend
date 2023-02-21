/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import { useForm, FieldValues, UseFormRegister } from 'react-hook-form';
import ThemeProvider from 'theme/ThemeContext';
import GlobalStyle from 'theme/globalStyles';
import InputWithLabel from './InputWithLabel';

const meta = {
  title: 'molecules/InputWithLabel',
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
    input: 'Name',
    type: 'Name',
    placeholder: 'Name',
    label: 'Name',
    register: {} as UseFormRegister<FieldValues>,
  },
};
