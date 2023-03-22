import type { Meta, StoryObj } from '@storybook/react';
import ThemeProvider from 'theme/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'theme/globalStyles';
import PaymentWidget from './PaymentWidget';

const meta = {
  title: 'organisms/PaymentWidget',
  component: PaymentWidget,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        <BrowserRouter>{Story()}</BrowserRouter>
      </ThemeProvider>
    ),
  ],
  parameters: { backgrounds: { default: 'light' } },
} satisfies Meta<typeof PaymentWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <PaymentWidget />,
};
