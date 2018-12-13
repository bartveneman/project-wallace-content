const nexteinConfig = require('nextein/config').default

module.exports = nexteinConfig({
  assetPrefix: Boolean(process.env.NOW) ? process.env.NOW_URL : ''
})
