process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const Dotenv = require('dotenv-webpack');

const environment = require('./environment')

module.exports = {
  environment.toWebpackConfig()
  // plugins: [
  //   new Dotenv(
  //     'process.env': {
  //       'REACT_APP_FOOTBALL_KEY': JSON.stringify(process.env.REACT_APP_FOOTBALL_KEY)
  //     }
  //   )
  // ]
}
