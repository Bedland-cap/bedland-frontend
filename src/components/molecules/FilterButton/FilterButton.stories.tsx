import type { Meta, StoryObj } from '@storybook/react';
import ThemeProvider from 'theme/ThemeContext';
import GlobalStyle from 'theme/globalStyles';
import { mockBuildingDataList } from 'utils/mock/mockBuildingsList';
import mockFlatsList from 'utils/mock/mockFlatsList';
import FilterButton from './FilterButton';

const meta = {
  title: 'Molecules/FilterButton',
  component: FilterButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
  parameters: {
    backgrounds: { default: 'dark' },
  },
} satisfies Meta<typeof FilterButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Floors: Story = {
  args: {
    filterType: 'flats',
    data: mockFlatsList,
    getFilteredData: (args) => {
      const { log } = console;
      log(args);
    },
  },
};

export const BuildingsAndFloors: Story = {
  args: {
    filterType: 'residents',
    data: mockBuildingDataList,
    getFilteredData: (args) => {
      const { log } = console;
      log(args);
    },
  },
};
