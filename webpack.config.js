const path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	OptimizeJsPlugin = require('optimize-js-plugin');


const plugins = [
	new HtmlWebpackPlugin({
		template: './client/source/index.html',
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
		entry: './client/source/index.js',
		output: {
			path: path.resolve(__dirname, 'client/distribution'),
			filename: 'app.bundle.js'
		},
		optimization: {
			minimize: minimize,	
		},
		plugins: plugins,
		devServer: {
			historyApiFallback: true,
			proxy: {
				'/socket.io': {
					target: 'http://localhost:3000',
					ws: true
				},
				'/rest-api': {
					target: 'http://localhost:3000',
					pathRewrite: {'^/rest-api' : ''}
				} 
			},
		},
		resolve: {
			alias: {
				InternalApi$: path.resolve(__dirname, 'client/source/application/internal-api-provider.js'),
				Utils$: path.resolve(__dirname, 'client/source/utils'),
				Constants$: path.resolve(__dirname, 'client/source/constants')
			}
		},
		devtool: "source-map",
		module: {
			rules: [
				{
					test: /\.js$/,
					//exclude
					loader: 'babel-loader',
					//include
					//loader
					//rules
					options: {
						plugins: env !== 'production' ? ["react-hot-loader/babel"] : []
					}
				},
				{
					test: /\.css$/,
					use: [
						{ 
							loader: 'style-loader' 
						},
						{
							loader: 'css-loader',
							options: {
								modules: false,
								sourceMap: true
							}
						}
					]	
				},
				{
					test: /\.scss$/,
					use: [
						{ 
							loader: 'style-loader' 
						},
						{
							loader: 'css-loader',
							options: {
								modules: false,
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: [
							{
								loader: 'file-loader',
								options: {
									name: '[name].[ext]',
									context: path.resolve(__dirname, 'client/source/images'),
									outputPath: 'dist/',
									publicPath: 'src/public/',
									useRelativePath: false
								}
							}
					]
				}
			]
		}	
	}
};