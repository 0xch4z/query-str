const assert = require('chai').assert;
const parse = require('../src/Parse');

/* URL With Query String  */
describe('Parse - URL With Query String #1', () => {
  it('should return { version: 2.2 } ', () => {
    assert.equal(JSON.stringify(parse('https://foo.fin/api/docs?version=2.2')), JSON.stringify({
      version: 2.2
    }));
  });
});

describe('Parse - URL With Query String #2', () => {
  it(`should return { view: 'settings', secure: true } `, () => {
    assert.equal(JSON.stringify(parse('192.168.1.1/router?view=settings&secure=true')), JSON.stringify({
      view: 'settings',
      secure: true
    }));
  });
});

describe('Parse - URL With Query String #3', () => {
  it('should return { myInt: 282, myFloat: 4.83, myBool: true } ', () => {
    assert.equal(JSON.stringify(parse('localhost:3000/?myInt=282&myFloat=4.83&myBool=true')), JSON.stringify({
      myInt: 282,
      myFloat: 4.83,
      myBool: true
    }));
  });
});

describe('Parse - URL With Query String #4', () => {
  it('should return { IS_ADMIN: true } ', () => {
    assert.equal(JSON.stringify(parse('http://vulnerable.io/admin?IS_ADMIN=true')), JSON.stringify({
      IS_ADMIN: true
    }));
  });
});

describe('Parse - URL With Query String #1', () => {
  it('should return { version: 2.2 } ', () => {
    assert.equal(JSON.stringify(parse('https://foo.fin/api/docs?version=2.2')), JSON.stringify({
      version: 2.2
    }));
  });
});

/* Query String Only  */
describe('Parse - Query String Only #1', () => {
  it(`should return { foo: 'bar'  } `, () => {
    assert.equal(JSON.stringify(parse('?foo=bar')), JSON.stringify({
      foo: 'bar'
    }));
  });
});

describe('Parse - Query String Only #2', () => {
  it(`should return { is_logged_in: true, user_token: '83y8bfj8a9f93' } `, () => {
    assert.equal(JSON.stringify(parse('is_logged_in=true&user_token=83y8bfj8a9f93')), JSON.stringify({
      is_logged_in: true,
      user_token: '83y8bfj8a9f93'
    }));
  });
});

describe('Parse - Query String Only #3', () => {
  it(`should return { fin: 'foo', foo: 'bar', bar: 'buzz', buzz: 'bazz' } `, () => {
    assert.equal(JSON.stringify(parse('stmt=true&fin=foo&foo=bar&bar=buzz&buzz=bazz')), JSON.stringify({
      stmt: true,
      fin: 'foo',
      foo: 'bar',
      bar: 'buzz',
      buzz: 'bazz'
    }));
  });
});

describe('Parse - Query String Only #4', () => {
  it('should return { winner: true, score: 9001, isOver9000: true } ', () => {
    assert.equal(JSON.stringify(parse('?winner=true&score=9001&isOver9000=true')), JSON.stringify({
      winner: true,
      score: 9001,
      isOver9000: true
    }));
  });
});

describe('Parse - Query String Only #5', () => {
  it(`should return { isForSparta: true, country: 'CA', GISEnabled: true } `, () => {
    assert.equal(JSON.stringify(parse('?isForSparta=true&country=CA&GISEnabled=true')), JSON.stringify({
      isForSparta: true,
      country: 'CA',
      GISEnabled: true
    }));
  });
});
