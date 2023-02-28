import { Meta, StoryObj } from '@storybook/react';
import ThemeProvider from 'theme/ThemeContext';
import GlobalStyle from 'theme/globalStyles';
import { colorNames } from 'theme/theme.types';
import Icon from './Icon';
import { iconsNames } from './icons.utils';

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    activeColor: 'primaryLight',
    isActive: false,
    color: 'default',
    size: 40,
  },
  argTypes: {
    name: {
      options: iconsNames,
      description: 'Icon name',
      control: { type: 'select' },
      table: {
        type: {
          summary: `Variants: ${iconsNames.toString().replaceAll(',', ' | ')}`,
        },
      },
    },
    size: {
      description: 'Icon size',
      defaultValue: 16,
      table: {
        defaultValue: { summary: '16' },
      },
      control: { type: 'range', min: 16, max: 68, step: 2 },
    },
    isActive: {
      description: 'Variant due to activity',
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
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
    activeColor: {
      description: 'Color of the icon when it is active',
      options: colorNames,
      defaultValue: 'primaryLight',
      control: {
        type: 'select',
      },
      table: {
        type: {
          summary: colorNames.toString().replaceAll(',', ' | '),
        },
        defaultValue: { summary: 'primaryLight' },
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
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BuildingIcon: Story = {
  args: {
    name: 'building',
  },
};

export const DashboardIcon: Story = {
  args: {
    name: 'dashboard',
  },
};

export const ResidentsIcon: Story = {
  args: {
    name: 'residents',
  },
};

export const VotingIcon: Story = {
  args: {
    name: 'voting',
  },
};

export const MessagesIcon: Story = {
  args: {
    name: 'messages',
  },
};

export const PaymentsIcon: Story = {
  args: {
    name: 'payments',
  },
};

export const WallIcon: Story = {
  args: {
    name: 'wall',
  },
};

export const ReportsIcon: Story = {
  args: {
    name: 'voting',
  },
};
