/**
 * Maps given value to string for query string
 *
 * @param {any} param - The parameter to be stringified.
 * @return {string} - stringified parameter
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
 * Parses query string parameters and maps them to a URL query string
 *
 * @param {object} params - The parameters to be stringified.
 * @param {string} baseURL - An optional baseURL.
 * @param {string} - stringified url query string
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
