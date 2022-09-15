const withPWA = require('next-pwa')({
  dest: 'public'
})
module.exports = withPWA({
  reactStrictMode: false,
  trailingSlash: false,
  i18n: {
    locales: ['en', 'fr', 'de', 'es'],
    defaultLocale: 'en',
  },
  images: {
    loader: 'custom',
    path: '/',
    domains: ['placedog.net', 'cdn0.tnwcdn.com', 'cfprototype.vercel.app', 'cities.tnwcdn.com'],
  },
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js',
  },
  exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/posts': { page: '/posts'}
        }
    },
});


