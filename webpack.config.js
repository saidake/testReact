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
		extensions:['.js','.jsx'],
		alias:{
			'@':path.resolve(__dirname,'./src')
		}
	},
	module:{
		rules:[

		]
	},
	devServer:{

	},
	plugins:[
	],
	node:{

	},


}