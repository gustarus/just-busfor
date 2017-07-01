'use strict';

import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
import {styles} from '@theme';

class Item extends Component {

  constructor(options) {
    super(options);
    this.onPick = this.onPick.bind(this);
  }

  render() {
    const {cityFrom, cityTo} = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.onPick}>
        <View>
          <Text>{cityFrom} -> {cityTo}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  onPick() {
    this.props.onPick();
  }
}

const style = styles({});

export default Item;
