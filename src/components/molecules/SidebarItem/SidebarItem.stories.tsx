import { Meta, StoryObj } from '@storybook/react';
import { iconsNames } from 'components/atoms/Icon/icons.utils';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'theme/globalStyles';
import initialTheme from 'theme/initialTheme';
import ThemeProvider from 'theme/ThemeContext';
import SidebarItem from './SidebarItem';

const meta = {
  title: 'Molecules/SidebarItem',
  component: SidebarItem,
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      name: 'variant',
      type: { name: 'string', required: true },
      description: 'Variant of the SidebarItem',
      options: iconsNames,
      control: { type: 'select', default: 'building' },
      table: {
        type: {
          summary: `Variants: ${iconsNames.toString().replaceAll(',', ' | ')}`,
        },
        defaultValue: { summary: 'building' },
      },
    },
    label: {
      type: { name: 'string', required: true },
      description: 'Label of the SidebarItem',
      control: {
        type: 'text',
      },
    },
    linkTo: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider>
          <ul>{Story()}</ul>
        </ThemeProvider>
      </BrowserRouter>
    ),
  ],
  parameters: {
    backgrounds: { default: initialTheme.palette.background },
  },
} satisfies Meta<typeof SidebarItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BuildingsItem: Story = {
  args: {
    iconName: 'building',
    label: 'Buildings',
    linkTo: '/buildings',
  },
};

export const ResidentsItem: Story = {
  args: {
    iconName: 'residents',
    label: 'Residents',
    linkTo: '/residents',
  },
};

export const ReportsItem: Story = {
  args: {
    iconName: 'reports',
    label: 'Reports',
    linkTo: '/reports',
  },
};

export const VotingItem: Story = {
  args: {
    iconName: 'voting',
    label: 'Voting',
    linkTo: '/voting',
  },
};

export const FlatsItem: Story = {
  args: {
    iconName: 'building',
    label: 'Flats',
    linkTo: '/flats',
  },
};

export const PaymentsItem: Story = {
  args: {
    iconName: 'payments',
    label: 'Payments',
    linkTo: '/payments',
  },
};

export const WallItem: Story = {
  args: {
    iconName: 'wall',
    label: 'Wall',
    linkTo: '/wall',
  },
};

export const DashboardItem: Story = {
  args: {
    iconName: 'dashboard',
    label: 'Dashboard',
    linkTo: '/dashboard',
  },
};

export const MessagesItem: Story = {
  args: {
    iconName: 'messages',
    label: 'Messages',
    linkTo: '/messages',
  },
};
