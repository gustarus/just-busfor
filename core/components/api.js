'use strict';

import {Component} from './base';
import fixtures from '@fixtures';

export default class Api extends Component {

  request(uri) {
    return new Promise((resolve, reject) => {
      if (!fixtures[uri]) {
        reject(new Error(`Can\'t find mock for the url ${uri}.`));
      }

      resolve(fixtures[uri]);
    });
  }

  get(uri) {
    return this.request(uri);
  }
}
