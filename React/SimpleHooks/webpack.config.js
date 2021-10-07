const path = require('path');

module.exports = {
	mode: 'production', // 当前模式
	entry: './src/PureComponent/index.js', // 入口文件
	output: {
		filename: 'bundle.js', // 打包后文件名
		path: path.resolve(__dirname, 'dist'), // 打包后路径
	},
	module: {
		rules: [
			{
				test: /\.js$/, // 模块匹配规则
				exclude: /node_modules/, // 排除目录
				loader: 'babel-loader',
			}, // 指定 loader
		],
	},
	devtool: 'source-map',
};
