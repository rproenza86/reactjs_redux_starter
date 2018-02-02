const CACHE_STATIC_ASSETS = 'reactjs_redux_starter-static-v1';
const CACHE_POSTS_IMAGES = 'reactjs_redux_starter-imgs';

const cacheWhitelist = [CACHE_POSTS_IMAGES, CACHE_STATIC_ASSETS];

const urlsToCache = [
    '/',
    '/style/style.css',
    'https://cdn.rawgit.com/twbs/bootstrap/48938155eb24b4ccdde09426066869504c6dab3c/dist/css/bootstrap.min.css',
    'https://use.fontawesome.com/releases/v5.0.6/js/all.js'
];

self.addEventListener('install', event => {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_STATIC_ASSETS)
        .then(cache => {
            console.info('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => {
                    return cacheName.startsWith('reactjs_redux_starter-') && !cacheWhitelist.includes(cacheName);
                }).map(cacheName => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('message', event => {
    // Perform install steps without to wait next reload of app visit
    if (event.data.action === 'skipWaiting')
        self.skipWaiting();
});