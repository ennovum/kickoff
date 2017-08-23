const process = require('process');

const confName = process.npm_package_config_conf || 'default';
const conf = require('./conf/' + confName + '.js');

module.exports = conf;
