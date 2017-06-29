'use strict';

import React, {Component} from 'react';
import {Navigator} from 'react-native';

// configure application instance
import {app} from '@instances';
import {defaults} from '@config';
app.configure(defaults).boot();


class JustBusfor extends Component {

  constructor(options) {
    super(options);
    this.configureScene = this.configureScene.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }

  render() {
    return (
      <Navigator
        ref={navigator => this.navigator = navigator}
        initialRoute={app.settings.routing.defaultRoute}
        configureScene={this.configureScene}
        renderScene={this.renderScene}/>
    );
  }

  configureScene(route) {
    return route.config || app.settings.routing.defaultConfig;
  }

  renderScene(route, navigator) {
    if (app.settings.scenes[route.id]) {
      let props = {navigator, ...route};
      return React.createElement(app.settings.scenes[route.id], props);
    } else {
      throw new Error('Can\'t resolve route!');
    }
  }
}

module.exports = JustBusfor;
