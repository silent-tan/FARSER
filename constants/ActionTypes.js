'use strict';

import keyMirror from 'keymirror';
import assign from 'lodash/assign'

var consts = keyMirror({
  YOUR_ACTION_TYPE: null,
  SET_DRAWER_STATUS: null,
  SET_SCENE: null,
  GODDESS_RECEIVE_DATA: null
  // other action ...
});

module.exports = assign(consts, {
  DRAWER_OFFSET: 60
});
