query_parse
======
### Parse and generate URL query strings with ease. 🚀

## Installation ⬇️
```bash
$ npm install query_parse
```
API Usage 📝
-----

### Parse query string with URL
```js
const queryParse = require('query_parse');

const myURL = 'http://foo.bar/buzz?myBool=true&myInt=2&myFloat=3.3&myString=fizz%20buzz';
queryParse.parse(myURL);
// => { myBool: true, myInt: 2, myFloat: 3.3, myString: 'fizz buzz' }
```

### Parse query string
```js
const queryParse = require('query_parse');

const myURL = 'isOpenSource=true&isPassing=true&codacyScore=10.0';
queryParse.parse(myURL);
// => { isOpenSource: true, isPassing: true, codacyScore: 10.0 }
```

### Generate query string with URL
```js
const queryParse = require('query_parse');

const myURL = 'https://foo.bar/buzz'

const myParams = {
  fin: false,
  bazz: 22
};

queryParse.generate(myParams, myURL);
// => 'http://foo.bar/buzz?fin=false&bazz=22'
```

### Generate query string
```js
const queryParse = require('query_parse');

const myParams = {
  myBool: false,
  myInt: 6,
  myFloat: 3.3,
  myString: 'fin fun'
};

queryParse.generate(myParams);
// => 'myBool=false&myInt=6&myFloat=3.3&myString=fin%20fun'
```
