import { Meta, StoryObj } from '@storybook/react';
import ThemeProvider from 'theme/ThemeContext';
import GlobalStyle from 'theme/globalStyles';
import { colorNames } from 'theme/theme.types';
import IconButton from './IconButton';
import { iconsNames } from '../Icon/icon.types';

const meta = {
  title: 'Molecules/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: {
    icon: 'arrowRight',
    color: 'default',
    size: 40,
  },
  argTypes: {
    icon: {
      options: iconsNames,
      description: 'Icon name',
    },
    size: {
      description: 'Icon size',
      defaultValue: 16,
      table: {
        defaultValue: { summary: '16' },
      },
      control: { type: 'range', min: 16, max: 68, step: 2 },
    },
    color: {
      description: 'Color of the icon',
      options: colorNames,
      defaultValue: 'default',
      control: 'select',
      table: {
        type: {
          summary: colorNames.toString().replaceAll(',', ' | '),
        },
        defaultValue: { summary: 'default' },
      },
    },
    onClick: {
      description: 'Function called on click',
      action: 'clicked',
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
  parameters: {
    backgrounds: { default: 'light' },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ArrowRightIconButton: Story = {
  args: {
    icon: 'arrowRight',
    color: 'primaryDark',
    onClick: () => null,
  },
};
