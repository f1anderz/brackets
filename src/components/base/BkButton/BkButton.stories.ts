import type { Meta, StoryObj } from '@storybook/vue3';

import BkButton from './BkButton.vue';
import { BkButtonTypes } from './BkButton.types.ts';

const meta: Meta<typeof BkButton> = {
  component: BkButton,
};
export default meta;

type Story = StoryObj<typeof BkButton>;

export const Primary: Story = {
  args: {
    type: BkButtonTypes.primary,
    contentKey: 'create',
  },
};
export const Primary_Icon: Story = {
  args: {
    type: BkButtonTypes.primary,
    contentKey: 'create',
    icon: 'chevron-down',
  },
};
export const Primary_Loading: Story = {
  args: {
    type: BkButtonTypes.primary,
    contentKey: 'create',
    loading: true,
  },
};
export const Primary_Disabled: Story = {
  args: {
    type: BkButtonTypes.primary,
    contentKey: 'create',
    disabled: true,
  },
};

export const Outline: Story = {
  args: {
    type: BkButtonTypes.outline,
    contentKey: 'page_not_found.back_to_homepage',
  },
};
export const Outline_Loading: Story = {
  args: {
    type: BkButtonTypes.outline,
    contentKey: 'page_not_found.back_to_homepage',
    loading: true,
  },
};
export const Outline_Disabled: Story = {
  args: {
    type: BkButtonTypes.outline,
    contentKey: 'page_not_found.back_to_homepage',
    disabled: true,
  },
};
