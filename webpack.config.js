var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var outputPath = path.join(__dirname, './build');
var entryPath = {
    scripts: __dirname + '/src/public/scripts/',
    css: __dirname + '/src/public/stylesheets/*.css',
};
var htmlPath = path.join(__dirname,'./src/views');
var webpackConfig = {
    entry: {
        index: entryPath.scripts + 'init',
    },
    output: {
        path: outputPath,
        filename: 'public/scripts/[name]-[chunkhash:5].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: [
                __dirname + '/src/public'
            ],
            loader: 'babel', // 'babel-loader' is also a valid name to reference
            // query: {
            //     presets: ['es2015', 'stage-0'],
            //     plugins: ['transform-runtime']
            // }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                "style-loader", "css-loader"
            )
        }, {
            test: /\.html/,
            loader: 'html',
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'public/scripts/[name].[chunkhash:5].bundle.js'
        }),
        new HtmlWebpackPlugin({
            filename: 'views/index.html',
            template: './src/views/index.html',
            // minify: {
            //     removeCommets: true,
            //     collapseWhitespace: true
            // }
        }),
        new HtmlWebpackPlugin({
            filename: 'views/layout.html',
            template: './src/views/layout.html'
        }),
        new ExtractTextPlugin("public/stylesheets/[name].[chunkhash:5].css"), //css
        new webpack.optimize.OccurrenceOrderPlugin(true)
    ],
    resolve: {
        extensions: ['', ".js", '.css']
    },
    babel: {
        presets: ['es2015', 'stage-3'],
        plugins: ['transform-runtime']
    }
};
console.log(htmlPath);
// webpackConfig.plugins.push
module.exports = webpackConfig;