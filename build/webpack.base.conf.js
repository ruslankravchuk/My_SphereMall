const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Poliphild = require('@babel/polyfill');
const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
};
const PAGES_DIR = PATHS.src
const PAGES = 
   fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.html'))

module.exports = {

  externals: {
             paths: PATHS 
              }, 
  entry: {app: PATHS.src},
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/'
  },
  
       module: {
             rules: [
                  { test: /\.(js|jsx)$/, 
                  exclude: '/node_modules/', 
                  use: [{
                         loader:  "babel-loader",
                         options: {presets: ["@babel/preset-env"]} 
                         }]}, 

      {test: /\.sass$/,
       use: [
        'style-loader',
         MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: './postcss.config.js' } }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
          }]},

       { test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
                  name: '[name].[ext]'
              }},


              { test: /\.css$/,
                 use: [
                 'style-loader',
                  MiniCssExtractPlugin.loader,
               {loader: 'css-loader',
                options: { sourceMap: true }
                  }, 
                {loader: 'postcss-loader',
                options: { sourceMap: true, config: { path: './postcss.config.js' } }
                     }]}
                  ]},

    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`,
        }),
        
        new CopyWebpackPlugin([
            { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
            { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` }
           
        ]),

       ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page}`
        }))
  ]

}






// module.exports = (env, options) => {

//   let production = options.mode === 'production';
//   conf.devtool = production ? 'sorce-map'
//                             : 'eval-sourcemap';

// return conf
// }