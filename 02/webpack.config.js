const path = require('path');

console.log('webpack.config');
console.log('dirname: ', __dirname);
const appDir = path.resolve(__dirname, 'app');
console.log('app dir', appDir);
const buildDir = path.resolve(__dirname, 'build');
console.log('build dir', buildDir);

module.exports = {
  entry: {
    // app: path.resolve(__dirname, 'app' , 'index.js')
    app: appDir,
  },
  output: {
    filename: 'app.js',
    path: buildDir,
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [path.resolve(__dirname, 'node_modules'), appDir],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: appDir,
        exclude: /(node_modules|bower_components)/,
        use: [
          'babel-loader'
        ],
      }
    ]
  },
  devServer: {
    contentBase: 'build',
  }
}
