const webpack = require('webpack');
const env = require('../env.js');

const conf = {};

conf.babel = {
    presets: [['env', {
        targets: {
            browsers: ['last 2 versions', '> 5%']
        }
    }]]
};

conf.webpack = {
    context: env.srcDir,
    target: 'web',
    entry: {
        'index.js': env.srcDir + '/index.js'
    },
    output: {
        path: (env.isDevelopment ? env.devDir : env.buildDir),
        filename: '[name]'
    },
    module: {
        rules: [{
            test: /(\.js)$/,
            exclude: [],
            use: [{
                loader: 'babel-loader',
                options: conf.babel
            }, {
                loader: 'eslint-loader'
            }]
        }, {
            test: /(\.ts)$/,
            exclude: [],
            use: [{
                loader: 'ts-loader',
                options: {}
            }, {
                loader: 'tslint-loader'
            }]
        }, {
            test: /(\.html)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }]
        }, {
            test: /(\.css)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }, {
                loader: 'postcss-loader',
                options: {
                    sourceMap: env.isDevelopment ? 'inline' : false
                }
            }]
        }]
    },
    resolve: {
        modules: [
            env.srcDir,
            'node_modules'
        ],
        extensions: ['.js', '.ts', '.json', '.html'],
        alias: {
            'conf': env.rootDir + '/conf.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env.name)
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: env.isProduction,
            mangle: env.isProduction,
            warnings: env.isDevelopment,
            output: {
                comments: false,
                beautify: env.isDevelopment
            },
            sourceMap: env.isDevelopment
        })
    ],
    devtool: env.isDevelopment ? 'inline-cheap-source-map' : false,
    bail: false,
    devServer: {
        contentBase: env.rootDir,
        port: 9000,
        open: false,
        compress: true
    }
};

conf.postcss = {
    plugins: {
        'postcss-import': {
            root: env.rootDir,
            path: env.srcDir,
            skipDuplicates: true
        },
        'postcss-extend': {},
        'postcss-mixins': {},
        'postcss-cssnext': {
            browsers: ['last 2 versions', '> 5%'],
        },
        'stylelint': {}
    }
};

module.exports = conf;
