'use strict';

import _ from 'lodash';
import {Platform} from 'react-native';
import {getActiveAreaSize} from '@helpers';

const {width, height} = getActiveAreaSize();

export default function (style = null) {
  // import window size
  return _.merge({
    layout: {
      width,
      height,
      position: 'relative',
      backgroundColor: '#f4f2f5'
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
