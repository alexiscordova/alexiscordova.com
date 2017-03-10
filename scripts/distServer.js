import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const host = 'http://localhost';
const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    open(`${host}:${port}`);
  }
});
