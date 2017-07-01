'use strict';

import ExtraDimensions from 'react-native-extra-dimensions-android';

export default function() {
  const width = ExtraDimensions.get('REAL_WINDOW_WIDTH');
  const height = ExtraDimensions.get('REAL_WINDOW_HEIGHT')
    - ExtraDimensions.get('STATUS_BAR_HEIGHT')
    - ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT')
    - ExtraDimensions.get('SMART_BAR_HEIGHT');

  return {width, height};
}
