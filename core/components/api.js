'use strict';

import {Component} from './base';

const mock = {};

export default class Api extends Component {

  request(uri) {
    return new Promise((resolve, reject) => {
      if (!mock[uri]) {
        reject(new Error(`Can\'t find mock for the url ${uri}.`));
      }

      resolve(mock[uri]);
    });
  }

  get(uri) {
    return this.request(uri);
  }
}
