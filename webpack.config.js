const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = env => {
  const isProduction = !(env && env.dev);
  const compileENV = env && env.dev ? 'development' : 'production';
  return {
    mode: compileENV,
    entry: {
      'veweSwitch.min.js': path.resolve(__dirname, 'src/js/veweSwitch.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name]',
      chunkFilename: '[id]',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
        },
      ]
    },
    optimization: {
      nodeEnv: compileENV,
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            extractComments: 'all',
            warnings: !isProduction,
          },
        }),
      ],
    },
    stats: {
      colors: true,
      hash: true,
      timings: true,
      assets: true,
      chunks: true,
      chunkModules: true,
      modules: true,
      children: true,
    },
  }
};
