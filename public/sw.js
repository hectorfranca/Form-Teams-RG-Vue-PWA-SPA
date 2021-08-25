let CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/',
        '/favicon.ico',
        '/index.html',
        '/index.js',
        '/manifest.webmanifest',
        '/icons/icon-192x192.png',
        '/icons/icon-256x256.png',
        '/icons/icon-384x384.png',
        '/icons/icon-512x512.png',
        '/img/bear_logo.2adfca95.png',
        '/img/dice.439306fe.png',
        '/img/fenix_logo.3d14554e.png',
        '/img/loading_ball.49bd07f8.png',
        '/img/logo.e5d74582.png',
        '/img/tiger_logo.fd09ff6f.png',
        '/img/volley_background.2738e671.jpg',
        '/css/app.825c8779.css',
        '/js/app.a1186a9b.js',
        '/js/app.a1186a9b.js.map',
        '/js/chunk-vendors.273d3664.js',
        '/js/chunk-vendors.273d3664.js.map'
      ]);
    })
  )
});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(CACHE_NAME) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});