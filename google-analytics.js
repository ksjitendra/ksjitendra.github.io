(function () {
  var measurementId = 'G-NRLNJ6CFVK';

  if (window.__googleAnalyticsLoaded) {
    return;
  }
  window.__googleAnalyticsLoaded = true;

  var gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId);
})();
