import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import config from './webpack.config.dev';

/* eslint-disable no-console */

const host = 'http://localhost';
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    open(`${host}:${port}`);
  }
});
