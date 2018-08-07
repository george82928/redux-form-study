const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ENV_DEVELOPMENT = 'dev'
const ENV_TEST = 'test'
const ENV_PRODUCTION = 'production'
const BUILD_DIR = path.resolve(__dirname, 'public')
const APP_DIR = path.resolve(__dirname, 'client')
const envName = process.env['NODE_ENV'] ? process.env['NODE_ENV'] : ENV_DEVELOPMENT
console.log('Starting Webpack in ' + envName + ' environment')

let config = {
  entry: ['babel-polyfill', APP_DIR + '/index.js'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      options: {
        presets: ['env', 'react'],
        plugins: ['styled-jsx/babel', 'transform-object-rest-spread']
      }
    }
    ]
  }
}

switch (envName) {
  case ENV_DEVELOPMENT:
    // Dev environment config
    config.mode = 'development'
    config.watch = true
    config.devtool = 'source-map'
    break
  case ENV_TEST:
    // Test environment config
    config.devtool = 'source-map'
    config.watch = false
    break
  case ENV_PRODUCTION:
    // Production environment config
    config.watch = false
    config.plugins.push(new UglifyJSPlugin())
    break
}

module.exports = config
