const nexteinConfig = require('nextein/config').default
const { NOW, NOW_URL } = process.env

module.exports = nexteinConfig({
  assetPrefix: Boolean(NOW) ? NOW_URL : '',
  exportPathMap: () => ({
    '/blog': { page: '/blog' },
    '/docs': { page: '/docs' }
  })
})
