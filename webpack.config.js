const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // The entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // The output directory
    filename: 'bundle.js', // The name of the output bundle
    chunkFilename: '[name].[contenthash].js', // Enable dynamic imports with unique names
  },
  module: {
    rules: [
      // Define loaders for processing different file types (e.g., JavaScript, CSS, etc.)
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // An HTML template file
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // Enable code splitting
    },
  },
  resolve: {
    alias: {
      'react-i18next': path.resolve(__dirname, 'node_modules/react-i18next'),
    },
  },
  // Other Webpack configurations...
};
