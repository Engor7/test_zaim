import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    name: '',
    domain: '',
    offers: [],
  }),
  actions: {
    async fetchData() {
      try {
        const response = await fetch('https://config-tool.ru/front.json');
        const { data } = await response.json();
        this.name = data.name;
        this.domain = data.domain;
        this.offers = shuffle(data.offers);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    },
  },
});

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
