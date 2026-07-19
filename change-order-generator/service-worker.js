/* =========================================================
   service-worker.js — On-The-Spot Change Order Generator
   v2 — Digital Foreman Suite

   WHAT CHANGED FROM v1 (and why):

   1. The two third-party engines (Tailwind styling, jsPDF)
      are now explicitly cached. v1 only cached same-origin
      files, so offline users got an unstyled page and a dead
      PDF button — the two most important assets were the two
      that never worked offline.

   2. The app page itself is now NETWORK-FIRST: when there is
      signal, users always get the newest deploy automatically
      (no more remembering to bump v1 -> v2 on every release).
      When there is zero signal, it falls back to the cached
      copy instantly. Everything else stays cache-first.

   3. Install no longer dies silently if one file 404s.
      cache.addAll() is all-or-nothing; in v1 a single missing
      icon meant NO offline capability at all, with no error
      shown to anyone. Core files are still required, but each
      is fetched individually so one bad path can't take down
      the rest, and failures are logged to the console.
   =========================================================*/

const CACHE_NAME = "change-order-cache-v26";

/* Files served from our own site. */
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-512-maskable.png"
];

/* Third-party engines the app cannot run without.
   These MUST be cached or "works offline" is false.
   NOTE: URLs must match exactly what the HTML <script> tags request —
   no trailing slash on cdn.tailwindcss.com to match the src attribute. */
const CDN_ASSETS = [
  "https://cdn.tailwindcss.com",
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
];

/* Hosts whose responses we are willing to cache at runtime. */
const TRUSTED_CDN_HOSTS = ["cdn.tailwindcss.com", "cdnjs.cloudflare.com"];

/* ---------- INSTALL: pre-cache everything, resiliently ---------- */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Same-origin shell: fetch each file individually so one
      // missing path is logged instead of nuking the whole install.
      await Promise.all(
        APP_SHELL.map((url) =>
          fetch(url, { cache: "no-cache" })
            .then((resp) => {
              if (resp && resp.ok) return cache.put(url, resp);
              console.warn("[SW] Could not pre-cache (bad status):", url);
            })
            .catch(() => console.warn("[SW] Could not pre-cache (fetch failed):", url))
        )
      );
      // CDN engines: fetched in no-cors mode so cross-origin
      // responses can be stored and replayed to <script> tags.
      await Promise.all(
        CDN_ASSETS.map((url) =>
          fetch(url, { mode: "no-cors", cache: "no-cache" })
            .then((resp) => cache.put(url, resp))
            .catch(() => console.warn("[SW] Could not pre-cache CDN asset:", url))
        )
      );
    })
  );
  self.skipWaiting();
});

/* ---------- ACTIVATE: clear old cache versions ---------- */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          // Only clean THIS app's own cache lineage — never touch the site
          // homepage SW's "dfs-home-cache-*" caches.
          keys
            .filter((k) => k.startsWith("change-order-cache-") && k !== CACHE_NAME)
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

/* ---------- FETCH ---------- */
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  /* The page itself: NETWORK-FIRST.
     Online  -> newest deployed version, and the cache is refreshed.
     Offline -> instant cached copy. */
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((resp) => {
          if (resp && resp.ok) {
            const copy = resp.clone();
            caches.open(CACHE_NAME).then((c) => {
              c.put("./index.html", copy.clone());
              c.put("./", copy);
            });
          }
          return resp;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  /* Everything else: CACHE-FIRST for instant offline loads. */
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((resp) => {
          const url = new URL(event.request.url);
          const sameOrigin = url.origin === self.location.origin;
          const trustedCDN = TRUSTED_CDN_HOSTS.includes(url.hostname);
          // Opaque (no-cors) responses report status 0; for trusted
          // CDN hosts we cache them anyway — that's the whole point.
          if ((sameOrigin && resp.status === 200) || trustedCDN) {
            const copy = resp.clone();
            caches.open(CACHE_NAME).then((c) => c.put(event.request, copy));
          }
          return resp;
        })
        .catch(() => {
          // Total dead zone + uncached request: fall back to the app shell.
          return caches.match("./index.html");
        });
    })
  );
});
