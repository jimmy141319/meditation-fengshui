/* ============================================================
   SHICHEN CALM — sw.js
   Service Worker · Cache-First Strategy
   ============================================================ */

'use strict';

const CACHE_NAME = 'shichen-calm-v1';

const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.webmanifest',
  './icons/icon.svg',
  './icons/icon-192.svg',
  './icons/icon-512.svg',
  './icons/icon-maskable.svg',
  './404.html',
];

/* ── Install: pre-cache all assets ── */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

/* ── Activate: remove old caches ── */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

/* ── Fetch: cache-first, network fallback ── */
self.addEventListener('fetch', (event) => {
  /* Only handle GET requests for same-origin or app assets */
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isAppAsset =
    url.origin === self.location.origin ||
    ASSETS.some((a) => url.pathname.endsWith(a.replace('./', '/')));

  if (!isAppAsset) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }
          const toCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, toCache));
          return response;
        })
        .catch(() => caches.match('./404.html'));
    })
  );
});
