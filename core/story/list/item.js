'use strict';

import React, {Component} from 'react';
import {View} from 'react-native';
import {styles} from '@theme';

class Item extends Component {

  constructor(options) {
    super(options);
    this.onPick = this.onPick.bind(this);
  }

  render() {
    return <View/>;
  }

  onPick() {
    this.props.onPick();
  }
}

const style = styles({});

export default Item;
