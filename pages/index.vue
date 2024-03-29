<template>
  <main>
    <CoverMainPage />
    <div class="offers">
      <OfferItem v-for="offer in offers" :key="offer.id" :offer="offer" />
    </div>
  </main>
</template>

<script setup>
import { useMainStore } from '../stores/mainStore';
const store = useMainStore();
const { offers } = storeToRefs(store);
</script>

<style scoped lang="scss">
.offers {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 60px 0;

  @media screen and (max-width: 1160px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 40px 0;
  }

  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
  }
}
</style>
