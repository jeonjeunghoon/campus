const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'hidden-source-map',
  plugins: [new Dotenv({ path: './.env.production' })],
  optimization: {
    minimizer: ['...'],
  },
});
