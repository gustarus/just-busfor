'use strict';

import _ from 'lodash';
import dismissKeyboard from 'dismissKeyboard';

import {Component} from './base';
import {getQueryString} from '@helpers';
import {app} from '@instances';

export default class Api extends Component {

  baseUrl = null;
  baseOptions = {
    method: 'get',
    feedback: true,
    timeout: 10000,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  /**
   * Send request via fetch api, resolve with json response or reject with notification if needed.
   * @param {String} uri
   * @param {Object} raw - request options
   * @returns {Promise}
   */
  request(uri, rawOptions) {
    const options = _.defaults(rawOptions, this.baseOptions);
    const {method, data, headers, timeout} = options;

    // build the reqest instance
    const url = uri ? `${this.baseUrl}/${uri}` : this.baseUrl;
    const request = new Request(url, {
      method: method || this.method,
      headers: Object.assign({}, this.headers, headers),
      body: data ? JSON.stringify(data) : null
    });

    // log request params
    app.reporter.trace(`[api] Sending request.`, request);

    return new Promise((resolve, reject) => {
      // initialize timeout rejector
      let resolved = false;
      if (timeout) {
        setTimeout(() => {
          if (!resolved) {
            resolved = true;
            resolve(this.onRequestTimeout(options, request));
          }
        }, timeout);
      }

      // execute request
      fetch(request).then(response => { // handle completed request
        app.reporter.trace('[api] Response received and parsed.', response);

        // parse json response and handle status
        return response.json().then(result => {
          if (response.ok) {
            if (!resolved) {
              resolved = true;
              resolve(result);
            }
          } else {
            return this.onBadResponse(options, response, result);
          }
        });
      }).catch(result => { // handle request error
        if (!resolved) {
          resolved = true;
          resolve(this.onBadRequest(options, request, result));
        }
      });
    });
  }

  /**
   * It calls when request timeouted.
   * @param options
   * @param request
   * @returns {Promise}
   */
  onRequestTimeout(options, request) {
    dismissKeyboard();
    return this.respondWithErrorPromise(options, 'Network request timeout');
  }

  /**
   * It calls when fetch api returns not 2** status code.
   * @param options
   * @param request
   * @param result
   * @returns {Promise}
   */
  onBadRequest(options, request, result) {
    dismissKeyboard();
    return this.respondWithErrorPromise(options, result ? result.message : null);
  }

  /**
   * It calls when fetch api triggered response error.
   * @param options
   * @param response
   * @param result
   * @returns {Promise}
   */
  onBadResponse(options, response, result) {
    dismissKeyboard();

    let message;
    if (response.status === 422) {
      for (var first in result) break;
      message = result[first];
    } else {
      message = result;
    }

    return this.respondWithErrorPromise(options, message);
  }

  /**
   * Returns promise which rejected when user close error notification.
   * Or reject it immidiately if user won't feedback notification.
   * @param {Object} options - request options
   * @param {String} message - response message
   * @returns {Promise}
   */
  respondWithErrorPromise(options, rawMessage) {
    return new Promise((resolve, reject) => {
      if (rawMessage && options.feedback) { // reject only when notification closed
        const message = app.translator.t(rawMessage);
        app.notification.info(message).then(reject);
      } else { // reject immediately
        reject();
      }
    });
  }

  /**
   * Send get request.
   * @param {String} uri
   * @param {Object} options - request options
   * @returns {Promise}
   */
  get(uri, data = null, options = {}) {
    const query = getQueryString(data);
    const url = `${uri}${query ? '?' + query : ''}`;
    return this.request(url, Object.assign({}, options, {
      method: 'get'
    }));
  }

  /**
   * Send post request.
   * @param {String} uri
   * @param {Object} data
   * @param {Object} options - request options
   * @returns {Promise}
   */
  post(uri, data = null, options = {}) {
    return this.request(uri, Object.assign({}, options, {
      method: 'post',
      data
    }));
  }
}
