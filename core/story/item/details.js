'use strict';

import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {BackButton, styles} from '@theme';
import Item from '@story/list/item';
import Details from './details';
import placemarkIcon from './icons/placemark.png';

class ItemScene extends Component {

  render() {
    const {cityFrom, cityTo} = this.props;

    return (
      <View style={style.details}>
        <Text style={style.detailsDeparture}>
          <Image source={placemarkIcon} style={style.detailsPlacemark}/>  {cityFrom}
        </Text>
        <Text style={style.detailsArrow}>↓</Text>
        <Text style={style.detailsArrive}>
          <Image source={placemarkIcon} style={style.detailsPlacemark}/>  {cityTo}
        </Text>
      </View>
    );
  }
}

const style = styles({
  details: {
    padding: 12,
    borderRadius: 4,
    backgroundColor: '#fffeff',
    shadowColor: '#000000',
    shadowRadius: 1,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 1}
  },

  detailsDeparture: {
    marginBottom: 6,
    fontSize: 16
  },

  detailsArrive: {
    marginTop: 7,
    fontSize: 16
  },

  detailsArrow: {
    color: '#a2a2a2'
  },

  detailsPlacemark: {
    marginTop: 2,
    width: 11.5,
    height: 15.5
  }
});

export default ItemScene;
