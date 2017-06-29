'use strict';

import {Alert, Keyboard} from 'react-native';

import {Component} from './base';
import {app} from '@instances';

export default class Notification extends Component {

  info(message) {
    return new Promise(resolve => {
      if (app.keyboard.visible) {
        Keyboard.dismiss();
        const listener = Keyboard.addListener('keyboardDidHide', e => {
          listener.remove();
          this.alert(message, resolve);
        });
      } else {
        this.alert(message, resolve);
      }
    });
  }

  alert(message, callback) {
    Alert.alert(message, null, [{text: 'Ок', onPress: callback}]);
  }

  confirm(message) {
    return new Promise((resolve, reject) => {
      Alert.alert(message, null, [
        {text: 'Ок', onPress: resolve},
        {text: 'Отмена', onPress: reject}
      ]);
    });
  }
}
