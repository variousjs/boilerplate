const { resolve, join } = require('path')

const { ENTRY } = process.env

const config = {
  entry: join(__dirname, ENTRY),
  output: {},
  target: ['web', 'es5'],
  externals: {
    react: {
      root: 'React',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      amd: 'react-dom',
    },
    'react-router-dom': {
      root: 'ReactRouterDOM',
      amd: 'react-router-dom',
    },
    nycticorax: {
      root: 'Nycticorax',
      amd: 'nycticorax',
    },
  },
  mode: 'production',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-typescript',
              ['@babel/preset-env', {
                targets: ['defaults'],
                modules: false,
              }],
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
}

const name = ENTRY.split('/').slice(-1)[0].split('.')[0]

config.output = {
  path: resolve(__dirname, './docs/dist'),
  filename: `${name}.js`,
  libraryTarget: 'amd',
}

module.exports = config
