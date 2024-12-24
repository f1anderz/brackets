<template>
  <component :is="href ? 'RouterLink' : 'button'" :to="href ? href : undefined" :class="classes">
    <slot>{{ contentKey ? t(contentKey) : content }}</slot>
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  content: {
    type: String,
    required: false,
  },
  contentKey: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    default: 'primary',
  },
  href: {
    type: String,
    default: undefined,
  },
});

const { t } = useI18n();

const classes = computed(() => `bk-button ${props.type} ${props.href ? 'link' : ''}`);
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
  cursor: pointer;

  .link {
    color: var(--button-color);
  }

  &.primary {
    --button-color: var(--white);
    --button-background: var(--primary-800);
    --button-border: var(--primary-900);
  }

  &.outline {
    --button-color: var(--primary-800);
    --button-background: var(--white);
    --button-border: var(--accent-300);
  }
}
</style>
