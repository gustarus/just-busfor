'use strict';

import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
import {styles} from '@theme';
import moment from 'moment';
const dateTimeFormat = 'D MMMM, HH:mm';

class Item extends Component {

  constructor(options) {
    super(options);
    this.onPick = this.onPick.bind(this);
  }

  render() {
    const {cityFrom, cityTo, dateTimeFrom, dateTimeTo, price} = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.onPick}>
        <View>
          <Text>{cityFrom} -> {cityTo}, {price}р</Text>
          <Text>Отправление: {moment.unix(dateTimeFrom).format(dateTimeFormat)}</Text>
          <Text>Прибытие: {moment.unix(dateTimeTo).format(dateTimeFormat)}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  onPick() {
    this.props.onPick();
  }
}

const style = styles();

export default Item;
