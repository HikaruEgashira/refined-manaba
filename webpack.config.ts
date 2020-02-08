import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import path from 'path';

const config: webpack.Configuration = {
  entry: {
    pc: `./src/page/pc/index.ts`,
    sp: `./src/page/sp/index.ts`
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: 'dist/',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    // libフォルダに、manifest.jsonやicon.pngを置いたので、
    // それが一緒に./distフォルダに吐き出されるようにする
    new CopyPlugin([{ from: './lib', to: './' }])
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          ecma: 6,
          compress: true,
          output: {
            comments: false,
            beautify: false
          }
        }
      })
    ]
  }
};

export default config;
