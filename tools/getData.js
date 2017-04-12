const contentful = require('contentful');
const fs = require('fs');

const SPACE_ID = 'lyfpmhpuuunf';
const ACCESS_TOKEN = 'e47209d752faee22737835b186ff613d40c4cd0a592cf99b2301d2a4671c9781';

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
    let data = entries.items.map(entry => {
      _writeFile(entry.fields.filename, entry.fields);
    });
  })
  .catch(error => {
    console.log(error);
  });
};


  })
  .catch(error => {
    console.log(error);
  });
};

_getProjectData('featuredWorkContainer');
_getProjectData('otherWorkContainer');
_getWorkDetailData('introduction');
_getWorkDetailData('hero');
