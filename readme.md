query-str
======
### Parse and stringify URL query strings with ease. 🚀
<br></br>
## Installation ⬇️
```bash
$ npm install --save query-str
```
<br></br>
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

const myURL = 'https://foo.bar/buzz'

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
