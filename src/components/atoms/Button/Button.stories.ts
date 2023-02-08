import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// docs: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Press me',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Press me',
  },
};

Secondary.parameters = {
  backgrounds: { default: 'light' },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Press me',
  },
};

Large.parameters = {
  backgrounds: { default: 'light' },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Press me',
  },
};

Small.parameters = {
  backgrounds: { default: 'light' },
};
