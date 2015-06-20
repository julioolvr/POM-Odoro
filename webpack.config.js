module.exports = {
  entry: './src/js/index.jsx',
  output: {
    path: './build/',
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.html$/,
      loader: 'file?name=[path][name].[ext]&context=src'
    }]
  },
  devtool: "#inline-source-map"
};
