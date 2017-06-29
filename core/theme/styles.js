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
      backgroundColor: '#ffffff'
    }
  }, style);
}
