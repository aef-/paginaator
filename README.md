# paginator.js
Tiny, smart pagination generator

## Example
For an exhaustive list see [snapshots](https://github.com/aef-/paginator.js/blob/master/__snapshots__/paginator.js).

Vanilla JS or JSX or whatever you want!
```js
import paginator from 'paginator';

paginator({
  current: getQueryParam("currentPage") || 1,
  totalPages: 10,
  render: v => isNaN(v) ? `<span>${v}</span>` : `<a href="?currentPage=${v}">${v}</a> 
});
//
[<a href="?currentPage=1">1</a>, <a href="?currentPage=2>2</a>, <a href="?currentPage=3">3</a>, ..., <a href="?currentPage=10">10</a>] 
```

## Options
```
current :: Integer :: required
totalPages :: Integer :: required
render :: Function :: optional
```
