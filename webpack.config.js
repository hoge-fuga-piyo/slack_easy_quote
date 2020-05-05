module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      } 
    ]
  },
  entry: {
    options: './src/js/options.js',
    contents: './src/js/contents.js',
    backgrounds: './src/js/backgrounds.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/extension/src',
  }
};