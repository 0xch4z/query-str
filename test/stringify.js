const assert = require('chai').assert;
const stringify = require('../src/Stringify');

/* URL With Query String */
describe('Stringify - URL With Query String #1', () => {
  it('should return "https://foo.bar/route?age=19&account_balance=1.2&is_active=true"', () => {
    assert.equal(stringify({
      age: 19,
      account_balance: 1.2,
      is_active: true
    }, 'https://foo.bar/route'), 'https://foo.bar/route?age=19&account_balance=1.2&is_active=true');
  });
});

describe('Stringify - URL With Query String #2', () => {
  it('should return "https://test.xyz/fin?isPremium=false&metaData=some%20data"', () => {
    assert.equal(stringify({
      isPremium: false,
      metaData: 'some data'
    }, 'https://test.xyz/fin'), 'https://test.xyz/fin?isPremium=false&metaData=some%20data');
  });
});

describe('Stringify - URL With Query String #3', () => {
  it('should return "https://fin.foo/fun?user=DanMan10&message=Hello%2C%20World!"', () => {
    assert.equal(stringify({
      user: 'DanMan10',
      message: 'Hello, World!'
    }, 'https://fin.foo/fun'), 'https://fin.foo/fun?user=DanMan10&message=Hello%2C%20World!');
  });
});

describe('Stringify - URL With Query String #4', () => {
  it('should return "https://shop.it/checkout?transaction_total=19.99&payment_method=VISA"', () => {
    assert.equal(stringify({
      transaction_total: 19.99,
      payment_method: 'VISA'
    }, 'https://shop.it/checkout'), 'https://shop.it/checkout?transaction_total=19.99&payment_method=VISA');
  });
});

describe('Stringify - URL With Query String #5', () => {
  it('should return "127.0.0.1:8080/api/test?token=A1E4e5jd8ad9ad9429hf9qaj94Q-KZ"', () => {
    assert.equal(stringify({
      token: 'A1E4e5jd8ad9ad9429hf9qaj94Q-KZ'
    }, '127.0.0.1:8080/api/test'), '127.0.0.1:8080/api/test?token=A1E4e5jd8ad9ad9429hf9qaj94Q-KZ');
  });
});


/* Query String Only */
describe('Stringify - Query String Only #1', () => {
  it('should return "bar=foo%20bar&baz=true"', () => {
    assert.equal(stringify({
      bar: 'foo bar',
      baz: true,
    }), "?bar=foo%20bar&baz=true");
  });
});

describe('Stringify - Query String Only #2', () => {
  it('should return "?isPassing=true%hello=World"', () => {
    assert.equal(stringify({
      isPassing: true,
      hello: 'World'
    }), "?isPassing=true&hello=World");
  });
});

describe('Stringify - Query String Only #3', () => {
  it('should return "?bool=true&bool2=false&bool3=false"', () => {
    assert.equal(stringify({
      bool: true,
      bool2: 'false',
      bool3: false
    }), "?bool=true&bool2=false&bool3=false");
  });
});

describe('Stringify - Query String Only #4', () => {
  it('should return "?itemId=2983928372883728"', () => {
    assert.equal(stringify({
      itemId: 2983928372883728
    }), "?itemId=2983928372883728");
  });
});

describe('Stringify - Query String Only #5', () => {
  it('should return "?view=INBOX&token=ei4q3h6fi4363h6qi"', () => {
    assert.equal(stringify({
      view: 'INBOX',
      token: 'ei4q3h6fi4363h6qi'
    }), "?view=INBOX&token=ei4q3h6fi4363h6qi");
  });
});
