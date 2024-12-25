<template>
  <div class="bk__not_found">
    <h1 class="error-title">{{ t('page_not_found.header') }}</h1>
    <h3 class="error-text">{{ t('page_not_found.message') }}</h3>
    <BkButton href="/" contentKey="page_not_found.back_to_homepage" :type="BkButtonTypes.outline" />
  </div>
</template>

<script setup lang="ts">
import BkButton from '@/components/base/BkButton/BkButton.vue';
import { useI18n } from 'vue-i18n';
import { BkButtonTypes } from '@/components/base/BkButton/BkButton.types.ts';

const { t } = useI18n();
</script>

<style scoped lang="scss">
.bk__not_found {
  height: 100%;
  padding-left: 15%;
  padding-top: 15%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .error-title {
    max-width: 45%;
    background: var(--text-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 64px;
  }

  .error-text {
    font-weight: 500;
    font-size: 20px;
    color: var(--neutral-500);
  }
}
</style>
