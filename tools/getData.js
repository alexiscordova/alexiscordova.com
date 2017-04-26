const contentful = require('contentful');
const fs = require('fs');
const rmdir = require('rimraf');
const chalk = require('chalk');
const auth = require('../contentful-auth.json');
const SPACE_ID = auth.space_id;
const ACCESS_TOKEN = auth.access_token;
const dataDir = 'src/data';

/* eslint-disable no-console */
let client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

// Clear dataDir
let _clearDataDir = () => {
  if (fs.existsSync(`${dataDir}`)) {
    console.log(`Cleaning directory: ${chalk.underline(dataDir)}`);

    rmdir(`${dataDir}`, error => {
      if (error) console.log(error);
    });
  }
};

// Filter out hidden items
let _getVisibleData = (entries) => {
  let data = [];

  entries.forEach(entry => {
    if (entry.fields.isVisible) {
      data.push(entry.fields);
    }
  });

  return data;
};

// Write file to dataDir
let _writeFile = (filename, source) => {
  if (!fs.existsSync(`${dataDir}`)) {
    fs.mkdirSync(`${dataDir}`);
  }

  fs.writeFileSync(`${dataDir}/${filename}`, JSON.stringify(source, null, 2));
};

// Get project data
let getProjectData = (contentType) => {
  client.getEntries({
    'content_type': contentType
  })
  .then(entries => {
    let filename = entries.items[0].fields.filename,
        source = entries.items[0].fields.modules,
        data = _getVisibleData(source);

    _writeFile(filename, data);
  })
  .catch(error => console.log(error));
};

// Get Work Detail data
let getWorkDetailData = (contentType) => {
  client.getEntries({
    'content_type': contentType
  })
  .then(entries => {
    let source = entries.items,
        data = _getVisibleData(source);

    data.map(entry => {
      let filename = entry.filename;

      _writeFile(filename, entry);
    });
  })
  .catch(error => console.log(error));
};

// Get screenshot data
let getScreenshotData = () => {
  client.getEntries({
    'content_type': 'screenshotContainer'
  })
  .then(entries => {
    let source,
        modules,
        filename;

    entries.items.forEach(entry => {
      modules = entry.fields.modules;
      filename = entry.fields.filename;

      source = _getVisibleData(modules);

      _writeFile(filename, source);
    });
  })
  .catch(error => console.log(error));
}

// Get all data
let init = () => {
  let promise = new Promise((resolve, reject) => {
    reject(new Error('Something bad happened that really shouldn’t have'));
    resolve();
  });

  promise.then(() => {
    _clearDataDir();
  })
  .then(() => {
    getProjectData('featuredWorkContainer');
    getProjectData('otherWorkContainer');
    getWorkDetailData('introduction');
    getWorkDetailData('hero');
    getWorkDetailData('about');
    getScreenshotData();
  })
  .then(() => {
    console.log(chalk.green('Data fetching complete.'));
  })
  .catch(error => console.log(error));
}

init();
