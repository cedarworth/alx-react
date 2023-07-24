const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		header: path.resolve(__dirname, 'modules/header/header.js'),
		body: path.resolve(__dirname, 'modules/body/body.js'),
		footer: path.resolve(__dirname, 'modules/footer/footer.js'),
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(?:ico|gif|png|jpe?g|svg)$/i,
				type: 'asset/resource',
				use: [
					"file-loader",
					{
						loader: "image-webpack-loader",
						options: {
							bypassingOnDebug: true,
							disable: true,
							mozjpeg: {
								progressive: true,
							},
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.9],
								speed: 4,
							},
							gifsicle: {
								interlaced: false,
							},
							webp: {
								quality: 75,
							},
						},
					},
				],
			},
		],
	},
	performance: {
		maxAssetSize: 1000000,
	},
	plugins: [
		new HTMLWebpackPlugin({
			filename: './index.html',
		}),
		new CleanWebpackPlugin(),
	],
	devtool: 'inline-source-map',
	optimization: {
		minimizer: [new TerserPlugin()],
		splitChunks: {
			chunks: 'all',
		},
	},
	devServer: {
		static: path.join(__dirname, 'public'),
		contentBase: path.join(__dirname, './public'),
		compress: true,
		open: true,
		port: 8564,
	},

};



// {
// 			import: './modules/header/header.js',
// 		dependOn: 'shared',
// 		},
// body: {
// 			import: './modules/body/body.js',
// 		dependOn: 'shared',
// 		},
// footer: {
// 			import: './modules/footer/footer.js',
// 		dependOn: 'shared',
// 		},
// shared: 'jquery',
// 	},