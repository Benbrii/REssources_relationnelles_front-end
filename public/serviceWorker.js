var cacheName = 'todolist-PWA-v1.2';
var appShellFiles = [
  '*',
  '/',
  '/serviceWorker.js',
  '/manifest.json',
  '/ressource/:id',
  '/authControl',
  '/connexion',
  '/connexion/authcontroll',
  '/connexion/disconnect',
  '/register',
];

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(appShellFiles);
    })
  );
});

//Snippet code from : https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/respondWith
//This fetch event tries to return a response from the cache API, falling back to the network otherwise.
self.addEventListener('fetch', event => {
  // Prevent the default, and handle the request ourselves.
  event.respondWith(async function () {
    // Try to get the response from a cache.
    const cachedResponse = await caches.match(event.request);
    // Return it if we found one.
    if (cachedResponse) return cachedResponse;
    // If we didn't find a match in the cache, use the network.
    return fetch(event.request);
  }());
});