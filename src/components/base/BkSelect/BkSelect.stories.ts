import BkSelect from '@/components/base/BkSelect/BkSelect.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof BkSelect> = {
  component: BkSelect,
};
export default meta;

type Story = StoryObj<typeof BkSelect>;

export const Default: Story = {
  args: {
    options: [
      { id: 1, name: 'Open tournament' },
      { id: 2, name: 'Closed tournament' },
    ],
  },
};

export const Many_Options: Story = {
  args: {
    options: [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
      { id: 4, name: 'Option 4' },
      { id: 5, name: 'Option 5' },
      { id: 6, name: 'Option 6' },
      { id: 7, name: 'Option 7' },
      { id: 8, name: 'Option 8' },
      { id: 9, name: 'Option 9' },
      { id: 10, name: 'Option 10' },
      { id: 11, name: 'Option 11' },
      { id: 12, name: 'Option 12' },
      { id: 13, name: 'Option 13' },
    ],
  },
};
