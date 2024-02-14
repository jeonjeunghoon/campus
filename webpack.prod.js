const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'hidden-source-map',
  plugins: [
    new Dotenv({ path: './.env.production' }),

    new CopyPlugin({
      patterns: [{ from: 'public/_redirects', to: '' }],
    }),
  ],
  optimization: {
    minimizer: ['...'],
  },
});
