self.addEventListener('install', (event) => {
  event.waitUntil(caches.open('shichen-calm-overwrite-v1').then(cache => cache.addAll([
    './','./index.html','./style.css','./app.js','./manifest.webmanifest','./404.html',
    './icon-192.png','./icon-512.png',
    './audio/morning.wav','./audio/noon.wav','./audio/evening.wav','./audio/night.wav'
  ])));
  self.skipWaiting();
});
self.addEventListener('activate', (event) => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((resp) => resp || fetch(event.request)));
});
