import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

// docs: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'molecules/Footer',
  component: Footer,
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { backgroundColor: '#3F4476' } };
