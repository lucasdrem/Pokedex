/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const withImages = require('next-images')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withImages(
  withPWA({
    pwa: {
      dest: 'public',
      disable: !isProd
    },
    images: {
      domains: ['localhost', 'upload.wikimedia.org', 'www.serebii.net']
    }
  })
)
