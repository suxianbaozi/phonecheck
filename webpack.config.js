const path = require('path');

module.exports = {
	entry: './src/brandua.js',
	output: {
		filename: 'brandua.min.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: "umd"
	},
	module: {
		"rules": [
		]
	}
};