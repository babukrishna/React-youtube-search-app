const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry:['./app/index.js'],

	output:{
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},

	module: {
		loaders:[
			{
				test: /.\js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{ 	
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("css-loader")
			}/*,
		    { 
		        test: /\.png$/, 
		        loader: "url-loader?limit=100000" 
		    },
		    { 
		        test: /\.jpg$/, 
		        loader: "file-loader" 
		    },
		    {
		        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'url?limit=10000&mimetype=application/font-woff'
		    },
		    {
		        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'url?limit=10000&mimetype=application/octet-stream'
		    },
		    {
		        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'file'
		    },
		    {
		        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'url?limit=10000&mimetype=image/svg+xml'
		    }*/
		]
	},
	
	plugins: [
    	new ExtractTextPlugin("css/style.css")
  	],

	devServer:{
		port: 3000,
		contentBase: './build',
		inline: true
	}
}