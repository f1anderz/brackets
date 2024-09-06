<template>
  <div class="home-page">
    <div class="buttons">
      <RouterLink to="/create">
        <button>Create</button>
      </RouterLink>
      <RouterLink to="/join">
        <button>Join</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup></script>

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

    button {
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
      border: 1px solid var(--button-border);
      border-radius: 25px;
      transition:
        color,
        background-color,
        0.15s ease;

      &:focus {
        outline: none;
        border-color: var(--button-focus-border);
        box-shadow: 0 0 0 2px var(--primary-alpha-500);
      }

      &:hover {
        cursor: pointer;
        color: var(--button-hover-color);
        background-color: var(--button-hover-bg);
        border-color: var(--button-hover-border);
      }
    }
  }
}
</style>
