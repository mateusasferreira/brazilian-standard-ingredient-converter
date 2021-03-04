const path = require('path');

module.exports = {
  entry: {
    main:'./main.js',
    ingrediente: './ingrediente.js',
    medida: './medida.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
};