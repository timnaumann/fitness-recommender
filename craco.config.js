const path = require('path')
module.exports = {
  eslint: {
    enable: false
  },
  webpack: {
    alias: {
      '@fixtures': path.resolve(__dirname, 'src/fixtures/'),
      '@images': path.resolve(__dirname, 'src/fixtures/images'),
      '@ui-components': path.resolve(__dirname, 'src/ui-components'),
      '@container-components': path.resolve(__dirname, 'src/container-components'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@prop-types': path.resolve(__dirname, 'src/prop-types'),
      '@breakpoints': path.resolve(__dirname, 'src/themes'),
      '@ga-tracking': path.resolve(__dirname, 'src/ga-tracking'),
      '@globals': path.resolve(__dirname, 'src/globals'),
    }
  }
}
