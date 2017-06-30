const path = require('path');

module.exports = {
	entry: {
		main: './Resources/Private/Fusion/Root.js'
	},
	output: {
		filename: '[name].min.js',
		path: path.join(process.cwd(), 'Resources/Public/JavaScript')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader'
					}
				],
				exclude: [/node_modules/]
			}
		]
	}
};
