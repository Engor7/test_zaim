<template>
  <div class="cover">
    <div class="cover__text">
      <h2>
        Займы на карту онлайн <br />
        от ведущих МФО
      </h2>
      <p>
        <span> Для получения большей суммы, обращайтесь в разные мфо.</span>
        Заполнение двух и более заявок гарантирует получение <br />
        требуемой суммы!
      </p>
    </div>
    <div class="cover__img">
      <img src="/img_cover.png" alt="cover" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.cover {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__text {
    h2 {
      font-size: 64px;
      font-weight: 300;
      margin-bottom: 24px;
      line-height: 120%;
    }

    p {
      font-size: 24px;
      line-height: 130%;

      span {
        display: block;
        opacity: 0.5;
        font-weight: 300;
      }
    }
  }

  @media screen and (max-width: 1260px) {
    &__text {
      h2 {
        font-size: 56px;
      }

      p {
        font-size: 18px;
      }
    }
  }

  @media screen and (max-width: 990px) {
    &__text {
      h2 {
        font-size: 38px;
      }

      p {
        font-size: 16px;
      }
    }

    &__img {
      img {
        max-width: 300px;
      }
    }
  }

  @media screen and (max-width: 780px) {
    &__text {
      h2 {
        font-size: 28px;
      }
    }

    &__img {
      img {
        max-width: 200px;
      }
    }
  }

  @media screen and (max-width: 660px) {
    &__text {
      margin-top: 30px;

      h2 {
        margin-bottom: 10px;
        font-size: 26px;
      }

      p {
        font-size: 14px;
      }

      br {
        display: none;
      }
    }

    &__img {
      display: none;
    }
  }
}
</style>
