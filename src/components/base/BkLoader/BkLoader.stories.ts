import type { Meta, StoryObj } from '@storybook/vue3';

import BkLoader from './BkLoader.vue';
import { BkLoaderSizes, BkLoaderVariants } from './BkLoader.types.ts';

const meta: Meta = {
  component: BkLoader,
};
export default meta;

type Story = StoryObj<typeof BkLoader>;

export const Small_Light: Story = {
  args: {
    size: BkLoaderSizes.small,
    variant: BkLoaderVariants.light,
  },
};
export const Small_Dark: Story = {
  args: {
    size: BkLoaderSizes.small,
    variant: BkLoaderVariants.dark,
  },
};

export const Medium_Light: Story = {
  args: {
    size: BkLoaderSizes.medium,
    variant: BkLoaderVariants.light,
  },
};
export const Medium_Dark: Story = {
  args: {
    size: BkLoaderSizes.medium,
    variant: BkLoaderVariants.dark,
  },
};

export const Large_Light: Story = {
  args: {
    size: BkLoaderSizes.large,
    variant: BkLoaderVariants.light,
  },
};
export const Large_Dark: Story = {
  args: {
    size: BkLoaderSizes.large,
    variant: BkLoaderVariants.dark,
  },
};
