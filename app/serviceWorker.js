if (typeof importScripts === 'function') {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js')

  workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'static-resources'
    })
  )

  const cachedResponseWillBeUsed = ({cache, request, cachedResponse}) => {
    if (cachedResponse) {
      return cachedResponse
    }

    const urlToMatch = '/index.html'
    return caches.match(urlToMatch)
  }

  const htmlCachingStrategy = workbox.strategies.staleWhileRevalidate({
    cacheName: 'html-cache',
    cacheExpiration: {
      maxEntries: 50
    },
    cacheableResponse: {statuses: [0, 200]},
    plugins: [{cachedResponseWillBeUsed}]
  })

  workbox.routing.registerRoute(
    /(?:\/#*$|\.html)/,
    htmlCachingStrategy
  )
}
