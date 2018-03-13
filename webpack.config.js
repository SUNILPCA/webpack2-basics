var path = require('path');

module.exports = { 
   //entry point for webpack
   entry: './src/js/app.js',
   //out put path/file
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist'
   },
    module: {
      rules: [
          {
              test: /\.css$/,
              use: [
                  'style-loader',
                  'css-loader'

              ]
          }
      ]
    },
}
