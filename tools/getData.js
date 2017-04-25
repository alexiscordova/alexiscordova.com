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

// Filter out projects flagged as "not visible" (or hidden)
let _getVisibleProjects = (entries) => {
  let projects = entries.items[0].fields.modules,
      data = [];

  projects.forEach(project => {
    if (project.fields.isVisible) {
      data.push(project.fields);
    }
  });

  return data;
};

// Write file to data directory
let _writeFile = (filename, data) => {
  if (!fs.existsSync(`${dataDir}`)) {
    fs.mkdirSync(`${dataDir}`);
  }

  fs.writeFileSync(`${dataDir}/${filename}`, JSON.stringify(data));
};

// Get project data from Contentful
let _getProjectData = (contentType) => {
  client.getEntries({
    'content_type': contentType
  })
  .then(entries => {
    let filename = entries.items[0].fields.filename,
        data;

    data = _getVisibleProjects(entries);

    _writeFile(filename, data);
  })
  .catch(error => {
    console.log(error);
  });
};

// Get Work Detail data
let _getWorkDetailData = (contentType) => {
  client.getEntries({
    'content_type': contentType
  })
  .then(entries => {
    entries.items.map(entry => {
      _writeFile(entry.fields.filename, entry.fields);
    });
  })
  .catch(error => {
    console.log(error);
  });
};

let _getScreenshotData = () => {
  client.getEntries({
    'content_type': 'screenshotContainer'
  })
  .then(entries => {
    let data,
        modules,
        filename;

    entries.items.forEach(entry => {
      modules = entry.fields.modules;
      filename = entry.fields.filename;

      data = modules.map(module => {
        return module.fields;
      });

      _writeFile(filename, data);
    })
  })
  .catch(error => {
    console.log(error);
  });
};

_getProjectData('featuredWorkContainer');
_getProjectData('otherWorkContainer');
_getWorkDetailData('introduction');
_getWorkDetailData('hero');
_getWorkDetailData('about');
_getScreenshotData();
