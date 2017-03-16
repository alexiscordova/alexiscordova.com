const express = require('express');
const webpack = require('webpack');
const path = require('path');
const open = require('open');
const compression = require('compression');
const config = require('../webpack.config.dev');

/* eslint-disable no-console */

const host = 'http://localhost';
const port = 3000;
const app = express();
const environment = app.get('env');
let compiler;
let indexFile;

if (environment === 'development') {
  compiler = webpack(config);
  indexFile = '../src/index.html';

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    }
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, indexFile));
  });
} else {
  indexFile = '../dist/index.html';

  app.use(compression());
  app.use(express.static('dist'));

  app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, indexFile));
  });
}

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    open(`${host}:${port}`);
  }
});
