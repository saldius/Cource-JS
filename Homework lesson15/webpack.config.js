'use strict';

let path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  watch: false,

  
  plugins: [
    new UglifyJsPlugin()
  ]
};