var path = require('path');
var webpack = require('webpack');
var dotenv = require('dotenv');

var {CleanWebpackPlugin} = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// PostCss
var autoprefixer = require('autoprefixer');
var postcssVars = require('postcss-simple-vars');
var postcssImport = require('postcss-import');

module.exports = (env) => {
    const fileDefines = dotenv.config({
        path: env.DEFINE_PATH
    }).parsed;
    const envDefines = {
        // process.env.NODE_ENV is handled by webpack mode config.
    };
    const defines = {...fileDefines, ...envDefines};
    const stringifiedDefines = Object.entries(defines).reduce((accumulator, entry) => {
        accumulator[entry[0]] = JSON.stringify(entry[1]);
        return accumulator;
    }, {});

    console.info('Definitions:');
    console.info(stringifiedDefines);

    return {
        devServer: {
            contentBase: path.resolve(__dirname, 'build'),
            host: '0.0.0.0',
            port: 3000,
            open: 'http://localhost:3000'
        },
        entry: {
            'lib.min': ['react', 'react-dom'],
            'mypacman': ['./src/index.tsx']
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[chunkhash].js'
        },
        resolve: {
            symlinks: false,
            extensions: ['.ts', '.tsx', '.js']
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                loader: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            }, {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    publicPath: "/",
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]_[local]_[hash:base64:5]',
                                context: path.resolve(__dirname, 'src'),
                            },
                        }
                    }, {
                        loader: "less-loader",
                        options: { javascriptEnabled: true }
                    }]
                })
            }, {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '[name]_[local]_[hash:base64:5]',
                            context: path.resolve(__dirname, 'src'),
                        },
                        modules: true,
                        importLoaders: 1,
                        localsConvention: 'camelCase'
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: function () {
                            return [
                                postcssImport,
                                postcssVars,
                                autoprefixer({
                                    browsers: ['last 3 versions', 'Safari >= 8', 'iOS >= 8']
                                })
                            ];
                        }
                    }
                }]
            }, {
                test: /\.(svg|png|wav|gif|jpg)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'static/assets/'
                }
            }]
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendors: {
                        test: /node_modules[\\/]/,
                        name: 'vendors',
                        minChunks:1,
                        priority: -10,
                    }
                }
            }
        },
        plugins: [
            new webpack.DefinePlugin(stringifiedDefines),
            new webpack.ProgressPlugin({
                profile: true
            }),
            new HtmlWebpackPlugin({
                chunks: ['lib.min', 'mypacman', 'vendors' ],
                chunksSortMode: 'manual',
                template: 'src/index.ejs',
                title: 'Pacman'
            }),
            new ExtractTextPlugin('css/[name].[chunkhash].css'),
            new CopyWebpackPlugin([{
                from: 'static',
                to: 'static'
            }]),
            new CleanWebpackPlugin()
        ]
    };
};