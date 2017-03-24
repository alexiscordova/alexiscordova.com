const webpack = require('webpack');
const config = require('../webpack.config.prod');
const chalk = require('chalk');

/* eslint-disable no-console */

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production…'))

webpack(config).run((error, stats) => {
  if (error) {
    console.log(chalk.red(error));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map((error) => {
      console.log(chalk.red(error));
    });
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map((warning) => {
      console.log(chalk.yellow(warning));
    });
  }

  console.log(`Webpack stats: ${stats}`);

  console.log(chalk.green('Your app has been build successfully!'));

  return 0;
});
