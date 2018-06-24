import { API_ENDPOINT } from './constants';

export function chatBotAPI(requestHeaders, message, callback) {
  var xhr = new XMLHttpRequest();// eslint-disable-line no-undef
  const requestEndpoint = `${API_ENDPOINT}?apiKey=6nt5d1nJHkqbkphe&
    chatBotID=63906&externalID=Vibhor&message=${message}`;
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
      if (xhr.status !== 200) {
        return callback(resposeData);
      }

      return callback(null, resposeData);
    }
  };

  xhr.send();
}
