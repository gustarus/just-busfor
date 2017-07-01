'use strict';

import React, {Component} from 'react';
import {View} from 'react-native';
import {styles} from '@theme';
import Item from './item';

class List extends Component {

  render() {
    const {items, loading} = this.props;
    if (loading) {
      return null;
    }

    return (
      <View>
        {items.map((item, i) => (
          <Item key={i} {...item}
                onPick={() => this.onPick(item)}/>
        ))}
      </View>
    );
  }

  onPick(item) {
    this.props.onPick(item);
  }
}

const style = styles();

export default List;
