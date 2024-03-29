<script setup>
import { onMounted } from 'vue';
import { useMainStore } from '~/stores/mainStore';

const store = useMainStore();

onMounted(async () => {
  if (store.offers.length === 0) {
    await store.fetchData();
  }
});

const { name, domain } = storeToRefs(store);
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer">
        <div class="footer__left">
          <p>
            © 2023
            <a v-if="domain" :href="`https://${domain}`"
              >https://{{ domain }}
            </a>
            — сервис подбора займов
          </p>
          <p>{{ name }}</p>
          <p>ИНН: 123123123123</p>
        </div>
        <div class="footer__right">
          <p>
            Сайт НЕ является представительством МФО или банком, не выдает <br />
            займов и кредитов. Все рекомендуемые на сайте кредитные <br />
            учреждения имеют соответствующие лицензии. Условия неуплаты <br />
            можно уточнить на сайте МФО.
          </p>
          <div class="footer__links">
            <p>
              <a href="#"
                >Политика в отношении обработки <br />
                персональных данных.</a
              >
            </p>
            <ul>
              <li><a href="#">Согласие на рассылку</a></li>
              <li><a href="#">Отказаться от рассылки</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background: var(--color-background-footer);
  padding: 42px 0 143px 0;

  @media screen and (max-width: 870px) {
    padding: 30px 0;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  a {
    color: var(--color-text);
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: 8px;

    p {
      &:first-child {
        margin-bottom: 8px;
      }
    }

    a {
      text-decoration: none;
    }
  }

  &__right {
    opacity: 0.5;

    p {
      line-height: 150%;
    }
  }

  &__links {
    display: flex;
    justify-content: space-between;
    margin-top: 26px;
    line-height: 140%;

    ul {
      list-style-type: none;
    }
  }

  @media screen and (max-width: 870px) {
    flex-direction: column;
    gap: 40px;

    br {
      display: none;
    }

    &__links {
      flex-wrap: wrap;
      gap: 15px;
    }
  }
}
</style>
