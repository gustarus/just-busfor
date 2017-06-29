'use strict';

import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {styles} from '@theme';

class Filter extends Component {

  constructor(options) {
    super(options);
    this.onParamSwitch = this.onParamSwitch.bind(this);
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={() => this.onParamSwitch('time')}>
          <Text>Время</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.onParamSwitch('price')}>
          <Text>Цена</Text>
        </TouchableHighlight>
      </View>
    );
  }

  onParamSwitch(name) {
    const props = this.props;
    const {time, price} = props;
    const value = props[name] === 'asc' ? 'desc' : 'asc';
    const filter = {time, price, [name]: value};
    this.props.onChange(filter);
  }
}

const style = styles({});

export default Filter;
