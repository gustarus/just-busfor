'use strict';

import _ from 'lodash';
import {Dimensions, Platform} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function (style = null) {
  // import window size
  return _.merge({
    layout: {
      width,
      height,
      position: 'relative',
      backgroundColor: '#f4f2f5'
    },

    content: {
      padding: 10
    },

    header: {
      backgroundColor: '#e22a32'
    },

    headerTitle: {
      fontSize: 16,
      color: '#ffffff',
      fontWeight: '500',
      width: '100%'
    }
  }, style);
}
