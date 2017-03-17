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
  indexFile = path.join(compiler.outputPath, 'index.html');

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    }
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  app.get('*', (request, response, next) => {
    compiler.outputFileSystem.readFile(indexFile, (error, result) => {
      if (error) {
        return next(error);
      }
      response.set('content-type', 'text/html');
      response.send(result);
      response.end();
    });
  });
} else {
  indexFile = path.join(compiler.outputPath, 'index.html');

  app.use(compression());
  app.use(express.static('dist'));

  app.get('*', (request, response, next) => {
    compiler.outputFileSystem.readFile(indexFile, (error, result) => {
      if (error) {
        return next(error);
      }
      response.set('content-type', 'text/html');
      response.send(result);
      response.end();
    });
  });
}

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    open(`${host}:${port}`);
  }
});
