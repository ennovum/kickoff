const buildconf = require('./buildconf.js');
const postcssConfig = Object.assign({}, buildconf.postcss); // clone as `postcss-load-config` mutates it's input

module.exports = postcssConfig;
