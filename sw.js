// Minimal service worker — its only job is to satisfy Chrome/Android's
// requirement for a "real" installable app (Install/Add to Home screen
// with a standalone icon and no browser bar). No offline caching needed.
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());
self.addEventListener('fetch', (e) => {}); // pass-through
