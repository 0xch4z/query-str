'use strict';

/**
 * Parse query string parameters.
 *
 * @param {any} param - The parameter to be parsed.
 */
const parseParam = param => {
  if (/true|false/i.test(param)) {
    return param === 'true';
  } else if (!isNaN(param)) {
    return param.includes('.') ? parseFloat(param) : parseInt(param);
  }
    return `"${decodeURIComponent(param)}"`;
};

/**
 * Parse a url's query string parameters.
 *
 * @param {string} url - The URL to be parsed.
 */
const parse = url => {
  let params = (url.split('?')[1] || url.split('?')[0]).split('&');
  params = params.map(param => {
    const props = param.split('=');
    return `"${props[0]}":${parseParam(props[1]) || '"undefined"'}`;
  }).join(',');
  return JSON.parse(`{ ${params} }`);
};

module.exports = parse;
