const path = require('path');
const process = require('process');

const DIR_SRC = '/src';
const DIR_DEV = '/dev';
const DIR_BUILD = '/build';

const rootDir = path.resolve(__dirname);
const srcDir = path.resolve(rootDir + DIR_SRC);
const devDir = path.resolve(rootDir + DIR_DEV);
const buildDir = path.resolve(rootDir + DIR_BUILD);

const ENV_PRODUCTION = 'production';
const ENV_DEVELOPMENT = 'development';

const name = process.env.NODE_ENV;
const isProduction = (name === ENV_PRODUCTION);
const isDevelopment = (name === ENV_DEVELOPMENT);

module.exports = {
    rootDir: rootDir,
    srcDir: srcDir,
    devDir: devDir,
    buildDir: buildDir,
    name: name,
    isProduction: isProduction,
    isDevelopment: isDevelopment
};
