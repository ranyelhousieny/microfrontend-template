const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  devServer: {
    port: 8001,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude:
          /node_modules/,
        use: {
          loader:
            'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin(
      {
        name: 'MFE1',
        filename:
          'remoteEntry.js',

        exposes: {
          './MFE1':
            './index.js',
        },
        remotes: {
          MFE1:
            'MFE1@https://rany.tk/mfe/mfe1/dist/2021Feb27/remoteEntry.js',
        },
      }
    ),
    new HtmlWebpackPlugin({
      template:
        './public/index.html',
    }),
  ],
};