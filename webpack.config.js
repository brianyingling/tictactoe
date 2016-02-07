const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const cwd = process.cwd();
const npmRoot = __dirname + '/node_modules';


module.exports = {
	entry: {
		vendor: './src/app/ts/vendor.ts',
		bundle: [
			'webpack-dev-server/client?http://0.0.0.0:8080',
			'./src/app/ts/app.ts'
		]
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].js',
		publicPath: '/'
	},
	module: {
		preLoaders: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			}
		],
		loaders: [
			{
				test: /\.styl$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader'),
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template: path.join(__dirname + '/dist', '/index.html')}),
		new ExtractTextPlugin('styles.css')
	],
	resolve: {
		extensions: ['', '.js', '.ts']
	}
};