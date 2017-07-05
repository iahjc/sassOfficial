var path = require("path");
var webpack = require("webpack");

var env = process.env.MODE_ENV;

var config = {
	entry:{
		main:"./scripts/main.js"
	},
	plugins:[],
	output:{
		path:path.join(__dirname,"dist"),
		publicPath:"/dist/",
		filename:"[name].bundle.js"
	},
	module:{
		loaders:[
			{
				test:/images/,
				loader:'file-loader'
			},
			{
				test:'/\.scss$/',
				loader:'style-loader!css-loader!sass-loader'
			},
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:'babel-loader'
			}
		]
	}
};


if(env === "production"){
	config.plugins = config.plugins.concat(
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings:false
			}
		});
	);
}


module.exports = config;