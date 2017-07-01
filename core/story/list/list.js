'use strict';

import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {styles} from '@theme';
import Item from './item';

class List extends Component {

  render() {
    const {items, loading} = this.props;
    if (loading) {
      return null;
    }

    return (
      <ScrollView style={style.list}>
        {items.map((item, i) => (
          <Item key={i} {...item}
                onPick={() => this.onPick(item)}/>
        ))}
      </ScrollView>
    );
  }

  onPick(item) {
    this.props.onPick(item);
  }
}

const style = styles({
  list: {
    padding: 10
  }
});

export default List;
