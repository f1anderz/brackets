<template>
  <div class="home-page">
    <div class="buttons">
      <RouterLink to="/create" class="home-page_button">
        {{ t('create') }}
      </RouterLink>
      <RouterLink to="/join" class="home-page_button">
        {{ t('join') }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped lang="scss">
.home-page {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;

    .home-page_button {
      --button-bg: var(--neutral-200);
      --button-hover-bg: var(--neutral-100);
      --button-color: var(--primary-900);
      --button-hover-color: var(--accent-900);
      --button-border: var(--accent-300);
      --button-hover-border: var(--accent-900);
      --button-focus-border: var(--primary-alpha-500);

      width: 300px;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: var(--button-color);
      background: var(--button-bg);
      border: none;
      border-radius: 25px;
      outline: 1px solid var(--button-border);

      transition:
        color,
        background-color,
        outline-color,
        0.15s ease;

      &:hover,
      &:focus {
        cursor: pointer;
        color: var(--button-hover-color);
        background-color: var(--button-hover-bg);
        outline-color: var(--button-hover-border);
      }
    }
  }
}
</style>
