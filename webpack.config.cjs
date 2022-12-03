// Import the path and TerserWebpackPlugin modules
const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
// Export a configuration object
module.exports = {
  mode: 'production',
  // Specify the entry point
  entry: './src/index.js',
  // Specify the output point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js',
  },
  // Use the TerserWebpackPlugin to minify the code
  optimization: {
    minimizer: [new TerserWebpackPlugin()],
  },
};