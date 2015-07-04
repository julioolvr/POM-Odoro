var cssLoader = {
  test: /\.css$/
};

var staticFileLoader = 'file?name=[path][name].[ext]&context=src';

if (process.env.BUILD) {
  cssLoader.loader = staticFileLoader;
} else {
  cssLoader.loader = 'style-loader!css-loader';
}

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
    }, cssLoader, {
      test: /\.wav$/,
      loader: staticFileLoader
    }]
  },
  devtool: '#inline-source-map'
};
