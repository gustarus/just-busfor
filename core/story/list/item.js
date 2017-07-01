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
      <TouchableWithoutFeedback onPress={this.onPick} style={style.item}>
        <View style={style.label}>
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

const style = styles({
  item: {
    marginTop: 10,
    paddingVertical: 10,
    height: 36,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },

  label: {
    padding: 5,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(242,107,99,0.6)',
    marginTop: 20
  }
});

export default Item;
