<template>
  <component
    :is="href ? 'RouterLink' : 'button'"
    :to="href ? href : undefined"
    :class="[classes, { link: href, disabled: disabled, loading: loading }]"
  >
    <BkLoader v-if="loading" :size="BkLoaderSizes.small" :variant="LoaderVariant" />
    <BkIcon v-if="icon && !loading" :name="icon" size="xs" />
    <slot>{{ contentKey ? t(contentKey) : content }}</slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { type BkButtonProps, BkButtonTypes } from '@/components/base/BkButton/BkButton.types.ts';
import BkLoader from '@/components/base/BkLoader/BkLoader.vue';
import { BkLoaderSizes, BkLoaderVariants } from '@/components/base/BkLoader/BkLoader.types.ts';
import BkIcon from '@/components/base/BkIcon.vue';

const props = withDefaults(defineProps<BkButtonProps>(), {
  type: BkButtonTypes.primary,
  disabled: false,
  loading: false,
});

const { t } = useI18n();

const classes = computed(() => `bk-button ${props.type}`);

const LoaderVariant = computed(() =>
  props.type === BkButtonTypes.primary ? BkLoaderVariants.light : BkLoaderVariants.dark
);
</script>

<style scoped lang="scss">
.bk-button {
  --primary-color: var(--white);
  --primary-background: var(--primary-700);
  --primary-border-color: var(--primary-700);
  --primary-hover-color: var(--white);
  --primary-hover-background: var(--primary-800);
  --primary-hover-border-color: var(--primary-800);
  --primary-disabled-color: var(--neutral-100);
  --primary-disabled-background: var(--neutral-500);
  --primary-disabled-border-color: var(--neutral-500);

  --outline-color: var();
  --outline-background: var();
  --outline-border-color: var();
  --outline-hover-color: var();
  --outline-hover-background: var();
  --outline-disabled-color: var();
  --outline-disabled-background: var();
  --outline-disabled-border-color: var();

  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  width: fit-content;
  height: max-content;
  padding: 4px 10px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  border: 1px solid;
  border-radius: 24px;
  cursor: pointer;
  color: var(--button-color);
  background: var(--button-background);
  border-color: var(--button-border-color);

  &.disabled,
  &.loading {
    cursor: not-allowed;
  }

  .link {
    color: var(--button-color);
  }

  &.primary {
    --button-color: var(--primary-color);
    --button-background: var(--primary-background);
    --button-border-color: var(--primary-border-color);

    &.disabled,
    &.disabled:hover {
      --button-color: var(--primary-disabled-color);
      --button-background: var(--primary-disabled-background);
      --button-border-color: var(--primary-disabled-border-color);
    }

    &:hover {
      --button-color: var(--primary-hover-color);
      --button-background: var(--primary-hover-background);
      --button-border-color: var(--primary-hover-border-color);
    }
  }

  &.outline {
    --button-color: var(--outline-color);
    --button-background: var(--outline-background);
    --button-border-color: var(--outline-border-color);

    &.disabled,
    &.disabled:hover {
      --button-color: var(--outline-disabled-color);
      --button-background: var(--outline-disabled-background);
      --button-border-color: var(--outline-disabled-border-color);
    }

    &:hover {
      --button-color: var(--outline-hover-color);
      --button-background: var(--outline-hover-background);
      --button-border-color: var(--outline-hover-border-color);
    }
  }
}
</style>
