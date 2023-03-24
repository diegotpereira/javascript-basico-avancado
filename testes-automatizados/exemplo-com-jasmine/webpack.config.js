module.exports = {
    entry: {
      app: './src/app.js',
      spec: './src/app.spec.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    // outras configurações
  };