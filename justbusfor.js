'use strict';

import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

// configure moment
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

// configure application instance
import {app} from '@instances';
import {defaults} from '@config';
app.configure(defaults).boot();

module.exports = StackNavigator(app.settings.routes);
