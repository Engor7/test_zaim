// plugins/yandex-metrika.client.js

export default defineNuxtPlugin(() => {
  window.ym =
    window.ym ||
    function () {
      (window.ym.a = window.ym.a || []).push(arguments);
    };
  window.ym.l = 1 * new Date();

  const script = document.createElement('script');
  const firstScript = document.getElementsByTagName('script')[0];
  script.async = true;
  script.src = 'https://mc.yandex.ru/metrika/tag.js';

  if (!document.querySelector(`script[src="${script.src}"]`)) {
    firstScript.parentNode.insertBefore(script, firstScript);
  }

  ym(96880487, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
  });
});
