var through = require('through');

function filterTransform(filter, transform) {
  return function(file, opts) {
    return filter(file, opts) ? transform(file, opts) : through();
  }
}

module.exports = filterTransform;