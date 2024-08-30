/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/hackerSkillSheet': { page: '/hackerSkillSheet' },
      '/game': { page: '/game' },
    }
  },
}

module.exports = nextConfig
