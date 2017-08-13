<h1 align="center">query-str</h1>
<p align="center">
  <img src="https://img.shields.io/travis/Charliekenney23/query-str.svg" href="https://travis-ci.org/Charliekenney23/query-str" alt="Travis Badge" />
  <img src="https://img.shields.io/codecov/c/github/Charliekenney23/query-str.svg" href="https://codecov.io/gh/Charliekenney23/query-str" alt="Codecov Badge" />
  <img src="https://api.codacy.com/project/badge/Grade/5b2bd8ad55194a5eaa2bb0537d5f6960" href="https://www.codacy.com/app/charlesc.kenney/query-str?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Charliekenney23/query-str&amp;utm_campaign=Badge_Grade" alt="Codacy Badge" />
  <img src="https://img.shields.io/npm/v/query-str.svg" href="https://www.npmjs.com/package/query-str" alt="NPM Version Badge" />
  <img src="https://img.shields.io/npm/dt/query-str.svg" href="https://www.npmjs.com/package/query-str" alt="NPM Downloads Badge" />
</p>
<p align="center">Parse and stringify URL query strings with ease. 🚀</p>

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
