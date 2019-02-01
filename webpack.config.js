const path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	OptimizeJsPlugin = require('optimize-js-plugin');

const plugins = [
	new HtmlWebpackPlugin({
		template: 'client/index.html',
		filename: 'index.html',
		inject: 'body'
	})
]

//webpack.config.js
module.exports = (env) => {
	const environment = env || 'production';
	let minimize = false;

	if (environment === 'production') {
		plugins.push(
			new OptimizeJsPlugin({
				sourceMap: false
			})
		)
		minimize = true;
	}
	return {
		mode: environment,
		entry: './client/index.js',
		output: {
			path: path.resolve(__dirname, 'public'),
			filename: 'app.bundle.js'
		},
		optimization: {
			minimize: minimize,	
		},
		plugins: plugins,
		devServer: {
			proxy: {
				'/api': 'http://localhost:3000'
			}
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					options: {
						plugins: env !== 'production' ? ["react-hot-loader/babel"] : []
					}
				},
				{
					test: /\.css$/,
					use: [
						{ loader: 'style-loader' },
						{
							loader: 'css-loader',
							options: {
								modules: true
							}
						}
					]
				}
			]
		}	
	}
};