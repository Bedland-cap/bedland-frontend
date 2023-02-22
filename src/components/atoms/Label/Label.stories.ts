import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta = {
  title: 'atoms/Label',
  component: Label,
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'login',
    htmlFor: 'login',
    textColor: 'white',
    size: 'small',
  },
};
