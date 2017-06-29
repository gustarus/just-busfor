'use strict';

import {Component} from './base';

export default class Routing extends Component {

  setHome(route) {
    this._home = route;
  }

  getHome() {
    return this._home;
  }

  queue(...routes) {
    let first = routes.shift();
    routes.reduce((previous, route) => {
      previous.next = route;
      return route;
    }, first);

    return first;
  }
}
