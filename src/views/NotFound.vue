<template>
  <div class="bk__not_found">
    <h1 class="error-code">404</h1>
    <h2 class="error-text">
      Page with path <span v-if="route" class="current-route">{{ route }}</span> not found
    </h2>
    <h2 class="error-text">Back to <RouterLink to="/">Home</RouterLink></h2>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const route = computed(() => router.currentRoute.value.path);
</script>

<style scoped lang="scss">
.bk__not_found {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  .error-code {
    color: var(--primary-900);
    font-size: 192px;
  }
  .error-text {
    color: var(--accent-500);
    font-size: 24px;

    .current-route,
    a {
      color: var(--accent-700);
      text-decoration: underline;
    }
  }
}
</style>
