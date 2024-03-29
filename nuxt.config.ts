// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  $development: undefined,
  $env: undefined,
  $meta: undefined,
  $production: undefined,
  $test: undefined,
  devtools: { enabled: false },
  modules: ['@pinia/nuxt'],
  app: {
    head: {
      title: 'Test zaim',
      meta: [{ name: 'description', content: 'Описание приложения' }],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
        },
      ],
    },
  },
  css: ['~/scss/main.scss'],
});
