import type { Meta, StoryObj } from '@storybook/react';
import DefaultImage from 'assets/Loginlogo.svg';
import Image from './Image';

const meta = {
  title: 'atoms/Image',
  component: Image,
  tags: ['autodocs'],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: DefaultImage,
    alt: '',
  },
};
