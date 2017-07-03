'use strict';

import React, {Component} from 'react';
import {View, Text, TouchableHighlight, Platform} from 'react-native';
import {styles} from '@theme';

class Filter extends Component {

  constructor(options) {
    super(options);
    this.onParamSwitch = this.onParamSwitch.bind(this);
  }

  render() {
    const {time, price} = this.props;
    return (
      <View style={style.filter}>
        <TouchableHighlight onPress={() => this.onParamSwitch('time')} style={style.filterParam} underlayColor={null}>
          <Text style={style.filterLabel}>{time === 'asc' ? '↓' : '↑'} Время</Text>
        </TouchableHighlight>
        <View style={style.filterBorder}/>
        <TouchableHighlight onPress={() => this.onParamSwitch('price')} style={style.filterParam} underlayColor={null}>
          <Text style={style.filterLabel}>{price === 'asc' ? '↓' : '↑'} Цена</Text>
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
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    zIndex: 100
  },

  filterParam: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fffeff',
    borderBottomWidth: Platform.OS === 'ios' ? 0 : 1,
    borderColor: '#efefef',
    shadowColor: '#000000',
    shadowRadius: 1,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 1}
  },

  filterLabel: {
    textAlign: 'center'
  },

  filterBorder: {
    width: 1,
    height: '100%',
    backgroundColor: 'transparent'
  }
});

export default Filter;
