const webpack = require('webpack');
const path = require('path');

const config = {
  test: /\.(png|jpe?g|gif|svg)$/i,
  use: [
    {
      loader: 'file-loader',
    },
  ],
};

module.exports = config;
