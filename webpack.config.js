module.exports = {
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
    contents: './src/js/contents.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/extension/src',
  }
};