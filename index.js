var through = require('through');

function filterTransform(filter, transform) {
  return function(file) {
    filter(file) ? transform(file) : through();
  }
}

module.exports = filterTransform;