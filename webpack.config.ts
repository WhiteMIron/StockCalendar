import path from 'path';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const isDevelopment = process.env.NODE_ENV !== 'production';

const config: Configuration = {
  name: 'stockCalendar',
  mode: isDevelopment ? 'development' : 'production',
  devtool: !isDevelopment ? 'hidden-source-map' : 'eval',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@hooks': path.resolve(__dirname, 'hooks'),
      '@components': path.resolve(__dirname, 'components'),
      '@layouts': path.resolve(__dirname, 'layouts'),
      '@pages': path.resolve(__dirname, 'pages'),
      '@utils': path.resolve(__dirname, 'utils'),
      '@typings': path.resolve(__dirname, 'typings'),
      '@images': path.resolve(__dirname, 'images'),
      '@mockup': path.resolve(__dirname, 'mockup'),
      '@constants': path.resolve(__dirname, 'constants'),
    },
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                // targets: { browsers: ['IE 10'] },
                targets: { browsers: ['last 2 chrome versions'] },

                debug: isDevelopment,
              },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
            [
              '@emotion/babel-preset-css-prop',
              {
                autoLabel: 'dev-only',
                labelFormat: '[local]',
              },
            ],
          ],

          //HOT RELOADING용

          env: {
            development: {
              plugins: [
                ['@emotion', { sourceMap: true, autoLabel: 'dev-only', labelFormat: '[local]' }],
                require.resolve('react-refresh/babel'),
                // '@emotion',
                // {
                //   autoLabel: 'dev-only',
                //   labelFormat: '[local]',
                // },
              ],
            },
            production: {
              plugins: ['@emotion'],
            },
          },
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // write image files under 10k to inline or copy image files over 10k
        test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      // eslint: {
      //   files: "./src/**/*",
      // },
    }),
    new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? 'development' : 'production' }),
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
    }),
    // new webpack.DefinePlugin({
    // 'process.env.PUBLIC_URL': JSON.stringify('http://stock-calendar-bucket.s3-website-us-east-1.amazonaws.com '),
    // }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },
  devServer: {
    historyApiFallback: true, // react router
    port: 3090,
    devMiddleware: { publicPath: '/dist/' },
    static: { directory: path.resolve(__dirname) },
  },
};

if (isDevelopment && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new ReactRefreshWebpackPlugin());
  // config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: true }));
}
if (!isDevelopment && config.plugins) {
  config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
  // config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
}

export default config;
