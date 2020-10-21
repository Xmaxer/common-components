// @ts-ignore
const packageJson = require('../package.json');
import fse from 'fs-extra';
import path from 'path';

packageJson.devDependencies = {};
packageJson.scripts = {};
packageJson.main = 'index.js';
packageJson.files = ['*'];
packageJson.types = '.index.d.ts';

fse.writeJSONSync(
    path.resolve(__dirname, '../build/package.json'),
    packageJson
);
