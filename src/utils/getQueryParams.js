import queryString from 'query-string';

function getQueryParams(string) {
  return queryString.parse(string);
}
export default getQueryParams;