const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin=require('write-file-webpack-plugin');
module.exports = {
    entry : {
       './public/script.js': './js/project.jsx',
       './public/css/style.css~' : './sass/style.scss'
      
   },
   output : {
       path: __dirname+'/',
       filename: '[name]',
       publicPath: 'public/'
   },
   devServer: {
      inline: true,
      contentBase: './',
      port: 3001
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/, 
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-2', 'react'] }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })

            },

             {
              test: /\.(png|jpg|gif)$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: 'file-loader',
                  options: {}
                }
              ]
            }
        ]
    },
    plugins: [
       new ExtractTextPlugin('./public/css/style.css'),
       new WriteFilePlugin ()
       
       

   ]
};