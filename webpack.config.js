const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const path = require('path');

module.exports = (env, argv) => {

  const isProduction = argv.mode === 'production'
  // remove all console.* statements (like console.log, console.warn, console.error, etc.) from the production build of your JavaScript code.
  const isDropConsole = env.dropConsole === undefined ? true : env.dropConsole === 'true';

  return ({
    mode: isProduction ? 'production' : 'development',

    // This is necessary because Figma's 'eval' works differently than normal eval
    devtool: isProduction ? false : 'inline-source-map',

    entry: {
      ui: './src/app/index.tsx', // The entry point for your UI code
      code: './src/plugin/index.ts', // The entry point for your plugin code
    },

    module: {
      rules: [
        // Converts TypeScript code to JavaScript
        { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },

        // Enables including CSS by doing "import './file.css'" in your TypeScript code
        // { test: /\.css$/, use: ['style-loader', { loader: 'css-loader' }, 'postcss-loader'] },
        { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },

        // Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
        { test: /\.(png|jpg|gif|webp|svg)$/, loader: 'url-loader' },
      ],
    },

    // Webpack tries these extensions for you if you omit the extension like "import './file'"
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    },

    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'), // Compile into a folder called "dist"
    },

    // Tells Webpack to generate "ui.html" and to inline "ui.ts" into it
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/app/index.html',
        filename: 'ui.html',
        chunks: ['ui'],
        cache: false,
      }),
      new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/ui/]),
    ],
    optimization: {
      usedExports: true, //webpack's tree shaking feature.
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            compress: {
              drop_console: isDropConsole,
            },
          },
        }),
      ],
    },
  });
}
