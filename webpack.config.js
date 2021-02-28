const path = require('path')
module.exports={
	entry:path.resolve(__dirname,'./src/index.js'),
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'dist')
	},
	context:__dirname,
	mode:'development',
	resolve:{
		extensions:['.js','.jsx','.css','.less'],
		alias:{
			'@':path.resolve(__dirname,'./src')
		}
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:{
					loader:'babel-loader',
					options:{
						presets:[
							['@babel/preset-env',{target:"defaults"}]
						]
					}
				}
			}
		]
	},
	devServer:{

	},
	plugins:[
	],
	node:{

	},


}