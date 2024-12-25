<template>
  <span class="loader" :class="[size, variant]"></span>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';
import {
  type BkLoaderProps,
  BkLoaderSizes,
  BkLoaderVariants,
} from '@/components/base/BkLoader/BkLoader.types.ts';

withDefaults(defineProps<BkLoaderProps>(), {
  size: BkLoaderSizes.medium,
  variant: BkLoaderVariants.inherit,
});
</script>

<style scoped lang="scss">
.loader {
  border-style: solid;
  border-color: var(--loader-color);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &.inherit {
    --loader-color: currentColor;
  }

  &.light {
    --loader-color: var(--primary-200);
  }

  &.dark {
    --loader-color: var(--primary-900);
  }

  &.s {
    border-width: 2px;
    width: 16px;
    height: 16px;
  }

  &.m {
    border-width: 2.5px;
    width: 24px;
    height: 24px;
  }

  &.l {
    border-width: 3px;
    width: 32px;
    height: 32px;
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
