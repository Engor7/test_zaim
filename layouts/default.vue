<script setup>
import Header from '~/components/PageHeader.vue';
import Footer from '~/components/PageFooter.vue';

import { onMounted } from 'vue';
import { useMainStore } from '~/stores/mainStore';

const store = useMainStore();

onMounted(() => {
  if (store.offers.length === 0) {
    store.fetchData();
  }
});
</script>

<template>
  <div class="page">
    <div class="container main-container">
      <Header />
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>
