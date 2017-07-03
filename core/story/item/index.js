'use strict';

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {BackButton, styles} from '@theme';

class ItemScene extends Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Подробности рейса',
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle,
    headerLeft: <BackButton onPress={() => navigation.goBack(null)}/>
  });

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
