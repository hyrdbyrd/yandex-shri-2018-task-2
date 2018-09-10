const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const DIST_PATH = path.join(__dirname, 'public').replace(/\\/g, '/');
const { backend } = require('./server/');

module.exports = {
    mode: devMode ? 'development' : 'production',
    devtool: devMode ? 'source-map' : null,
    watch: devMode,
    entry: ['babel-polyfill', path.join(__dirname, 'src/index.js')],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: DIST_PATH,
        compress: true,
        port: 9000,
        before: backend
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                    'eslint-loader'
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
                                    stage: 2,
                                    browsers: ['ie >= 10', 'last 2 version']
                                }),
                                require('precss')(),
                                require('postcss-assets')({
                                    basePath: DIST_PATH,
                                    loadPaths: ['images/']
                                }),
                                require('postcss-preset-env')({
                                    stage: 2,
                                    browsers: ['ie >= 10', 'last 2 version']
                                })
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
};