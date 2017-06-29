'use strict';

import React, {Component} from 'react';
import {View} from 'react-native';
import Item from 'item';

class List extends Component {

  render() {
    const {items, loading} = this.state;
    if (loading) {
      return null;
    }

    return (
      <View>
        {items.map(item => <Item {...item} onPick={() => this.onPick(item)}/>)}
      </View>
    );
  }

  onPick(item) {
    this.props.onPick(item);
  }
}

const style = styles({});

export default List;
