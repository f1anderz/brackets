<template>
  <BkHeader />
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import BkHeader from '@/components/BkHeader.vue';
</script>

<style></style>
