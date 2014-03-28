filter-transform
================

filter [browserify](https://github.com/substack/node-browserify) transforms by files

install
-------

```
npm install filter-transform
```

usage
-----

suspend your disbelief for a second and pretend that [coffeeify](https://github.com/substack/coffeeify) didn't filter the files itself:

```javascript
var filterCoffee = filterTransform(
  function(file) { return path.extname(file) === '.coffee' },
  coffeeify
)
```

licence
-------

MIT. &copy; matt brennan