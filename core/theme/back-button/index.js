'use strict';

import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import TouchableItem from 'react-navigation/src/views/TouchableItem';
import arrowLeftIcon from './icon.png';

class BackButton extends Component {

  render() {
    return (
      <TouchableItem
        accessibilityComponentType='button'
        accessibilityTraits='button'
        testID='header-back'
        onPress={this.props.onPress}
        delayPressIn={0}
        borderless>
        <View style={style.container}>
          <Image source={arrowLeftIcon} style={style.icon}/>
        </View>
      </TouchableItem>
    );
  }
}

const style = {
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10
  },

  icon: {
    width: 8,
    height: 15
  }
};

export default BackButton;
