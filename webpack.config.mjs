import path from 'path';

export default {
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: path.resolve("./dist"),
    hot: true,
  },
  devtool: 'source-map',
};
