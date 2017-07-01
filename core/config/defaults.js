'use strict';

import {Navigator} from 'react-native';

// import application scenes
import ListScene from '@story/list';
import ItemScene from '@story/item';

// import application components
import Api from '@components/api';
import Notification from '@components/notification';

// define application base url
const baseUrl = 'https://localhost:3000';

export default {

  debug: typeof __DEV__ !== 'undefined' && __DEV__,

  routes: {
    list: {screen: ListScene},
    item: {screen: ItemScene}
  },

  components: {
    api: {
      constructor: Api,
      baseUrl: `${baseUrl}/api`,
      enabled: true,
      alias: true
    },

    notification: {
      constructor: Notification,
      enabled: true,
      alias: true
    }
  }
};
