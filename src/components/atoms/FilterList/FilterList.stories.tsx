import type { Meta, StoryObj } from '@storybook/react';
import ThemeProvider from 'theme/ThemeContext';
import GlobalStyle from 'theme/globalStyles';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import FilterList from './FilterList';
import { mockArrayStringList, mockArrayObjectList } from './FilterList.utils';

const meta = {
  title: 'Atoms/FilterList',
  component: FilterList,
  tags: ['autodocs'],
  argTypes: {
    register: {
      name: 'register',
      description: 'Function from react-hook-form for registering a input',
      control: { type: null },
    },
    title: {
      name: 'title',
      description: 'Title that will be displayed',
    },
    handleListOnChange: {
      name: 'handleListOnChange',
      description: 'Handler for managing changes in form',
    },
    listType: {
      name: 'listType',
      type: { name: 'string', required: true },
      description: 'Type of input data',
      options: ['arrayOfStrings', 'arrayOfObjects'],
      control: { type: null, default: 'arrayOfObjects' },
      table: {
        defaultValue: { summary: 'arrayOfObjects' },
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
} satisfies Meta<typeof FilterList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ObjectsArray: Story = {
  args: {
    title: 'Title',
    list: mockArrayObjectList,
    listType: 'arrayOfObjects',
    handleListOnChange: () => -1,
    register: ((args: unknown) => args) as UseFormRegister<FieldValues>,
  },
};
export const StringArray: Story = {
  args: {
    title: 'Title',
    list: Object.keys(mockArrayStringList),
    listType: 'arrayOfStrings',
    handleListOnChange: () => -1,
    register: ((args: unknown) => args) as UseFormRegister<FieldValues>,
  },
};
