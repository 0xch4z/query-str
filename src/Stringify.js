'use strict';

const stringifyType = t => {
  switch(typeof(t)) {
    case 'boolean':
      return t === true ? 'true' : 'false';
    case 'string':
      return encodeURIComponent(t);
    default:
      return t;
  }
};

const stringify = (params, baseURL = '') => {
  let query = ''; let i = 0;
  for (const p of Object.keys(params)) {
    if (i !== 0) query += '&';
    query += `${p}=${stringifyType(params[p])}`;
    i++;
  }
  return `${baseURL}?${query}`;
};

module.exports = stringify;
