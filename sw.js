const CACHE_NAME = 'vizlearn-v4-static';
const CORE_ASSETS = [
  './', './index.html', './manifest.webmanifest',
  './assets/css/main.css', './assets/js/main.js', './assets/js/snippets.js', './assets/js/playground.js',
  './pages/about.html','./pages/cheatsheet.html','./pages/compare.html','./pages/errors.html','./pages/gallery.html','./pages/glossary.html','./pages/lessons.html','./pages/params.html','./pages/playground.html','./pages/progress.html','./pages/quickref.html','./pages/quiz.html','./pages/roadmap.html','./pages/datasets.html','./pages/projects.html','./pages/storytelling.html','./pages/instructor.html','./pages/tools.html','./pages/enterprise.html','./pages/training.html','./pages/curriculum.html','./pages/upload.html'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(()=>{});
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});
