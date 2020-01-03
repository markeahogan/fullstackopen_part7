
const webpack = require('webpack');
const path = require('path');

const config = (env, argv) => {

    const backend_url = argv.mode === 'production' ?
        'https://heroku' :
        'http://localhost:3001';

    return {
        entry:'./src/index.js',
        output:{
            path:path.resolve(__dirname, 'build'),
            filename:'main.js'
        },
        devServer: {
          contentBase: path.resolve(__dirname, 'build'),
          compress: true,
          port: 3000,
        },
        module:{
            rules:[
                {
                    test:/\.js$/,
                    loader:'babel-loader',
                    query:{
                        presets:['@babel/preset-react']
                    }
                },
                {    
                    test:/\.css$/,
                    loaders:['style-loader','css-loader']
                }
            ]
        },
        plugins:[
            new webpack.DefinePlugin({
                BACKEND_URL: JSON.stringify(backend_url)
            })
        ]
    }
}

module.exports = config;