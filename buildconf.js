const process = require('process');

const buildconfName = process.npm_package_config_buildconf || 'default';
const buildconf = require('./buildconf/' + buildconfName + '.js');

module.exports = buildconf;
