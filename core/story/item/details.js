'use strict';

import React, {Component} from 'react';
import {View, Text, Image, Platform} from 'react-native';
import {BackButton, styles} from '@theme';
import Item from '@story/list/item';
import Details from './details';
import placemarkIcon from './icons/placemark.png';

class ItemScene extends Component {

  render() {
    const {cityFrom, cityTo} = this.props;

    return (
      <View style={style.details}>
        <View style={style.detailsLocation}>
          <View style={style.detailsPlacemark}>
            <Image source={placemarkIcon} style={style.detailsPlacemarkIcon}/>
          </View>
          <Text>{cityFrom}</Text>
        </View>
        <Text style={style.detailsArrow}>↓</Text>
        <View style={style.detailsLocation}>
          <View style={style.detailsPlacemark}>
            <Image source={placemarkIcon} style={style.detailsPlacemarkIcon}/>
          </View>
          <Text>{cityTo}</Text>
        </View>
      </View>
    );
  }
}

const style = styles({
  details: {
    padding: 12,
    borderRadius: 4,
    borderWidth: Platform.OS === 'ios' ? 0 : 1,
    borderColor: '#efefef',
    backgroundColor: '#fffeff',
    shadowColor: '#000000',
    shadowRadius: 1,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 1}
  },

  detailsLocation: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },

  detailsPlacemark: {
    width: 20,
    alignItems: 'center',
    marginRight: 6
  },

  detailsPlacemarkIcon: {
    width: 11.5,
    height: 15.5
  },

  detailsArrow: {
    width: 20,
    textAlign: 'center',
    paddingVertical: 9,
    color: '#a2a2a2',
    fontSize: 16
  }
});

export default ItemScene;
