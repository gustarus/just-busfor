'use strict';

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from '@theme';

class ItemScene extends Component {

  render() {
    const {item} = this.props.navigation.state.params;
    const {cityFrom, cityTo} = item;

    return (
      <View style={style.layout}>
        <Text>{cityFrom} -> {cityTo}</Text>
      </View>
    );
  }
}

const style = styles();

export default ItemScene;
