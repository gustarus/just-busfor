'use strict';

import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, Text, Image, Platform} from 'react-native';
import {styles} from '@theme';
import moment from 'moment';
import arrowRightIcon from './icons/arrow-right.png';
import dotsIcon from './icons/dots.png';
const dateTimeFormat = 'D MMMM, HH:mm';

class Item extends Component {

  constructor(options) {
    super(options);
    this.onPick = this.onPick.bind(this);
  }

  render() {
    const {dateTimeFrom, dateTimeTo, price} = this.props;
    const from = moment.unix(dateTimeFrom);
    const to = moment.unix(dateTimeTo);

    return (
      <TouchableWithoutFeedback onPress={this.onPick}>
        <View style={style.item}>
          <View style={style.itemDeparture}>
            <Text style={style.itemBlockHeader}>{from.format('HH:mm')}</Text>
            <Text style={style.itemBlockHint}>{from.format('D MMMM')}</Text>
          </View>
          <View style={style.itemArrow}>
            <Image source={arrowRightIcon} style={style.itemArrowIcon}/>
          </View>
          <View style={style.itemArrive}>
            <Text style={style.itemBlockHeader}>{to.format('HH:mm')}</Text>
            <Text style={style.itemBlockHint}>{to.format('D MMMM')}</Text>
          </View>
          <View style={style.itemDots}>
            <View style={style.itemDotsContent}>
              <Image source={dotsIcon} style={style.itemDotsLine}/>
              <View style={Object.assign({}, style.itemDotsCut, style.itemDotsCutTop)}/>
              <View style={Object.assign({}, style.itemDotsCut, style.itemDotsCutBottom)}/>
            </View>
          </View>
          <View style={style.itemPrice}>
            <Text style={style.itemBlockHeader}>{price}<Text style={style.itemBlockHeaderSmall}> руб.</Text></Text>
            <Text style={style.itemBlockHint}>1 билет</Text>
          </View>
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
    borderWidth: Platform.OS === 'ios' ? 0 : 1,
    borderColor: '#efefef',
    paddingVertical: 12,
    paddingHorizontal: 0,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    borderRadius: 4,
    backgroundColor: '#fffeff',
    height: 67,
    marginBottom: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowRadius: 1,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 1}
  },

  itemDeparture: {
    flexGrow: 1
  },

  itemArrive: {
    flexGrow: 1
  },

  itemArrow: {
    width: 6
  },

  itemArrowIcon: {
    width: 6,
    height: 11,
    marginTop: 5
  },

  itemPrice: {
    flexGrow: 1
  },

  itemBlockHeader: {
    fontSize: 17,
    color: '#383638',
    textAlign: 'center'
  },

  itemBlockHeaderSmall: {
    fontSize: 11,
    textAlign: 'left'
  },

  itemBlockHint: {
    fontSize: 11,
    marginTop: 4,
    color: '#a2a2a2',
    textAlign: 'center'
  },

  itemDots: {
    width: 9,
    marginVertical: -12
  },

  itemDotsContent: {
    position: 'relative',
    width: 9,
    height: '100%'
  },

  itemDotsLine: {
    position: 'absolute',
    top: 0,
    left: 4,
    width: 2,
    height: '100%'
  },

  itemDotsCut: {
    width: 9,
    height: 9,
    position: 'absolute',
    left: 0,
    backgroundColor: '#f4f2f5',
    borderRadius: 9
  },

  itemDotsCutTop: {
    top: -5
  },

  itemDotsCutBottom: {
    bottom: -5
  }
});

export default Item;
