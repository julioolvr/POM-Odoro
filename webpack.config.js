module.exports = {
  entry: {
    js: './src/js/index.jsx',
    css: './src/css/app.css',
    html: './src/index.html'
  },
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
      test: [/\.html$/, /\.css$/],
      loader: 'file?name=[path][name].[ext]&context=src'
    }]
  },
  devtool: "#inline-source-map"
};
