[![Travis](https://img.shields.io/travis/Charliekenney23/query-str.svg)](https://travis-ci.org/Charliekenney23/query-str)
[![Codecov](https://img.shields.io/codecov/c/github/Charliekenney23/query-str.svg)](https://codecov.io/gh/Charliekenney23/query-str)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5b2bd8ad55194a5eaa2bb0537d5f6960)](https://www.codacy.com/app/charlesc.kenney/query-str?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Charliekenney23/query-str&amp;utm_campaign=Badge_Grade)
[![npm](https://img.shields.io/npm/v/query-str.svg)](https://www.npmjs.com/package/query-str)
[![npm](https://img.shields.io/npm/dw/query-str.svg)]()

query-str
======
### Parse and stringify URL query strings with ease. 🚀
## Installation ⬇️
```bash
$ npm install --save query-str
```
API Usage 📝
-----
### Parse query string with URL
```js
const qs = require('query-str');

const myURL = 'http://foo.bar/buzz?myBool=true&myInt=2&myFloat=3.3&myString=fizz%20buzz';
qs.parse(myURL);
// => { myBool: true, myInt: 2, myFloat: 3.3, myString: 'fizz buzz' }
```

### Parse query string
```js
const qs = require('query-str');

const myURL = 'isOpenSource=true&isPassing=true&codacyScore=10.0';
qs.parse(myURL);
// => { isOpenSource: true, isPassing: true, codacyScore: 10.0 }
```

### Stringify parameter object with URL
```js
const qs = require('query-str');

const myURL = 'https://foo.bar/buzz';

const myParams = {
  fin: false,
  bazz: 22
};

qs.stringify(myParams, myURL);
// => 'https://foo.bar/buzz?fin=false&bazz=22'
```

### Stringify parameter object
```js
const qs = require('query-str');

const myParams = {
  myBool: false,
  myInt: 6,
  myFloat: 3.3,
  myString: 'fin fun'
};

qs.stringify(myParams);
// => '?myBool=false&myInt=6&myFloat=3.3&myString=fin%20fun'
```
