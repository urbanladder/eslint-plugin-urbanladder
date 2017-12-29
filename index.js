var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var rules = fs.readdirSync(path.resolve(__dirname, 'rules')).map(function (f) {
    return f.replace(/\.js$/, '');
});
var recommended = {
    rules: {}
};

module.exports = {
  rules: _.zipObject(rules, rules.map(function (rule) {
    return require('./rules/' + rule);
  })),
};
