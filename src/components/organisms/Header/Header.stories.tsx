import { PARAM_REDUX_MERGE_STATE } from 'addon-redux';
import type { Meta, StoryObj } from '@storybook/react';
import ThemeProvider from 'theme/ThemeContext';
import GlobalStyle from 'theme/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { reduxStore } from 'store/store';
import Header from './Header';

const meta = {
  title: 'Molecules/Header',
  component: Header,
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <ThemeProvider>
        <Provider store={reduxStore}>
          <GlobalStyle />
          <BrowserRouter>{Story()}</BrowserRouter>
        </Provider>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResidentLoginPage: Story = {
  parameters: {
    [PARAM_REDUX_MERGE_STATE]: '{"user": {"role": "resident"}}',
  },
};
export const ManagerLoginPage: Story = {
  parameters: {
    [PARAM_REDUX_MERGE_STATE]: '{"user": {"role": "manager"}}',
  },
};

export const ManagerDashboardPage: Story = {
  parameters: {
    [PARAM_REDUX_MERGE_STATE]: '{"user": {"role": "manager", "loggedIn": "true"}}',
  },
};
export const ResidentDashboardPage: Story = {
  parameters: {
    [PARAM_REDUX_MERGE_STATE]: '{"user": {"role": "resident", "loggedIn": "true"}}',
  },
};