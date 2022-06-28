const webpack = require('webpack');
const path = require('path');

const config = {
  test: /\.svg$/,
  exclude: /node_modules/,
  use: {
    loader: 'svg-react-loader',
  },
};

module.exports = config;
