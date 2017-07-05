/**
 * Stringify query string parameters.
 *
 * @param {any} param - The parameter to be stringified.
 */
const stringifyParam = (param) => {
  switch (typeof (param)) {
    case 'boolean':
      return param === true ? 'true' : 'false';
    case 'string':
      return encodeURIComponent(param);
    default:
      return param;
  }
};

/**
 * Parse query string parameters.
 *
 * @param {object} params - The parameters to be stringified.
 * @param {string} baseURL - An optional baseURL.
 */
const stringify = (params, baseURL = '') => {
  let query = '';
  Object.keys(params).forEach((p, i) => {
    if (i !== 0) query += '&';
    query += `${p}=${stringifyParam(params[p])}`;
  });
  return `${baseURL}?${query}`;
};

module.exports = stringify;
