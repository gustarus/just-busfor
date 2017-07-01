'use strict';

import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

// configure application instance
import {app} from '@instances';
import {defaults} from '@config';
app.configure(defaults).boot();

module.exports = StackNavigator(app.settings.routes);
