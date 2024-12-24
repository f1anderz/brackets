<template>
  <header>
    <nav>
      <RouterLink to="/" class="link">{{ t('home') }}</RouterLink>
      <RouterLink to="/create" class="link">{{ t('create') }}</RouterLink>
      <RouterLink to="/join" class="link">{{ t('join') }}</RouterLink>
      <RouterLink to="/help" class="link">{{ t('help') }}</RouterLink>
    </nav>
    <ProfileBlock />
  </header>
</template>

<script setup lang="ts">
import ProfileBlock from '@/components/header/ProfileBlock.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped lang="scss">
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: var(--header-gradient);
  padding: 12px 24px 12px 16px;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;

    .link {
      color: var(--white);
      font-size: 18px;
      font-weight: 500;

      &:hover,
      &:focus {
        color: var(--primary-100);
      }
    }
  }
}
</style>
