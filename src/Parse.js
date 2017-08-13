/**
 * Casts a given parameter value to it's associated type.
 *
 * @param {string} param - The query parameter's value
 * @returns {any} - Interpreted parameter value
 */
const parseParam = (param) => {
  // cast to boolean
  if (/^true|false$/.test(param)) {
    return param === 'true';
  // cast to number
  } else if (!isNaN(param)) {
    return param.includes('.') ? parseFloat(param) : parseInt(param, 10);
  }
  // cast to string
  return `"${decodeURIComponent(param)}"`;
};

/**
 * Parses given url's query string's parameters.
 *
 * @param {string} url - The URL to be parsed.
 * @returns {object} - The parsed parameters
 */
const parse = (url) => {
  // extract query string parameters from url
  let params = (url.split('?')[1] || url.split('?')[0]).split('&');
  // cast parameters to type
  params = params.map((param) => {
    const props = param.split('=');
    return `"${props[0]}":${parseParam(props[1]) || 'undefined'}`;
  }).join(',');
  // parse as an object
  return JSON.parse(`{ ${params} }`);
};

module.exports = parse;
