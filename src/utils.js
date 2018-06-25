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
    try {
      if (xhr.readyState === 4) {
        const resposeData = JSON.parse(xhr.response);

        if (xhr.status !== 200) {
          return callback(resposeData);
        }

        return callback(null, resposeData);
      }
    } catch (err) {
      console.error(err);
      return callback(err);
    }
  };

  xhr.send();
}

function checkLocalStorage() {
  if (!window.localStorage) {
    Object.defineProperty(window, 'localStorage', new (function() { // eslint-disable-line no-extra-parens
      let aKeys = [];
      let oStorage = {};

      Object.defineProperty(oStorage, 'getItem', {
        value: function(sKey) { return sKey ? this[sKey] : null; },
        writable: false,
        configurable: false,
        enumerable: false,
      });
      Object.defineProperty(oStorage, 'setItem', {
        value: function(sKey, sValue) {
          if (!sKey) { return; }
          document.cookie = escape(sKey) + '=' + escape(sValue) + '; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/';
        },
        writable: false,
        configurable: false,
        enumerable: false,
      });
      Object.defineProperty(oStorage, 'clear', {
        value: function() {
          if (!aKeys.length) { return; }
          for (var sKey in aKeys) {
            document.cookie = escape(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
          }
        },
        writable: false,
        configurable: false,
        enumerable: false,
      });
      this.configurable = false;
      this.enumerable = true;
    })());
  }
}

export function fetchLocalStorage(key) {
  checkLocalStorage();

  const data = window.localStorage.getItem(key);

  return JSON.parse(data);
}

export function storeInLocalStorage(dataElement) {
  checkLocalStorage();

  const data = JSON.stringify(dataElement.data);

  window.localStorage.setItem(dataElement.key, data);
}

export function appendIntoLocalStorage(key, value) {
  const data = fetchLocalStorage(key) || [];

  data.push(value);
  storeInLocalStorage({ key: key, data: data});
}
