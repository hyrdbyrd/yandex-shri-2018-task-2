const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const DIST_PATH = path.join(__dirname, 'dist').replace(/\\/g, '/');

module.exports = {
  mode: devMode ? 'development' : 'production',
  devtool: devMode ? 'source-map' : null,
  watch: devMode,
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: DIST_PATH
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ["env"] }
          }
        ]
      },
      {
        test: /\.sss$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
          }, {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              parser: 'sugarss',
              plugins: loader => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('autoprefixer')({
                  browsers: ['ie >= 8', 'last 4 version']
                }),
                require('precss')()
              ]
            }
          }
        ]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]' /*devMode ? '[hash].[ext]' : '[name].[ext]'*/ ,
              outputPath: '/images'
            }
          }
        ]
      }
    ]
  },
}