const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const regeneratorRuntime = require("regenerator-runtime");
const devWebpackConfig = merge(baseWebpackConfig, {

    mode: "development",
    devtool: "cheap-module-eval-source-map",   
    devServer: {  
      contentBase: baseWebpackConfig.externals.paths.dist,  
      port: 8081,
       overlay: {
                warnings: true,
                errors: true 
                }

            },
module: {
             rules: [
                      { test: /\.(js|jsx)$/, 
                  exclude: '/node_modules/', 
                      use: [ 
                                  { 
                               loader:  "babel-loader",                  
                               options: {presets: ['@babel/react',{
                        'plugins': ['@babel/plugin-proposal-class-properties' 
                                                                        ]}]
                                        }                                 
                    }]}
             ]
           },
    plugins: [
        new webpack.SourceMapDevToolPlugin ({
            filename: '[file].map'
        })

    ]


})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
 
})   




