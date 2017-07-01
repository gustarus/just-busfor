'use strict';

import React, {Component} from 'react';
import {View, StatusBar, ActivityIndicator} from 'react-native';
import {app} from '@instances';
import {styles} from '@theme';
import Filter from './filter';
import List from './list';

class ListScene extends Component {

  state = {
    items: [],
    loading: true,
    filter: {
      time: 'asc',
      price: 'asc'
    }
  };

  constructor(options) {
    super(options);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onItemPick = this.onItemPick.bind(this);
  }

  componentDidMount() {
    app.api.get('/search').then(rawItems => {
      const {filter} = this.state;
      const items = this.applyFilter(rawItems, filter);
      this.setState({items, loading: false});
    });
  }

  render() {
    const {filter, items, loading} = this.state;
    return (
      <View style={style.layout}>
        <StatusBar barStyle='light-content'/>
        <Filter {...filter} loading={loading} onChange={this.onFilterChange}/>
        <View style={style.content}>
          <List items={items} loading={loading} onPick={this.onItemPick}/>
        </View>
      </View>
    );
  }

  applyFilter(items, filter) {
    return items
      .sort((a, b) => filter.time === 'asc' ? a.dateTimeFrom - b.dateTimeFrom : b.dateTimeFrom - a.dateTimeFrom)
      .sort((a, b) => {
        if (a.dateTimeFrom === b.dateTimeFrom) {
          return filter.price === 'asc' ? a.price - b.price : b.price - a.price;
        }

        return null;
      });
  }

  onFilterChange(filter) {
    const rawItems = this.state.items;
    const items = this.applyFilter(rawItems, filter);
    this.setState({items, filter});
  }

  onItemPick(item) {
    const {navigate} = this.props.navigation;
    navigate('item', {item});
  }
}

const style = styles();

export default ListScene;
