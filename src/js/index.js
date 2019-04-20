

import { polyfill } from 'es6-promise'; polyfill();
import 'nodelist-foreach-polyfill';
require('es6-promise').polyfill();
window.addEventListener('DOMContentLoaded', function() {
    'use strict';

let form = require('./parts/form.js'),
times = require('./parts/timer.js'),
tabs = require('./parts/tabs.js'),
script = require('./parts/script.js'),
pictire = require('./parts/picture.js');
form();
times();
tabs();
script();
pictire();

});
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }