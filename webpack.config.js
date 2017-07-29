const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist'),
};

const commonConfig = {
    entry: {
        bundle: PATHS.src + '/entry.js',
    },
    output: {
        path: PATHS.dist,
        filename: '[name].js',
        // for split the [name].js
        chunkFilename: '[name].[chunkhash:5].chunk.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            // minify: true,
            inject: 'body',
            chunks: ['bundle'],
        }),
        new ExtractTextPlugin({
            filename: '[name].css'
        })
    ],

    externals: {
        'jquery': 'jQuery'
        // 'react': 'React'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                    // options: {   //Already declare in .babelrc
                    //     presets: ['env']
                    // }
                }
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }, { // 大余10KB的文件不会被打包进js里面，会直接输出到output目录。
                test: /.(png|jpg|jpeg|gif)$/,
                use: ['file-loader?name=img/[hash:8].[name].[ext]']
            }, {
                test: /\.(eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: ['url-loader?limit=10000&name=font/[hash:8].[name].[ext]']
            }
        ]
    },

    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src')
        },
        extensions: ['.js']
    }
};

function developmentConfig() {
    const config = {
        watch: true,
        devServer: {
            historyApiFallback: true, //404s fallback to ./index.html
            // hotOnly:true, 使用hotOnly和hot都可以
            hot: true,
            stats: 'errors-only', //只在发生错误时输出
            overlay: { //当有编译错误或者警告的时候显示一个全屏overlay
                errors: true,
                warnings: true,
            },
            proxy: {
                '/api': {
                    target: 'http://localhost:8888/',
                    // target: 'http://zimu4show.cn:8080/ehealth5a-api/',
                    pathRewrite: {'^/api': ''},
                    changeOrigin: true,
                    secure: false
                }
            }
        }
    };
    return Object.assign(
        {},
        commonConfig,
        config
        // {
        //     plugins: commonConfig.plugins.concat(config.plugins),
        // }
    );
}

module.exports = function (env) {
    console.log("env=", env);
    if (env == 'development') {
        return developmentConfig();
    }
    return commonConfig;
};

