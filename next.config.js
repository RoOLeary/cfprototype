/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: false,
  distDir: '/out',
}

module.exports = nextConfig




module.exports = {

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