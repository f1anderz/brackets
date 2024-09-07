<template>
  <div class="bk__not_found">
    <h1 class="error-title">Page not found</h1>
    <h3 class="error-text">The page you are looking for is gone or never existed.</h3>
    <BkButton href="/" content="Back to Homepage" type="outline" />
  </div>
</template>

<script setup>
import BkButton from '@/components/base/BkButton.vue';
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
