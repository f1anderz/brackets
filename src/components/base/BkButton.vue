<template>
  <button :class="classes">
    <RouterLink v-if="href" :to="href" class="link">{{ content }}</RouterLink>
    <slot v-else />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  content: { type: String },
  type: { type: String, default: 'filled' },
  href: {
    type: String,
    default: undefined,
  },
});

const classes = computed(() => {
  return `bk-button ${props.type}`;
});
</script>

<style scoped lang="scss">
.bk-button {
  --button-color: var(--white);
  --button-background: var(--primary-800);
  --button-border: var(--white);

  display: flex;
  width: fit-content;
  height: max-content;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  background: var(--button-background);
  color: var(--button-color);
  border: 1px solid var(--button-border);
  border-radius: 24px;

  .link {
    color: var(--button-color);
  }

  &.outline {
    --button-color: var(--primary-800);
    --button-background: var(--white);
    --button-border: var(--accent-300);
  }
}
</style>
