/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    trailingSlash: false,
    distDir: '/out',
  }
  
  module.exports = nextConfig
  
  module.exports = {
    images: {
        domains: ['cdn0.tnwcdn.com'],
    },
    async headers() {
      return [
        {
          source: '/all-components',
          headers: [
            {
              key: 'x-custom-header',
              value: 'my custom header value',
            },
            {
              key: 'x-another-custom-header',
              value: 'my other custom header value',
            },
          ],
        },
      ]
    },
  }