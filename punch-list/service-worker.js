/* =========================================================
   Punch List — Service Worker
   Same architecture as the other DFS SWs:
   - prefix-scoped cache cleanup (only touches punch-list-cache-*)
   - individual fetch per asset so one bad path can't kill offline
   ========================================================= */

const CACHE_NAME = "punch-list-cache-v6";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-512-maskable.png"
];

const CDN_ASSETS = [
  "https://cdn.tailwindcss.com/",
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const url of APP_SHELL.concat(CDN_ASSETS)) {
        try {
          await cache.add(url);
        } catch (err) {
          console.warn("[PL SW] precache failed for", url, err);
        }
      }
      await self.skipWaiting();
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k.startsWith("punch-list-cache-") && k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          if (res && res.status === 200 && (req.url.startsWith(self.location.origin) || CDN_ASSETS.some((c) => req.url.startsWith(c)))) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return res;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
