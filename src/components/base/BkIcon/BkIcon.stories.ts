import type { Meta, StoryObj } from '@storybook/vue3';
import BkIcon from '@/components/base/BkIcon/BkIcon.vue';
import { BkIconNames, BkIconSizes } from '@/components/base/BkIcon/BkIcon.types.ts';

const meta: Meta<typeof BkIcon> = {
  component: BkIcon,
};
export default meta;

type Story = StoryObj<typeof BkIcon>;

export const Base_XS: Story = {
  args: {
    name: BkIconNames['chevron-up'],
    size: BkIconSizes.xs,
  },
};
export const Base_S: Story = {
  args: {
    name: BkIconNames['chevron-up'],
    size: BkIconSizes.s,
  },
};
export const Base_M: Story = {
  args: {
    name: BkIconNames['chevron-up'],
    size: BkIconSizes.m,
  },
};
export const Base_L: Story = {
  args: {
    name: BkIconNames['chevron-up'],
    size: BkIconSizes.l,
  },
};
export const Base_XL: Story = {
  args: {
    name: BkIconNames['chevron-up'],
    size: BkIconSizes.xl,
  },
};

export const AllIcons: StoryObj = {
  render: () => ({
    components: { BkIcon },
    setup() {
      const iconNames = Object.values(BkIconNames);
      return { iconNames, iconSize: BkIconSizes.m };
    },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 16px;">
        <div v-for="icon in iconNames" :key="icon" style="display: flex; flex-direction: column; align-items: center; text-align: center; color: var(--primary-900);">
          <BkIcon :name="icon" :size="iconSize" />
          <span style="margin-top: 4px; font-size: 10px">{{ icon }}</span>
        </div>
      </div>
    `,
  }),
};
