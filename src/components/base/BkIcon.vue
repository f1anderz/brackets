<template>
  <img :src="chevronPath" class="bk-icon" :class="sizeClass" :alt="`Icon ${name}`" />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'm',
    validator: (value) => ['xs', 's', 'm', 'l', 'xl'].includes(value),
  },
});

const chevronPath = computed(
  () => new URL(`/src/assets/img/${props.name}.svg`, import.meta.url).href
);

const sizeClass = computed(() => `bk-icon-${props.size}`);
</script>

<style scoped lang="scss">
.bk-icon {
  &.bk-icon-xs {
    width: 12px;
    height: 12px;
  }
  &.bk-icon-s {
    width: 16px;
    height: 16px;
  }
  &.bk-icon-m {
    width: 20px;
    height: 20px;
  }
  &.bk-icon-l {
    width: 24px;
    height: 24px;
  }
  &.bk-icon-xl {
    width: 28px;
    height: 28px;
  }
}
</style>
