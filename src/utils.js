import { API_ENDPOINT, API_KEY, CHAT_BOT_ID, EXTERNAL_ID } from './constants';
import queryString from 'query-string';// eslint-disable-line no-unused-vars

export function chatBotAPI(requestHeaders, message, callback) {
  var xhr = new XMLHttpRequest();// eslint-disable-line no-undef
  const queryString = queryString.stringify({
    apiKey: API_KEY,
    chatBotID: CHAT_BOT_ID,
    externalID: EXTERNAL_ID,
    message: message,
  });
  const requestEndpoint = `${API_ENDPOINT}?${queryString}`;
  const requestOptions = {
    method: 'get',
  };

  if (requestHeaders) {
    requestOptions.headers = requestHeaders;
  }

  xhr.open(requestOptions.method, requestEndpoint, true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      const resposeData = JSON.parse(xhr.response);
      if (xhr.status !== 200 || resposeData.data.cod !== 200) {
        return callback(resposeData);
      }

      return callback(null, resposeData);
    }
  };
}
