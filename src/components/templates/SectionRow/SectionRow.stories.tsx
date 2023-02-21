import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import SectionRow from './SectionRow';

const meta = {
  title: 'templates/SectionRow',
  component: SectionRow,
  tags: ['autodocs'],
  decorators: [(Story) => <BrowserRouter>{Story()}</BrowserRouter>],
} satisfies Meta<typeof SectionRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div
          style={{
            border: '1px solid white',
            height: '300px',
            width: '300px',
            color: 'white',
          }}
        >
          this is
        </div>
        <div
          style={{
            border: '1px solid white',
            height: '300px',
            width: '300px',
            color: 'white',
          }}
        >
          template
        </div>
      </>
    ),
  },
};
