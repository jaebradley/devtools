const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolveConfiguration = require('./webpack.config.resolve.js');
const {
  BASE_DIRECTORY,
  ENTRY_FILE_PATH,
  INDEX_HTML_PAGE_FILE_PATH,
  OUTPUT_DIRECTORY,
  OUTPUT_DIRECTORY_NAME,
  SOURCE_DIRECTORY,
} = require('./constants');

module.exports = {
  entry: ENTRY_FILE_PATH,
  output: {
    filename: 'bundle.js',
    path: OUTPUT_DIRECTORY,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          SOURCE_DIRECTORY,
        ],
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: resolveConfiguration,
  plugins: [
    new CleanWebpackPlugin(
      [
        OUTPUT_DIRECTORY_NAME,
      ],
      {
        root: BASE_DIRECTORY,
      },
    ),
    new HtmlWebpackPlugin({
      inject: false,
      template: INDEX_HTML_PAGE_FILE_PATH,
    }),
  ],
};
