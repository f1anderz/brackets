<template>
  <svg
    :class="['bk-icon', `bk-icon-${size}`]"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <use :xlink:href="`${sprite}#${name}`"></use>
  </svg>
</template>

<script setup lang="ts">
import { type BkIconProps, BkIconSizes } from '@/components/base/BkIcon/BkIcon.types.ts';

withDefaults(defineProps<BkIconProps>(), {
  size: BkIconSizes.m,
});

const sprite = './icons.svg';
</script>

<style scoped lang="scss">
.bk-icon {
  fill: currentColor;
  aspect-ratio: 1;
  flex-shrink: 0;
  display: inline-block;
  width: var(--bk-icon-size);
  height: var(--bk-icon-size);

  &.bk-icon-xs {
    --bk-icon-size: 12px;
  }
  &.bk-icon-s {
    --bk-icon-size: 16px;
  }
  &.bk-icon-m {
    --bk-icon-size: 20px;
  }
  &.bk-icon-l {
    --bk-icon-size: 24px;
  }
  &.bk-icon-xl {
    --bk-icon-size: 28px;
  }
}
</style>
