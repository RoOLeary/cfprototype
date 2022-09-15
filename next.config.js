const withPWA = require('next-pwa')({
    dest: 'public'
  })
  module.exports = withPWA({
    reactStrictMode: false,
    trailingSlash: false,
    distDir: '/out',
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
  });
  
  // // module.exports = {
  // //   exportPathMap: async function (
  // //       defaultPathMap,
  // //       { dev, dir, outDir, distDir, buildId }
  // //   ) {
  // //       return {
  // //       '/': { page: '/' },
  // //       '/about': { page: '/about' },
  // //       '/posts': { page: '/posts'}
  // //       }
  // //   },
  // //   async headers() {
  // //     return [
  // //       {
  // //         source: '/all-components',
  // //         headers: [
  // //           {
  // //             key: 'x-custom-header',
  // //             value: 'my custom header value',
  // //           },
  // //           {
  // //             key: 'x-another-custom-header',
  // //             value: 'my other custom header value',
  // //           },
  // //         ],
  // //       },
  // //     ]
  // //   },
  // // }
  
  
  