<script setup>
import { useRoute } from 'vue-router';
import { useMainStore } from '~/stores/mainStore';
import { ref, onMounted } from 'vue';
const title = ref('Загрузка офера...');

const route = useRoute();
const store = useMainStore();
const offer = ref(null);

const ensureOffersLoaded = async () => {
  if (store.offers.length === 0) {
    await store.fetchData();
  }
  const offerId = route.params.id;
  const foundOffer = store.offers.find(o => o.id === offerId);
  if (foundOffer) {
    offer.value = foundOffer;
    title.value = `Test zaim | ${foundOffer.offerName}`;
  } else {
    title.value = 'Офер не найден';
  }
};

const setOffer = () => {
  const offerId = route.params.id;
  offer.value = store.offers.find(o => o.id === offerId);
};

onMounted(async () => {
  await ensureOffersLoaded();
  setOffer();
});

useHead({
  title,
});

watch(
  () => route.params.id,
  () => {
    ensureOffersLoaded();
  },
  { immediate: true },
);
</script>

<template>
  <div v-if="offer" class="page-offer">
    <div class="page-offer__top">
      <div class="page-offer__img">
        <a :href="offer.link" target="_blank">
          <img :src="offer.image" alt="Offer Image" />
        </a>
      </div>
      <div class="page-offer__info">
        <h2>
          <a :href="offer.link" target="_blank">{{ offer.offerName }}</a>
        </h2>
        <ul>
          <li>{{ offer.offerTerms }}</li>
          <li>{{ offer.documents }}</li>
          <li>{{ offer.percent }}</li>
          <li>{{ offer.sellingText }}</li>
          <li>{{ offer.sum }}</li>
          <li>{{ offer.term }}</li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else class="page-offer">
    <p>Офер не найден.</p>
  </div>
</template>

<style scoped lang="scss">
.page-offer {
  margin: 60px 0;

  &__top {
    display: flex;
    gap: 60px;
  }

  &__img {
    min-width: 200px;
    height: 200px;
    background: var(--color-background-offer-img);
    border-radius: 60px;
    padding: 15px;

    a {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
    }

    img {
      max-width: 200px;
      width: 100%;
    }
  }

  &__info {
    h2 {
      font-size: 48px;
      margin-bottom: 30px;

      a {
        color: var(--color-text);
      }
    }

    ul {
      list-style-type: none;
      display: flex;
      gap: 10px;
      flex-direction: column;
      opacity: 0.5;
    }
  }

  @media screen and (max-width: 1160px) {
    &__top {
      gap: 30px;
    }
  }

  @media screen and (max-width: 600px) {
    &__top {
      gap: 15px;
    }

    &__img {
      min-width: 100px;
      height: 100px;
      border-radius: 30px;
    }

    &__info {
      h2 {
        font-size: 28px;
        margin-bottom: 15px;
      }

      ul {
        font-size: 14px;
      }
    }
  }
}
</style>
