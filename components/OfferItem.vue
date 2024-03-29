<script setup>
defineProps({
  offer: {
    type: Object,
    required: true,
  },
});

const trackApplicationClick = () => {
  ym('ИДЕНТИФИКАТОР_СЧЕТЧИКА', 'reachGoal', 'submit_application');
};
</script>

<template>
  <div class="offer">
    <div class="offer__selling-text">{{ offer.sellingText }}</div>
    <div class="offer__block">
      <div class="offer__block-top">
        <div class="offer__img">
          <NuxtLink :to="`/offers/${offer.id}`">
            <img :src="offer.image" alt="Offer Image" />
          </NuxtLink>
        </div>
        <div class="offer__block-top-right">
          <div class="offer__name">
            <NuxtLink :to="`/offers/${offer.id}`">{{
              offer.offerName
            }}</NuxtLink>
          </div>
          <div class="offer__documents">{{ offer.documents }}</div>
        </div>
      </div>
      <ul class="offer__info">
        <li>
          <b>{{ offer.sum }}</b>
          <span>сумма</span>
        </li>
        <li>
          <b>{{ offer.percent }}</b>
          <span>ставка</span>
        </li>
        <li><b>от 21 года</b> <span>возраст</span></li>
      </ul>
      <NuxtLink
        :to="`/offers/${offer.id}`"
        class="offer__application"
        @click.prevent="trackApplicationClick"
      >
        Заполнить заявку
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.offer {
  background: var(--color-background-offer-one);
  border-radius: 40px;
  font-size: 16px;

  &__selling-text {
    padding: 8px 0;
    text-align: center;
    font-size: 14px;
  }

  &__block {
    background: var(--color-background-offer-two);
    border-radius: 40px;
    padding: 8px;
  }

  &__block-top {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  &__img {
    width: 80px;
    height: 80px;
    background-color: var(--color-background);
    border-radius: 30px;
    padding: 5px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    img {
      max-width: 100%;
    }
  }

  &__block-top-right {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__name {
    a {
      color: var(--color-text);
      font-weight: 500;
      text-decoration: none;
    }
  }

  &__documents {
    opacity: 0.5;
    text-transform: lowercase;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style-type: none;
    padding: 0 8px;
    margin: 32px 0;

    li {
      display: flex;
      justify-content: space-between;

      b {
        font-weight: 400;
        font-size: 20px;
      }

      span {
        font-size: 16px;
        opacity: 0.2;
      }
    }
  }

  &__application {
    display: block;
    text-decoration: none;
    font-size: 20px;
    background: #baff24;
    color: #141718;
    border-radius: 30px;
    line-height: 60px;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    border: none;
    width: 100%;
    transition: all 0.3s;

    &:hover {
      background: #30fd00;
      transform: scale(0.98);
    }
  }
}
</style>
