<script setup>
import { ref, onMounted } from 'vue';

const currentTheme = ref('light');

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme.value);
  localStorage.setItem('theme', currentTheme.value);
};

onMounted(() => {
  currentTheme.value = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme.value);
});
</script>

<template>
  <header class="page-header">
    <NuxtLink to="/">
      <img src="/logo.svg" alt="logo" />
    </NuxtLink>

    <div class="theme-toggle" @click="toggleTheme">
      {{ currentTheme === 'light' ? 'Темная' : 'Светлая' }}
    </div>
  </header>
</template>

<style lang="scss">
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;

  .theme-toggle {
    cursor: pointer;
    margin-left: 16px;
    border: 1px solid var(--color-border);
    padding: 5px 10px;
    border-radius: 5px;
    user-select: none;
  }
}
</style>
