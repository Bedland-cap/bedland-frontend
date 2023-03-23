import type { Meta, StoryObj } from '@storybook/react';
import ThemeProvider from 'theme/ThemeContext';
import GlobalStyle from 'theme/globalStyles';
import { mockDataForVotingChart, mockDataForPaymentChart } from 'utils/mock/chartsMockData';
import CustomChart from './CustomChart';
import { CHART_VARIANTS } from './CustomChart.utils';

const paymentChartTypes = [
  CHART_VARIANTS.voting,
  CHART_VARIANTS.paymentManager,
  CHART_VARIANTS.paymentResident,
];

const meta = {
  title: 'Molecules/CustomChart',
  component: CustomChart,
  tags: ['autodocs'],
  argTypes: {
    data: {},
    size: {},
    variant: {
      name: 'variant',
      type: { name: 'string', required: true },
      description: 'Variant of the charts',
      options: paymentChartTypes,
      control: { type: 'select', default: CHART_VARIANTS.paymentManager },
      table: {
        type: {
          summary: `Variants: ${paymentChartTypes.toString().replaceAll(',', ' | ')}`,
        },
        defaultValue: { summary: CHART_VARIANTS.paymentManager },
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
  parameters: { backgrounds: { default: 'light' } },
} satisfies Meta<typeof CustomChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaymentManagerChart: Story = {
  render: (args) => <CustomChart {...args} />,
  args: {
    data: mockDataForPaymentChart,
    size: 14,
    variant: CHART_VARIANTS.paymentManager,
    title: 'February overview for all flats:',
  },
};

export const PaymentResidentChart: Story = {
  render: (args) => <CustomChart {...args} />,
  args: {
    data: mockDataForPaymentChart,
    size: 14,
    variant: CHART_VARIANTS.paymentResident,
    title: 'February overview for all flats:',
  },
};

export const VotingChart: Story = {
  render: (args) => <CustomChart {...args} />,
  args: {
    data: mockDataForVotingChart,
    size: 14,
    variant: CHART_VARIANTS.voting,
  },
};