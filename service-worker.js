/* =========================================================
   service-worker.js — On-The-Spot Change Order Generator
   Strategy: Cache-First ("offline-first")
   The entire app is cached on first visit. After that, it
   loads instantly with ZERO network — basements, metal
   buildings, dead zones. localStorage data is untouched
   by this worker; it lives on the device independently.
   =========================================================*/

const CACHE_NAME = "change-order-cache-v1"; // Bump to v2, v3... on every deploy

// Everything the app needs to run with zero signal.
// Add any other local files (CSS, JS, fonts) you split out later.
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-512-maskable.png"
];

// INSTALL: Pre-cache the entire app shell on first load
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  // Activate the new worker immediately on update
  self.skipWaiting();
});

// ACTIVATE: Delete any old cache versions so updates take effect
self.addEventListener("activate", (event) => {
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

// FETCH: Cache-first. Serve from device storage; only touch the
// network if something isn't cached (and quietly cache it for next time).
self.addEventListener("fetch", (event) => {
  // Only handle GET requests
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Instant, offline, no signal needed
      }
      return fetch(event.request)
        .then((networkResponse) => {
          // Cache successful same-origin responses for future offline use
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            event.request.url.startsWith(self.location.origin)
          ) {
            const responseClone = networkResponse.clone();
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          // Total dead zone + uncached request: fall back to the app shell
          return caches.match("/index.html");
        });
    })
  );
});
