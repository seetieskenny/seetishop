'use strict';

var path = require('path');
var fs = require('fs');
var argv = require('yargs').argv;
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var prod = !!(argv.prod);
var plugins = [
	new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
	new webpack.ProvidePlugin({
        React: "react"
    })
];

if (prod) {
	plugins.push(
		//new webpack.HotModuleReplacementPlugin(),
		//new webpack.NoErrorsPlugin(),
        //new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("../css/[name].css")
    );
}

function getDirFiles(dir) {
	return fs.readdirSync(dir)
  	.filter(function(file) {
        return fs.statSync(path.join(dir, file)).isFile() && path.extname(file) === '.js';
  	});
}

var entries = {
	vendor 	: ['react', 'react-dom', 'react-router', 'classnames', 'lodash', 'alt']
};

var entryDir = './resources/assets/js/pages';
var entryFiles = getDirFiles(entryDir);
entryFiles.map(function(file) {
	entries[ file.replace('.js', '') ] = entryDir + '/' + file;
});

module.exports = {
	debug: !prod,
	devtool: !prod ? 'eval' : '',
	entry: entries,
	output: {
		path: path.join(__dirname, 'public/js'),
		filename: '[name].js'
	},
	resolve: {
        modulesDirectories: ['node_modules']
    },
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
	            exclude: /node_modules/,
	            loader: "babel",
	            query: {
			        plugins: ['transform-runtime'],
			        presets: ['es2015', 'stage-0', 'react'],
		      	}
			},
	        {
	            test: /\.less$/,
	            loader: !prod ? "style!css!autoprefixer?browsers=last 2 version!less" : ExtractTextPlugin.extract('style-loader', 'css?minimize!autoprefixer?browsers=last 2 version!less')
	        },
	        {
	        	test: /\.css$/,
	        	loader: "style!css!autoprefixer?browsers=last 2 version"
	        }
		]
	},
	plugins: plugins
};