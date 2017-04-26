const contentful = require('contentful');
const fs = require('fs');
const auth = require('../contentful-auth.json');
const SPACE_ID = auth.space_id;
const ACCESS_TOKEN = auth.access_token;
const dataDir = 'src/data';

/* eslint-disable no-console */
let client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

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
  getProjectData('featuredWorkContainer');
  getProjectData('otherWorkContainer');
  getWorkDetailData('introduction');
  getWorkDetailData('hero');
  getWorkDetailData('about');
  getScreenshotData();
};

init();
