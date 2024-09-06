<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/create">Create</RouterLink>
      <RouterLink to="/join">Join</RouterLink>
      <RouterLink to="/help">Help</RouterLink>
    </nav>
    <ProfileBlock />
  </header>
</template>

<script setup>
import ProfileBlock from '@/components/headers/ProfileBlock.vue';
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

    a {
      color: var(--white);
      font-size: 18px;
      font-weight: 500;

      &:hover {
        color: var(--primary-100);
      }
    }
  }
}
</style>
