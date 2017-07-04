'use strict';

const parseType = t => {
  if (/true|false/i.test(t)) {
    return t === 'true';
  } else if (!isNaN(t)) {
    return t.includes('.') ? parseFloat(t) : parseInt(t);
  }
    return `"${decodeURIComponent(t)}"`;
};

const parse = url => {
  let params = (url.split('?')[1] || url.split('?')[0]).split('&');
  params = params.map(param => {
    const props = param.split('=');
    return `"${props[0]}":${parseType(props[1]) || 'undefined'}`;
  }).join(',');
  return JSON.parse(`{ ${params} }`);
};

module.exports = parse;
