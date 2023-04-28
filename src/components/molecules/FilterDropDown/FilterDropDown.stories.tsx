import type { Meta, StoryObj } from '@storybook/react';
import ThemeProvider from 'theme/ThemeContext';
import GlobalStyle from 'theme/globalStyles';
import { mockBuildingDataList } from 'utils/mock/mockBuildingsList';
import mockFlatsList from 'utils/mock/mockFlatsList';
import FilterDropDown from './FilterDropDown';
import { FilterDropDownDataType } from './FilterDropDown.types';

const meta = {
  title: 'Molecules/FilterDropDown',
  component: FilterDropDown,
  tags: ['autodocs'],
  argTypes: {
    data: {
      name: 'data',
      description: 'Input data to be filtered',
    },
    getFilteredData: {
      name: 'getFilteredData',
      description: 'Function to get filtered data',
    },
    filterType: {
      name: 'filterType',
      description: 'Filtering type',
      control: { type: null, default: 'flats' },
      table: {
        defaultValue: { summary: 'flats' },
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        <div style={{ minHeight: '20rem' }}>{Story()}</div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    backgrounds: { default: 'dark' },
  },
} satisfies Meta<typeof FilterDropDown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Floors: Story = {
  args: {
    filterType: 'flats',
    data: mockFlatsList,
    getFilteredData: (data: FilterDropDownDataType) => data,
  },
};

export const BuildingsAndFloors: Story = {
  args: {
    filterType: 'residents',
    data: mockBuildingDataList,
    getFilteredData: (data: FilterDropDownDataType) => data,
  },
};
