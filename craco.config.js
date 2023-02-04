const path = require('path')
//  const CracoLessPlugin = require('craco-less')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    // plugins: [{ plugin: CracoLessPlugin }],
    alias: {
      '@': resolve('src')
    } 
  }
}

