import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import compression from 'compression';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const environment = process.argv.splice(2)[0];
const host = 'http://localhost';
const port = 3000;
const app = express();
let compiler;
let indexFile;

if (environment === 'development') {
  compiler = webpack(config);
  indexFile = './src/index.html';

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, indexFile));
  });
} else {
  indexFile = './dist/index.html';

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
