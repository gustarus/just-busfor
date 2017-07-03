'use strict';

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {BackButton, styles} from '@theme';
import Item from '@story/list/item';
import Details from './details';

class ItemScene extends Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Подробности рейса',
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle,
    headerLeft: <BackButton onPress={() => navigation.goBack(null)}/>
  });

  render() {
    const {item} = this.props.navigation.state.params;

    return (
      <View style={style.layout}>
        <View style={style.content}>
          <Item {...item}/>
          <Details {...item}/>
        </View>
      </View>
    );
  }
}

const style = styles();

export default ItemScene;
