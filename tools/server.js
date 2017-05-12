/* eslint-disable no-console */
const express = require('express')
const webpack = require('webpack')
const path = require('path')
const open = require('open')
const compression = require('compression')
const chalk = require('chalk')
const host = 'http://localhost'
const port = 3000
const app = express()
const environment = app.get('env')


if (environment === 'development') {
  const config = require('../webpack.config.dev')
  const compiler = webpack(config)
  const indexFile = path.join(compiler.outputPath, 'index.html')

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    }
  }))

  app.use(require('webpack-hot-middleware')(compiler))

  app.get('*', (request, response, next) => {
    compiler.outputFileSystem.readFile(indexFile, (error, result) => {
      if (error) return next(error)

      response.set('content-type', 'text/html')
      response.send(result)
      response.end()
    })
  })

  compiler.plugin('invalid', filename => {
    console.log(chalk.green('FILE CHANGED:'), chalk.blue.underline(filename))
  })
} else if (environment === 'production') {
  app.use(compression())
  app.use(express.static('dist'))

  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
  })
} else {
  console.log('NODE_ENV not set!')
}

app.listen(port, error => {
  if (error) {
    console.log(error)
  } else {
    console.log(chalk.green(`Listening on ${host}:${port}…`))
    open(`${host}:${port}`)
  }
})

module.exports = app
