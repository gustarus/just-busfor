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
      <View style={style.filter}>
        <TouchableHighlight onPress={() => this.onParamSwitch('time')} style={style.filterParam} underlayColor={style.filterParamUnderlay}>
          <Text style={style.filterParamLabel}>Время</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.onParamSwitch('price')} style={style.filterParam} underlayColor={style.filterParamUnderlay}>
          <Text style={style.filterParamLabel}>Цена</Text>
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

const style = styles({
  filter: {
    padding: 10
  },

  filterParam: {
    paddingVertical: 10,
    marginTop: 20
  },

  filterParamUnderlay: '#F2948E'
});

export default Filter;
