self.addEventListener('install', (event) => {
  event.waitUntil(caches.open('shichen-calm-v2').then(cache => cache.addAll([
    './', './index.html', './style.css', './app.js', './manifest.webmanifest', './404.html',
    './icons/icon-192.png', './icons/icon-512.png'
  ])));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});
